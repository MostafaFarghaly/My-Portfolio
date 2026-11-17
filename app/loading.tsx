export default function Loading() {
  return (
    <div className="wrap min-h-[60vh] flex flex-col items-center justify-center py-24 select-none">
      <div className="relative flex items-center justify-center">
        <div className="w-12 h-12 rounded-full border-2 border-violet-500/20 border-t-violet-500 animate-spin" />
        <div className="absolute w-6 h-6 rounded-full bg-violet-500/10" />
      </div>
      <p className="mt-4 text-xs font-mono uppercase tracking-widest text-slate-400 animate-pulse">
        Loading view...
      </p>
    </div>
  );
}
