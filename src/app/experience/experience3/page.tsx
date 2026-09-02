import Link from "next/link";

export default function Experience3Page() {
  return (
        <main className="min-h-screen bg-[#0a0a0a] font-mono text-zinc-200">
      <div className="border-b border-zinc-800 px-4 py-2 text-zinc-500">experiences</div>

      <section className="border-b border-zinc-800 px-4 py-3">
        <h1 className="font-semibold">HacktheHood Hackathon</h1>
        <p className="mt-2 text-zinc-400">
          October 2024
        </p>
      </section>

      <section className="border-b border-zinc-800 px-4 py-3">
        <div className="text-zinc-500">Description</div>

        <p className="mt-3 text-zinc-400">
          Took part in HacktheHood&apos;s first hackathon in Oakland, CA. Placed 3rd overall with an interactive game geared towards tourists of the Bay Area. The app included guides to navigate with public transport as well as destinations to visit. Coming from a more experienced background, I was able to teach my group how to use a text editor and easy ways to develop and test ideas. This experience was an excellent way for me to talk to people of the industry and give my input on any future hackathons the organization did.
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
