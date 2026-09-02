import Link from "next/link";

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] font-mono text-zinc-200">
      <div className="border-b border-zinc-800 px-4 py-2 text-zinc-500">experiences</div>
      
      <section className="border-b border-zinc-800 px-4 py-3">
        <h1 className="font-semibold">IgniteCS Mentor</h1>
        <p className="mt-2 text-zinc-400">
          September 2025
        </p>
      </section>

      <section className="border-b border-zinc-800 px-4 py-3">
        <div className="text-zinc-500">Description</div>
      
        <p className="mt-3 text-zinc-400">
           Took part in mentoring and judging over 50+ students&apos; projects from K-12 schools that are apart of underrepresented communities. Aided in providing concise and easy to understand tips for young developers to excel academically in college.
        Judged student projects in terms of code organization and complexity in accordance to their age and whether or not they worked in a group or solo. Provided directive on future developments to add to their projects as well as good habits to maintain through the implementation process.
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
