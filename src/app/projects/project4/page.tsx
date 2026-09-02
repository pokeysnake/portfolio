import Link from "next/link";

export default function Project4Page() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] font-mono text-zinc-200">
      <div className="border-b border-zinc-800 px-4 py-2 text-zinc-500">projects</div>

      <section className="border-b border-zinc-800 px-4 py-3">
        <h1 className="font-semibold">mini-max connect 4 vs ai</h1>
        <p className="mt-2 text-zinc-400">turn-based strategy AI with constrained search optimization.</p>
      </section>

      <section className="border-b border-zinc-800 px-4 py-3">
        <div className="text-zinc-500">tech stack</div>
        <p className="mt-2 italic text-zinc-300">java, minimax, alpha-beta pruning</p>
        <p className="mt-3 text-zinc-400">
          Developed and tested a Connect 4 AI with turn-based gameplay powered by minimax and alpha-beta pruning. The AI plays optimally every turn as a result from diving deeper into the game tree.
          Fine tuned iterative deepening with time-based search limits to reach roughly 5-8 plies in early game states
          and 15+ plies in late game positions. 
        </p>
      </section>

      <section className="border-b border-zinc-800 px-4 py-3">
        <div className="text-zinc-500">links</div>
        <div className="mt-2 space-y-2">
          <div className="flex items-center justify-between">
            <span>souce / github</span>
            <a href="https://github.com/pokeysnake/MiniMax-Game" className="text-zinc-400 hover:text-zinc-200">
              github.com/pokeysnake/MiniMax-Game
            </a>
          </div>
        </div>
      </section>

      <div className="px-4 py-3">
        <Link href="/" className="text-amber-400 hover:text-amber-300">
          ← back / to home
        </Link>
      </div>
    </main>
  );
}
