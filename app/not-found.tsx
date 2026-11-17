import Link from "next/link";
import { ArrowLeft, Home, FolderGit2, Mail, Terminal } from "lucide-react";

export default function NotFound() {
  return (
    <main className="wrap min-h-[75vh] flex flex-col items-center justify-center text-center py-24 select-none">
      <div className="relative mb-6">
        <div className="w-24 h-24 rounded-3xl bg-violet-600/10 border border-violet-500/25 flex items-center justify-center text-violet-400 mx-auto shadow-2xl shadow-violet-500/20">
          <Terminal size={40} />
        </div>
        <span className="absolute -top-2 -right-2 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-violet-500 text-white">
          404
        </span>
      </div>

      <p className="text-xs font-mono uppercase tracking-widest text-violet-400 mb-2">
        RESOURCE NOT FOUND / STATUS 404
      </p>

      <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-4">
        Lost in the <span className="gradient-text">codebase?</span>
      </h1>

      <p className="text-slate-400 text-sm sm:text-base max-w-md mx-auto mb-8 leading-relaxed">
        The route you are looking for has either been moved, refactored, or doesn&apos;t exist.
      </p>

      {/* Quick Navigation Action Grid */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link href="/" className="button button-acid group">
          <Home size={16} />
          <span>Return Home</span>
        </Link>
        <Link href="/projects" className="button button-outline group">
          <FolderGit2 size={16} />
          <span>Browse Projects</span>
        </Link>
        <Link href="/contact" className="button button-outline group">
          <Mail size={16} />
          <span>Contact Me</span>
        </Link>
      </div>
    </main>
  );
}
