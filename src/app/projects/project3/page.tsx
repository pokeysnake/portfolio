import Link from "next/link";

export default function Project3Page() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] font-mono text-zinc-200">
      <div className="border-b border-zinc-800 px-4 py-2 text-zinc-500">projects</div>

      <section className="border-b border-zinc-800 px-4 py-3">
        <h1 className="font-semibold">docker clone</h1>
        <p className="mt-2 text-zinc-400">container runtime implementation focused on Linux process and filesystem isolation.</p>
      </section>

      <section className="border-b border-zinc-800 px-4 py-3">
        <div className="text-zinc-500">tech stack</div>
        <p className="mt-2 italic text-zinc-300">golang, ubuntu linux</p>
        <p className="mt-3 text-zinc-400">
          Built and manually tested a container runtime in Go that isolates workloads using Linux PID, UTS, and mount
          namespaces, debugged isolation behavior through forked child processes and custom SysProcAttr clone flags,
          and verified filesystem boundaries with chroot plus proc/tmpfs mounts. Added cleanup routines to prevent
          orphaned mounts after test runs.
        </p>
      </section>

      <section className="border-b border-zinc-800 px-4 py-3">
        <div className="text-zinc-500">links</div>
        <div className="mt-2 space-y-2">
          <div className="flex items-center justify-between">
            <span>source / github</span>
            <a href="https://github.com/pokeysnake/DockerProject" className="text-zinc-400 hover:text-zinc-200">
              github.com/pokeysnake/DockerProject
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
