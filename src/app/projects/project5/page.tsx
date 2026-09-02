import Link from "next/link";

export default function Project5Page() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] font-mono text-zinc-200">
      <div className="border-b border-zinc-800 px-4 py-2 text-zinc-500">projects</div>

      <section className="border-b border-zinc-800 px-4 py-3">
        <h1 className="font-semibold">simple trading strategy backtester</h1>
        <p className="mt-2 text-zinc-400">interactive strategy validation workflow for historical market data.</p>
      </section>

      <section className="border-b border-zinc-800 px-4 py-3">
        <div className="text-zinc-500">tech stack</div>
        <p className="mt-2 italic text-zinc-300">python, pandas, matplotlib, streamlit</p>
        <p className="mt-3 text-zinc-400">
          Built and tested a backtesting engine for algorithmic strategies, validating signal behavior over 5 years of
          OHLC history before presenting results to users. Metrics are put against Buy and Hold of the S&P500. Pulled and cleaned yFinance datasets, manually implemented
          technical indicators, and simulated buy/sell logic against known references to confirm correctness before
          full backtests. Developed an interactive dashboard with guides for users to experiment with the strategies available for their own findings.
        </p>
      </section>

      <section className="border-b border-zinc-800 px-4 py-3">
        <div className="text-zinc-500">links</div>
        <div className="mt-2 space-y-2">
          <div className="flex items-center justify-between">
            <span>visit / site</span>
            <a href="https://simplebacktester.streamlit.app/" className="text-zinc-400 hover:text-zinc-200">
              simplebacktester.streamlit.app/
            </a>
          </div>
          <div className="flex items-center justify-between border-t border-zinc-800 pt-2">
            <span>source / github</span>
            <a href="https://github.com/pokeysnake/Backtesting_yfinance/tree/main" className="text-zinc-400 hover:text-zinc-200">
              github.com/pokeysnake/Backtesting_yfinance
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
