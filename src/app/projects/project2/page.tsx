import Link from "next/link";

export default function Project2Page() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] font-mono text-zinc-200">
      <div className="border-b border-zinc-800 px-4 py-2 text-zinc-500">projects</div>

      <section className="border-b border-zinc-800 px-4 py-3">
        <h1 className="font-semibold">multi-cancer detection ml system</h1>
        <p className="mt-2 text-zinc-400">
          machine learning pipeline for lung, breast, and brain cancer detection across tabular and imaging data.
        </p>
      </section>

      <section className="border-b border-zinc-800 px-4 py-3">
        <div className="text-zinc-500">tech stack</div>
        <p className="mt-2 italic text-zinc-300">python, tensorflow, scikit-learn, pandas</p>
        <p className="mt-3 text-zinc-400">
          Managed a 4-person team to build detection workflows for multiple cancer types using clinical and image
          datasets, engineered and benchmarked 5+ models including CNN, SVM, Naive Bayes, Logistic Regression,
          and MLP while sustaining 90%+ average accuracy, and implemented feature engineering plus image
          preprocessing pipelines for normalization and augmentation. Validated model quality with cross-validation,
          confusion matrices, and ROC analysis, then documented findings for cross-functional review and iteration.
        </p>
      </section>

      <section className="border-b border-zinc-800 px-4 py-3">
        <div className="text-zinc-500">links</div>
        <div className="mt-2 space-y-2">
          <div className="flex items-center justify-between">
            <span>presentation / pdf</span>
            <a
              href="/CS4210%20Project%20Presentation.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-400 hover:text-zinc-200"
            >
              Project Presentation
            </a>
          </div>
          <div className="flex items-center justify-between border-t border-zinc-800 pt-2">
            <span>source / github</span>
            <a href="#" className="text-zinc-400 hover:text-zinc-200">
              colab.research.google.com
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
