import Link from "next/link";

export default function Project1Page() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] font-mono text-zinc-200">
      <div className="border-b border-zinc-800 px-4 py-2 text-zinc-500">projects</div>

      <section className="border-b border-zinc-800 px-4 py-3">
        <h1 className="font-semibold">gather</h1>
        <p className="mt-2 text-zinc-400">
          full-stack social recipe platform focused on collaborative discovery and sharing.
        </p>
      </section>

      <section className="border-b border-zinc-800 px-4 py-3">
        <div className="text-zinc-500">tech stack</div>
        <p className="mt-2 italic text-zinc-300">next.js, typescript, postgresql, prisma, tailwindcss</p>
        <p className="mt-3 text-zinc-400">
          Led a 5-person team to build and ship the platform with Next.js and PostgreSQL via Prisma on Vercel,
          designed 15+ REST endpoints with robust relational modeling including many-to-many junction tables,
          and introduced a branch-and-review workflow that reduced merge friction before production releases.
          Integrated TheMealDB with the local dataset to support dual-source recipe search while reducing
          duplicated logic, and ran weekly sprint triage sessions to prioritize bugs, maintain delivery
          milestones, and keep SRS documentation aligned with implementation. 

          Website has real time notifications for likes, messages, and friend requests. Users have the ability to view other user uploaded recipes as well as upload their own. 
          Search functionality includes tags for each meal from the DB or user upload for eficient and accurate searches. 
        </p>
      </section>

      <section className="border-b border-zinc-800 px-4 py-3">
        <div className="text-zinc-500">links</div>
        <div className="mt-2 space-y-2">
          <div className="flex items-center justify-between">
            <span>visit / site</span>
            <a href="https://cs4800-gather.vercel.app/explore-recipes" className="text-zinc-400 hover:text-zinc-200">
              gather
            </a>
          </div>
          <div className="flex items-center justify-between border-t border-zinc-800 pt-2">
            <span>source / github</span>
            <a href="#" className="text-zinc-400 hover:text-zinc-200">
              github.com/CS4800-Group8/Gather.git
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
