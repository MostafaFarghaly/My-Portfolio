"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Github, ExternalLink, Sparkles, Terminal, Cpu } from "lucide-react";
import type { Project } from "@/lib/data";
import { motion } from "framer-motion";

export default function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="project-card group relative flex flex-col h-full rounded-3xl bg-[#12141d]/70 border border-white/10 p-6 backdrop-blur-xl hover:border-violet-500/40 hover:shadow-2xl hover:shadow-violet-500/10 transition-all duration-300"
    >
      {/* Visual / Mockup Preview Container */}
      <Link
        href={`/projects/${project.slug}`}
        className="project-art relative h-56 rounded-2xl overflow-hidden bg-[#0c0d15] border border-white/5 flex items-center justify-center block group/preview"
        style={{ "--project-accent": project.accent } as React.CSSProperties}
        aria-label={`View details for ${project.title}`}
      >
        {/* Glow ambient layer */}
        <div
          className="absolute inset-0 opacity-20 group-hover/preview:opacity-35 transition-opacity duration-500 blur-2xl pointer-events-none"
          style={{ background: `radial-gradient(circle, ${project.accent} 0%, transparent 70%)` }}
        />

        {/* Project Number Badge */}
        <span className="project-badge-num z-20">
          {project.number}
        </span>

        {/* Category Pill on top-right */}
        <span className="absolute top-3.5 right-3.5 z-20 text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/60 border border-white/10 text-slate-300 backdrop-blur-md">
          {project.categoryGroup}
        </span>

        {project.image ? (
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out group-hover/preview:scale-108"
            />
          </div>
        ) : (
          <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-6 text-center select-none">
            {/* Visual type styling */}
            {project.visual === "grid" && (
              <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#80808015_1px,transparent_1px),linear-gradient(to_bottom,#80808015_1px,transparent_1px)] bg-[size:24px_24px]" />
            )}
            {project.visual === "orb" && (
              <div
                className="w-24 h-24 rounded-full blur-xl opacity-30 animate-pulse-subtle"
                style={{ backgroundColor: project.accent }}
              />
            )}
            {project.visual === "bars" && (
              <div className="absolute bottom-4 left-6 right-6 flex items-end gap-1.5 h-12 opacity-25">
                <div className="w-1/5 bg-violet-400 h-1/2 rounded-t" />
                <div className="w-1/5 bg-indigo-400 h-3/4 rounded-t" />
                <div className="w-1/5 bg-cyan-400 h-full rounded-t" />
                <div className="w-1/5 bg-emerald-400 h-2/3 rounded-t" />
                <div className="w-1/5 bg-amber-400 h-4/5 rounded-t" />
              </div>
            )}

            <span
              className="text-5xl sm:text-6xl font-black tracking-tighter opacity-80 mb-1 transition-transform duration-500 ease-out group-hover/preview:scale-110 drop-shadow-md"
              style={{ color: project.accent }}
            >
              {project.title.slice(0, 2).toUpperCase()}
            </span>
            <span className="text-[11px] font-mono tracking-widest text-slate-400 uppercase mt-1">
              {project.title}
            </span>
          </div>
        )}

        {/* Hover Arrow Action Pill */}
        <div className="absolute bottom-3 right-3 z-20 w-9 h-9 rounded-full bg-neutral-900/90 border border-white/15 flex items-center justify-center text-white backdrop-blur-md transition-all duration-300 group-hover/preview:bg-violet-600 group-hover/preview:scale-110 shadow-lg">
          <ArrowUpRight size={16} />
        </div>
      </Link>

      {/* Project Meta Info */}
      <div className="project-meta flex items-start justify-between gap-3 mt-5 mb-2">
        <div>
          <p className="project-category text-xs font-mono font-semibold tracking-wider text-violet-400 mb-1">
            {project.category} · {project.year}
          </p>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-violet-300 transition-colors">
            <Link href={`/projects/${project.slug}`}>
              {project.title}
            </Link>
          </h3>
        </div>

        {/* Action icons */}
        <div className="flex items-center gap-1.5 shrink-0 pt-1">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 border border-transparent hover:border-white/10 transition-all"
              aria-label={`GitHub Repository for ${project.title}`}
              title="View Source on GitHub"
            >
              <Github size={17} />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/10 border border-transparent hover:border-cyan-500/20 transition-all"
              aria-label={`Live Demo for ${project.title}`}
              title="Open Live Application"
            >
              <ExternalLink size={17} />
            </a>
          )}
        </div>
      </div>

      <p className="project-description text-sm text-slate-400 leading-relaxed mb-5 flex-grow">
        {project.description}
      </p>

      {/* Tech Stack Pills */}
      <div className="tag-list flex flex-wrap gap-1.5 mt-auto pt-2">
        {project.stack.map((tag) => (
          <span
            key={tag}
            className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-slate-300 group-hover:border-violet-500/20 transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
