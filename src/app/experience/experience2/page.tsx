import Link from "next/link";

export default function Experience2Page() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] font-mono text-zinc-200">
      <div className="border-b border-zinc-800 px-4 py-2 text-zinc-500">experiences</div>

      <section className="border-b border-zinc-800 px-4 py-3">
        <h1 className="font-semibold">Parent-Student Tutor</h1>
        <p className="mt-2 text-zinc-400">
          August 2024 - May 2025
        </p>
      </section>

      <section className="border-b border-zinc-800 px-4 py-3">
        <div className="text-zinc-500">Description</div>

        <p className="mt-3 text-zinc-400">
          Tutored incoming parent-students at community college in Math, Statistics, as well as intro to programming. Developed guides with tutorials and example problems for Calculus 1 to aid in absorption of material as well as 1:1 sessions for personalized tutoring. Maintained frequent grade check-ins to monitor application of knowledge learned from mistakes and guides.
        </p>
      </section>
      <div className="px-4 py-3">
        <Link href="/" className="text-amber-400 hover:text-amber-300">
          ← back / to home
        </Link>
      </div>
    </main>


  );
}
