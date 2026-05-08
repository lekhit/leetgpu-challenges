import os
import time
import ctypes
import torch
import subprocess

class Evaluate:
    @staticmethod
    def eval_cuda(ch):
        # 1. Compile a fresh uniquely named library
        so_filename = f'solution_func_{int(time.time())}.so'
        cmd = f'nvcc -shared -Xcompiler -fPIC -O3 solution.cu -o {so_filename}'
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True)
        
        if result.returncode != 0:
            error_msg = f"CUDA compilation failed. Please check 'solution.cu' for errors.\n\nCompiler Output:\n{result.stderr}\n{result.stdout}"
            raise RuntimeError(error_msg)
            
        lib = ctypes.CDLL(f'./{so_filename}')

        # 2. Extract signature and set argtypes
        signature = ch.get_solve_signature()
        lib.solve.argtypes = [arg_info[0] for arg_info in signature.values()]

        Evaluate._run_tests(ch, signature, lambda kwargs: lib.solve(*Evaluate._build_cuda_args(kwargs, signature)))

    @staticmethod
    def eval_python(ch, eval_lang="pytorch"):
        import importlib.util
        import sys

        filename = f"solution_{eval_lang}.py"
        spec = importlib.util.spec_from_file_location("solution", filename)
        solution = importlib.util.module_from_spec(spec)
        sys.modules["solution"] = solution
        spec.loader.exec_module(solution)

        signature = ch.get_solve_signature()
        Evaluate._run_tests(ch, signature, lambda kwargs: Evaluate._run_python(solution, kwargs))

    @staticmethod
    def _run_python(solution, kwargs):
        solution.solve(**kwargs)
        if torch.cuda.is_available():
            torch.cuda.synchronize()

    @staticmethod
    def eval_mojo(ch):
        print("Mojo evaluation is currently executed via a separate runner or wrapper.")
        print("Ensure you have the mojo compiler installed and use 'mojo build solution.mojo' + ctypes/ffi,")
        print("or run an external python bridge. This is a stub.")

    @staticmethod
    def _build_cuda_args(kwargs, signature):
        cuda_args = []
        for k, (arg_type, dir_type) in signature.items():
            val = kwargs[k]
            if isinstance(val, torch.Tensor):
                cuda_args.append(ctypes.cast(val.data_ptr(), arg_type))
            else:
                cuda_args.append(arg_type(val))
        return cuda_args

    @staticmethod
    def _run_tests(ch, signature, run_fn):
        print("=== Running Functional Tests ===")
        functional_tests = ch.generate_functional_test()
        all_passed = True

        for i, test in enumerate(functional_tests):
            ref_kwargs = {k: (v.clone() if isinstance(v, torch.Tensor) else v) for k, v in test.items()}
            test_kwargs = {k: (v.clone() if isinstance(v, torch.Tensor) else v) for k, v in test.items()}

            # Run Reference
            ch.reference_impl(**ref_kwargs)

            # Run implementation
            run_fn(test_kwargs)
            if torch.cuda.is_available():
                torch.cuda.synchronize()

            # Verify outputs
            match = True
            for k, (_, dir_type) in signature.items():
                if dir_type == "out":
                    if not torch.allclose(ref_kwargs[k], test_kwargs[k], atol=ch.atol, rtol=ch.rtol):
                        match = False
                        print(f"❌ Test {i+1}/{len(functional_tests)} Failed on output '{k}'")
                        break

            if match:
                print(f"✅ Test {i+1}/{len(functional_tests)} Passed")
            else:
                all_passed = False
                break

        if all_passed:
            print("\n🎉 All functional tests passed!")
            return True
        else:
            return False