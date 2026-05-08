import os
import glob
import json
import re

def generate_notebook(challenge_dir, output_dir):
    parts = challenge_dir.strip('/').split('/')
    level = parts[-2]
    name = parts[-1]
    
    # Check if files exist
    challenge_py_path = os.path.join(challenge_dir, "challenge.py")
    challenge_html_path = os.path.join(challenge_dir, "challenge.html")
    starter_dir = os.path.join(challenge_dir, "starter")
    
    if not os.path.exists(challenge_py_path) or not os.path.exists(challenge_html_path):
        return
        
    print(f"Migrating {level} {name}...")
    
    cells = []
    
    # 1. Config cell
    cells.append({
        "cell_type": "code",
        "execution_count": None,
        "metadata": {"id": "config_cell"},
        "outputs": [],
        "source": [
            "# Change this to your preferred framework (e.g., 'cuda', 'pytorch', 'triton', 'jax', 'mojo')\n",
            "EVAL_LANG = 'cuda'\n",
            "\n",
            "SAVE_GPU = True\n"
        ]
    })
    
    # 2. Markdown description
    with open(challenge_html_path, 'r', encoding='utf-8') as f:
        html_content = f.read()
        
    # Replace LaTeX delimiters with standard markdown/mathjax delimiters
    html_content = html_content.replace("\\(", "$").replace("\\)", "$")
    html_content = html_content.replace("\\[", "$$").replace("\\]", "$$")
    
    cells.append({
        "cell_type": "markdown",
        "metadata": {"id": "desc_cell"},
        "source": [html_content]
    })
    
    # 3. Starter templates (hidden cells)
    if os.path.exists(starter_dir):
        for starter_file in sorted(os.listdir(starter_dir)):
            if starter_file.startswith("starter."):
                ext = starter_file[len("starter."):]
                
                # Header mapping
                header_map = {
                    "cu": "# CUDA",
                    "cute.py": "# CUTE",
                    "jax.py": "# JAX",
                    "mojo": "# MOJO",
                    "pytorch.py": "# Torch",
                    "triton.py": "# Triton"
                }
                header_text = header_map.get(ext, f"# {ext.upper()}")
                
                cells.append({
                    "cell_type": "markdown",
                    "metadata": {},
                    "source": [header_text]
                })
                
                # Output filenames based on language
                if ext == "cu":
                    out_filename = "solution.cu"
                elif ext == "mojo":
                    out_filename = "solution.mojo"
                elif ext.endswith(".py"):
                    prefix = ext.replace(".py", "")
                    out_filename = f"solution_{prefix}.py"
                else:
                    out_filename = f"solution_{ext}"
                    
                with open(os.path.join(starter_dir, starter_file), 'r', encoding='utf-8') as f:
                    starter_content = f.read()
                    
                cells.append({
                    "cell_type": "code",
                    "execution_count": None,
                    "metadata": {
                        "id": f"starter_{ext.replace('.', '_')}",
                        "cellView": "form",
                        "collapsed": True
                    },
                    "outputs": [],
                    "source": [
                        f"%%writefile {out_filename}\n",
                        starter_content
                    ]
                })
    
    # 4. Challenge Base & Challenge logic
    base_py_path = os.path.join("challenges", "core", "challenge_base.py")
    with open(base_py_path, 'r', encoding='utf-8') as f:
        base_content = f.read()
        
    setup_script = f"""# Download required files from GitHub
!mkdir -p core
!wget -q https://raw.githubusercontent.com/lekhit/leetgpu-challenges/main/challenges/core/challenge_base.py -O core/challenge_base.py
!wget -q https://raw.githubusercontent.com/lekhit/leetgpu-challenges/main/challenges/core/evaluator.py -O core/evaluator.py
!wget -q https://raw.githubusercontent.com/lekhit/leetgpu-challenges/main/{challenge_dir}/challenge.py -O challenge.py

from challenge import Challenge
from core.evaluator import Evaluate

ch = Challenge()"""

    cells.append({
        "cell_type": "markdown",
        "metadata": {},
        "source": ["# Evaluate Setup"]
    })
    
    cells.append({
        "cell_type": "code",
        "execution_count": None,
        "metadata": {"id": "challenge_logic", "cellView": "form", "collapsed": True},
        "outputs": [],
        "source": [line + "\n" for line in setup_script.split("\n")]
    })
    
    cells.append({
        "cell_type": "markdown",
        "metadata": {},
        "source": ["# Evaluation code"]
    })
    
    # 6. Run and Disconnect runtime cell
    cells.append({
        "cell_type": "code",
        "execution_count": None,
        "metadata": {"id": "disconnect"},
        "outputs": [],
        "source": [
            "# Run the evaluator based on configuration\n",
            "if EVAL_LANG == 'cuda':\n",
            "    Evaluate.eval_cuda(ch)\n",
            "elif EVAL_LANG in ['pytorch', 'triton', 'jax', 'cute']:\n",
            "    Evaluate.eval_python(ch, EVAL_LANG)\n",
            "elif EVAL_LANG == 'mojo':\n",
            "    Evaluate.eval_mojo(ch)\n",
            "else:\n",
            "    print(f\"Unknown language {EVAL_LANG}\")\n",
            "\n",
            "# Disconnect runtime to save Colab resources\n",
            "if SAVE_GPU:\n",
            "    from google.colab import runtime\n",
            "    runtime.unassign()\n"
        ]
    })
    
    notebook = {
      "nbformat": 4,
      "nbformat_minor": 0,
      "metadata": {
        "accelerator": "GPU",
        "colab": {
          "gpuType": "T4",
          "provenance": []
        }
      },
      "cells": cells
    }
    
    out_dir_level = os.path.join(output_dir, level)
    out_file = os.path.join(out_dir_level, f"{name}.ipynb")
    os.makedirs(out_dir_level, exist_ok=True)
    with open(out_file, 'w', encoding='utf-8') as f:
        json.dump(notebook, f, indent=2)
    print(f"Saved to {out_file}")

if __name__ == "__main__":
    out_dir = "challenges/colab_exports"
    
    exported_notebooks = []
    
    challenges_glob = glob.glob("challenges/*/*")
    for challenge_dir in challenges_glob:
        if os.path.isdir(challenge_dir) and "colab_exports" not in challenge_dir:
            generate_notebook(challenge_dir, out_dir)
            parts = challenge_dir.strip('/').split('/')
            level = parts[-2]
            name = parts[-1]
            if os.path.exists(os.path.join(out_dir, level, f"{name}.ipynb")):
                exported_notebooks.append((level, name))
                
    # Create README.md
    readme_path = os.path.join(out_dir, "README.md")
    with open(readme_path, "w", encoding="utf-8") as f:
        f.write("# LeetGPU Colab Notebooks\n\n")
        f.write("Click the badges below to open the challenges directly in Google Colab.\n\n")
        
        # Group by level
        grouped = {}
        for level, name in exported_notebooks:
            if level not in grouped:
                grouped[level] = []
            grouped[level].append(name)
            
        # Define specific sort order for levels
        level_order = {"easy": 1, "medium": 2, "hard": 3}
        for level in sorted(grouped.keys(), key=lambda x: level_order.get(x, 99)):
            f.write(f"## {level.capitalize()}\n\n")
            for name in sorted(grouped[level]):
                colab_link = f"https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/{level}/{name}.ipynb"
                badge = f"[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)]({colab_link})"
                f.write(f"- {badge} **{name}**\n")
            f.write("\n")
    print(f"Generated {readme_path}")
