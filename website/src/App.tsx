import { useState, useMemo } from 'react';
import { searchChallenges, getStats } from './data/challenges';

type Difficulty = 'easy' | 'medium' | 'hard' | 'all';

interface ChallengeCardProps {
  challenge: {
    id: string;
    name: string;
    difficulty: Difficulty;
    colabUrl: string;
  };
}

function ChallengeCard({ challenge }: ChallengeCardProps) {
  const difficultyColors = {
    easy: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    medium: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    hard: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
    all: 'bg-slate-500/10 text-slate-400 border-slate-500/20',
  };

  const difficultyLabels = {
    easy: 'Easy',
    medium: 'Medium',
    hard: 'Hard',
    all: 'All',
  };

  return (
    <div className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-5 hover:border-violet-500/50 hover:bg-slate-800/80 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/10">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <span className={`px-2 py-0.5 text-xs font-medium rounded-full border ${difficultyColors[challenge.difficulty]}`}>
              {difficultyLabels[challenge.difficulty]}
            </span>
            <span className="text-xs text-slate-500 font-mono">#{challenge.id}</span>
          </div>
          <h3 className="text-sm font-medium text-slate-200 truncate group-hover:text-violet-300 transition-colors">
            {challenge.name.replace(/_/g, ' ')}
          </h3>
        </div>
        <a
          href={challenge.colabUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white text-xs font-medium rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/25"
        >
          <ColabIcon className="w-3.5 h-3.5" />
          Open in Colab
        </a>
      </div>
    </div>
  );
}

function ColabIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.54 9.46a5.02 5.02 0 0 1 7.07 0l.71.7.7-.7a5.02 5.02 0 0 1 7.08 7.07L12 24.6 3.83 16.53a5.02 5.02 0 0 1 .71-7.07z" opacity="0.6" />
      <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm-1.5 17.5l-4-4 1.41-1.41L10.5 14.67l5.59-5.59L17.5 10.5l-7 7z" />
    </svg>
  );
}

function StatsCard({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 text-center">
      <div className={`text-2xl font-bold ${color}`}>{value}</div>
      <div className="text-xs text-slate-400 mt-1">{label}</div>
    </div>
  );
}

function StepCard({ step, title, description, children }: { step: number; title: string; description: string; children?: React.ReactNode }) {
  return (
    <div className="relative flex gap-4 sm:gap-6">
      {/* Step number */}
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-violet-500/20 flex-shrink-0">
          {step}
        </div>
        <div className="w-px flex-1 bg-gradient-to-b from-violet-500/30 to-transparent mt-3" />
      </div>
      {/* Content */}
      <div className="pb-10 flex-1 min-w-0">
        <h4 className="text-lg font-semibold text-white mb-1">{title}</h4>
        <p className="text-slate-400 text-sm mb-4 leading-relaxed">{description}</p>
        {children}
      </div>
    </div>
  );
}

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty>('all');

  const stats = useMemo(() => getStats(), []);
  
  const filteredChallenges = useMemo(() => {
    return searchChallenges(searchQuery, selectedDifficulty);
  }, [searchQuery, selectedDifficulty]);

  const difficultyTabs: { key: Difficulty; label: string; color: string; count: number }[] = [
    { key: 'all', label: 'All', color: 'text-slate-300', count: stats.total },
    { key: 'easy', label: 'Easy', color: 'text-emerald-400', count: stats.easy },
    { key: 'medium', label: 'Medium', color: 'text-amber-400', count: stats.medium },
    { key: 'hard', label: 'Hard', color: 'text-rose-400', count: stats.hard },
  ];

  const supportedLanguages = [
    { name: 'CUDA', value: 'cuda', color: 'bg-green-500/10 text-green-400 border-green-500/20' },
    { name: 'PyTorch', value: 'pytorch', color: 'bg-orange-500/10 text-orange-400 border-orange-500/20' },
    { name: 'Triton', value: 'triton', color: 'bg-blue-500/10 text-blue-400 border-blue-500/20' },
    { name: 'JAX', value: 'jax', color: 'bg-purple-500/10 text-purple-400 border-purple-500/20' },
    { name: 'Mojo', value: 'mojo', color: 'bg-rose-500/10 text-rose-400 border-rose-500/20' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Background Pattern */}
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMTAgNjAgTSAwIDEwIEwgNjAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxNDgsIDE2MywgMTg0LCAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40 pointer-events-none" />
      
      {/* Header */}
      <header className="relative border-b border-slate-800/50 backdrop-blur-sm bg-slate-900/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-violet-500/20">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M6 8h.01" />
                  <path d="M10 8h.01" />
                  <path d="M14 8h.01" />
                  <path d="M18 8h.01" />
                  <path d="M6 12h.01" />
                  <path d="M10 12h.01" />
                  <path d="M14 12h.01" />
                  <path d="M18 12h.01" />
                  <path d="M6 16h.01" />
                  <path d="M10 16h.01" />
                  <path d="M14 16h.01" />
                  <path d="M18 16h.01" />
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                  LeetsGPU
                </h1>
                <p className="text-xs text-slate-500">Colab Notebooks</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#how-it-works" className="text-sm text-slate-400 hover:text-slate-200 transition-colors">How It Works</a>
              <a href="#challenges" className="text-sm text-slate-400 hover:text-slate-200 transition-colors">Challenges</a>
              <a href="#about" className="text-sm text-slate-400 hover:text-slate-200 transition-colors">About</a>
              <a 
                href="https://github.com/lekhit/leetgpu-challenges" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-slate-400 hover:text-slate-200 transition-colors flex items-center gap-1.5"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-6.24 0-1.38.465-2.52 1.23-3.42-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.9 1.23 2.04 1.23 3.42 0 4.92-2.805 5.94-5.475 6.24.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                GitHub
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
            Free GPU Practice on Google Colab
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Master{' '}
            <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              GPU Programming
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8">
            Practice GPU kernel development with {stats.total} hands-on challenges. 
            From basic operations to advanced transformer architectures — all running free on Google Colab.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mb-12">
            <StatsCard label="Easy" value={stats.easy} color="text-emerald-400" />
            <StatsCard label="Medium" value={stats.medium} color="text-amber-400" />
            <StatsCard label="Hard" value={stats.hard} color="text-rose-400" />
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#how-it-works"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-medium rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/25"
            >
              Get Started
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a 
              href="#challenges"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium rounded-xl transition-all duration-200 border border-slate-700"
            >
              Browse Challenges
            </a>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="relative py-16 border-t border-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">How to Complete a Challenge</h3>
            <p className="text-slate-400 max-w-xl mx-auto">
              Each challenge runs entirely in Google Colab — no local setup needed. Just a Google account and you're ready to go.
            </p>
          </div>

          <div className="space-y-0">
            {/* Step 1 */}
            <StepCard
              step={1}
              title="Open a Challenge in Colab"
              description='Pick any challenge from the list below and click the "Open in Colab" button. The notebook will open directly in Google Colab in your browser.'
            >
              <div className="bg-slate-800/60 border border-slate-700/50 rounded-xl p-4">
                <p className="text-xs text-slate-500 mb-3 font-medium uppercase tracking-wider">Example</p>
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 text-xs font-medium rounded-full border bg-emerald-500/10 text-emerald-400 border-emerald-500/20">Easy</span>
                  <span className="text-sm text-slate-300">reverse array</span>
                  <span className="ml-auto px-3 py-1.5 bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-xs font-medium rounded-lg inline-flex items-center gap-1.5">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    Open in Colab
                  </span>
                </div>
              </div>
            </StepCard>

            {/* Step 2 */}
            <StepCard
              step={2}
              title="Choose Your Language"
              description="In the first code cell, you'll see EVAL_LANG set to a default framework. Change it to your preferred language from the supported options below."
            >
              {/* Language selector mockup */}
              <div className="bg-slate-800/60 border border-slate-700/50 rounded-xl overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-2.5 border-b border-slate-700/50 bg-slate-800/80">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-xs text-slate-500 font-mono">code cell</span>
                </div>
                <div className="p-4 font-mono text-sm">
                  <div className="text-slate-500 mb-1">
                    <span className="text-slate-600 select-none">1  </span>
                    <span className="text-slate-500"># Change this to your preferred framework</span>
                  </div>
                  <div className="mb-1">
                    <span className="text-slate-600 select-none">2  </span>
                    <span className="text-slate-300">EVAL_LANG</span>
                    <span className="text-slate-500"> = </span>
                    <span className="text-green-400">'cuda'</span>
                  </div>
                  <div className="text-slate-600 mb-1">
                    <span className="select-none">3  </span>
                  </div>
                  <div>
                    <span className="text-slate-600 select-none">4  </span>
                    <span className="text-slate-300">SAVE_GPU</span>
                    <span className="text-slate-500"> = </span>
                    <span className="text-blue-400">True</span>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-2">Supported Frameworks</p>
                <div className="flex flex-wrap gap-2">
                  {supportedLanguages.map((lang) => (
                    <span key={lang.value} className={`px-3 py-1.5 text-xs font-medium rounded-lg border ${lang.color} font-mono`}>
                      '{lang.value}'
                    </span>
                  ))}
                </div>
              </div>
            </StepCard>

            {/* Step 3 */}
            <StepCard
              step={3}
              title="Write Your Solution"
              description="Scroll down in the notebook to find the problem description, implementation requirements, and examples. Write your GPU kernel code in the designated solve function."
            >
              <div className="bg-slate-800/60 border border-slate-700/50 rounded-xl overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-2.5 border-b border-slate-700/50 bg-slate-800/80">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-xs text-slate-500 font-mono">problem description</span>
                </div>
                <div className="p-4 space-y-3">
                  <p className="text-sm text-slate-300">Implement a program that reverses an array of 32-bit floating point numbers in-place.</p>
                  <div className="border-t border-slate-700/50 pt-3">
                    <p className="text-xs text-slate-500 font-semibold mb-2">Implementation Requirements:</p>
                    <ul className="space-y-1 text-xs text-slate-400">
                      <li className="flex items-start gap-2">
                        <span className="text-violet-400 mt-0.5">•</span>
                        Use only native features (external libraries are not permitted)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-violet-400 mt-0.5">•</span>
                        The <code className="text-violet-300 bg-violet-500/10 px-1 py-0.5 rounded text-xs">solve</code> function signature must remain unchanged
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-violet-400 mt-0.5">•</span>
                        The final result must be stored back in <code className="text-violet-300 bg-violet-500/10 px-1 py-0.5 rounded text-xs">input</code>
                      </li>
                    </ul>
                  </div>
                  <div className="border-t border-slate-700/50 pt-3">
                    <p className="text-xs text-slate-500 font-semibold mb-2">Example:</p>
                    <div className="bg-slate-900/60 rounded-lg p-3 font-mono text-xs text-slate-400">
                      <div>Input:  <span className="text-cyan-400">[1.0, 2.0, 3.0, 4.0]</span></div>
                      <div>Output: <span className="text-emerald-400">[4.0, 3.0, 2.0, 1.0]</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </StepCard>

            {/* Step 4 */}
            <StepCard
              step={4}
              title='Click "Run all" to Test'
              description='Once your solution is ready, click the "▶ Run all" button in the Colab toolbar (or go to Runtime → Run all). This will execute all cells — compiling your code, running it on the GPU, and validating your output against the expected results.'
            >
              <div className="bg-slate-800/60 border border-slate-700/50 rounded-xl overflow-hidden">
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider px-4 pt-4 mb-3">Colab Toolbar</p>
                {/* Toolbar mockup */}
                <div className="mx-4 mb-4 bg-slate-900/80 rounded-lg border border-slate-700/30 overflow-hidden">
                  {/* Menu bar */}
                  <div className="flex items-center gap-4 px-3 py-2 border-b border-slate-700/30 text-xs text-slate-500">
                    <span>File</span>
                    <span>Edit</span>
                    <span>View</span>
                    <span>Insert</span>
                    <span className="text-slate-400">Runtime</span>
                    <span>Tools</span>
                    <span>Help</span>
                  </div>
                  {/* Toolbar */}
                  <div className="flex items-center gap-3 px-3 py-2">
                    <span className="text-xs text-slate-500">+ Code</span>
                    <span className="text-xs text-slate-500">+ Text</span>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-violet-500/15 border-2 border-violet-400/50 relative">
                      <svg className="w-3.5 h-3.5 text-violet-400" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                      <span className="text-xs font-medium text-violet-300">Run all</span>
                      {/* Animated pulse ring */}
                      <div className="absolute -inset-1 rounded-lg border-2 border-violet-400/30 animate-ping" />
                    </div>
                    <span className="text-xs text-slate-500 ml-2">Copy to Drive</span>
                    <div className="ml-auto flex items-center gap-2">
                      <span className="text-xs text-slate-500">Connect</span>
                      <span className="px-2 py-0.5 bg-slate-700/50 rounded text-xs text-slate-400 font-mono">T4</span>
                    </div>
                  </div>
                </div>
                {/* Screenshot reference */}
                <div className="px-4 pb-4">
                  <img 
                    src="/images/colab-screenshot.png" 
                    alt="Google Colab interface showing Run all button and EVAL_LANG code cell" 
                    className="w-full rounded-lg border border-slate-700/50 shadow-2xl shadow-black/30"
                  />
                </div>
              </div>
            </StepCard>

            {/* Step 5 */}
            <StepCard
              step={5}
              title="Review Results"
              description="After all cells finish running, scroll to the bottom to see your results. The notebook will show whether your solution passed the test cases, along with performance metrics. Iterate on your solution to optimize for speed and correctness!"
            >
              <div className="bg-slate-800/60 border border-slate-700/50 rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-emerald-400">All test cases passed!</p>
                    <p className="text-xs text-slate-500 mt-0.5">Your GPU kernel produced correct results</p>
                  </div>
                </div>
              </div>
            </StepCard>
          </div>

          {/* Quick start callout */}
          <div className="mt-4 bg-gradient-to-r from-violet-500/10 to-indigo-500/10 border border-violet-500/20 rounded-xl p-6 text-center">
            <p className="text-violet-300 font-medium mb-2">Ready to start?</p>
            <p className="text-sm text-slate-400 mb-4">All you need is a Google account. Colab provides free GPU access — no credit card required.</p>
            <a
              href="#challenges"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white text-sm font-medium rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/25"
            >
              Browse Challenges
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 14l-7 7-7-7M19 3l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section id="challenges" className="relative py-16 border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-white">Challenges</h3>
              <p className="text-slate-400 text-sm mt-1">
                {filteredChallenges.length} challenge{filteredChallenges.length !== 1 ? 's' : ''} available
              </p>
            </div>
            
            {/* Search */}
            <div className="relative">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
              <input
                type="text"
                placeholder="Search challenges..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-64 pl-10 pr-4 py-2.5 bg-slate-800/50 border border-slate-700 rounded-xl text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20 transition-all"
              />
            </div>
          </div>

          {/* Difficulty Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {difficultyTabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setSelectedDifficulty(tab.key)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  selectedDifficulty === tab.key
                    ? 'bg-violet-600 text-white shadow-lg shadow-violet-500/25'
                    : 'bg-slate-800/50 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-700/50'
                }`}
              >
                <span className={selectedDifficulty === tab.key ? 'text-white' : tab.color}>{tab.label}</span>
                <span className="ml-2 text-xs opacity-70">({tab.count})</span>
              </button>
            ))}
          </div>

          {/* Challenges Grid */}
          {filteredChallenges.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredChallenges.map((challenge) => (
                <ChallengeCard key={`${challenge.id}-${challenge.name}`} challenge={challenge} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-slate-800 flex items-center justify-center">
                <svg className="w-8 h-8 text-slate-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
              </div>
              <h4 className="text-lg font-medium text-slate-300 mb-2">No challenges found</h4>
              <p className="text-slate-500 text-sm">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-16 border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Why LeetsGPU?</h3>
              <p className="text-slate-400 mb-6">
                GPU programming is essential for modern AI, machine learning, and high-performance computing. 
                LeetsGPU provides a curated collection of challenges that help you build practical skills 
                in CUDA, parallel computing, and GPU optimization — all for free using Google Colab's GPU resources.
              </p>
              <ul className="space-y-3">
                {[
                  'Free access to GPU resources via Google Colab',
                  'Choose from CUDA, PyTorch, Triton, JAX, or Mojo',
                  'Progressive difficulty from basics to advanced',
                  'Real-world ML and AI workloads',
                  'Hands-on kernel optimization practice',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <div className="w-5 h-5 rounded-full bg-violet-500/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-violet-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-800/30 rounded-2xl p-6 border border-slate-700/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <pre className="text-xs text-slate-400 overflow-x-auto">
                <code>{`// Example: Vector Addition Kernel
__global__ void vectorAdd(
    float* a, float* b, float* c, 
    int n
) {
    int i = blockIdx.x * blockDim.x + threadIdx.x;
    if (i < n) {
        c[i] = a[i] + b[i];
    }
}

// Launch configuration
int threadsPerBlock = 256;
int blocksPerGrid = 
    (n + threadsPerBlock - 1) / threadsPerBlock;
vectorAdd<<<blocksPerGrid, threadsPerBlock>>>(
    a, b, c, n
);`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-slate-500 text-sm">
              <span>© 2026 LeetsGPU</span>
              <span>·</span>
              <span>Built for GPU learners</span>
            </div>
            <div className="flex items-center gap-4">
              <a 
                href="https://github.com/lekhit/leetgpu-challenges" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-slate-300 transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-6.24 0-1.38.465-2.52 1.23-3.42-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.9 1.23 2.04 1.23 3.42 0 4.92-2.805 5.94-5.475 6.24.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
