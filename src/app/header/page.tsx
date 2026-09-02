import Link from "next/link";

export default function HeaderPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] px-6 py-10 font-mono text-zinc-200">
      <h1 className="text-xl font-semibold">Header Section</h1>
      <p className="mt-2 text-zinc-400">Placeholder page for header content.</p>
      <p className="mt-6 text-zinc-500">You can add your topbar/header details here later.</p>
      <Link href="/" className="mt-8 inline-block text-amber-400 hover:text-amber-300">
        ← back to whoami
      </Link>
    </main>
  );
}
