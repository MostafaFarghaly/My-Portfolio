import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  Github,
  Layers,
  Sparkles,
  Terminal,
  Calendar,
  Tag,
  Copy,
} from "lucide-react";
import { PageTransition, Reveal } from "@/components/motion";
import { projects } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return {
    title: `${project?.title ?? "Project"} | Mostafa Farghaly`,
    description: project?.description,
    openGraph: {
      title: `${project?.title} — Architecture & Case Study`,
      description: project?.description,
      type: "article",
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const currentIndex = projects.findIndex((item) => item.slug === slug);
  if (currentIndex === -1) notFound();

  const project = projects[currentIndex];
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <PageTransition>
      <article className="wrap pt-28 pb-20">
        {/* Navigation Breadcrumb */}
        <Reveal>
          <div className="flex items-center justify-between mb-8">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors group"
            >
              <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" />
              <span>BACK TO ALL PROJECTS</span>
            </Link>

            <span className="text-xs font-mono text-slate-500">
              PROJECT {project.number} / {String(projects.length).padStart(2, "0")}
            </span>
          </div>
        </Reveal>

        {/* Project Header */}
        <div className="max-w-3xl mb-12">
          <Reveal delay={0.05}>
            <div className="section-tag inline-flex items-center gap-2">
              <Tag size={13} />
              <span>{project.categoryGroup} · {project.category} · {project.year}</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6">
              {project.title}
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="text-slate-300 text-base sm:text-xl leading-relaxed">
              {project.description}
            </p>
          </Reveal>
        </div>

        {/* Project Visual Showcase Card */}
        <Reveal delay={0.2} className="mb-14">
          <div
            className="relative h-[340px] sm:h-[480px] rounded-3xl overflow-hidden border border-white/10 bg-[#090b11] flex items-center justify-center shadow-2xl"
            style={{ "--project-accent": project.accent } as React.CSSProperties}
          >
            <div
              className="absolute inset-0 opacity-25 blur-3xl pointer-events-none"
              style={{ background: `radial-gradient(circle, ${project.accent} 0%, transparent 70%)` }}
            />

            {/* Visual type styling */}
            {project.visual === "grid" && (
              <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:32px_32px]" />
            )}

            {project.image ? (
              <div className="relative w-full h-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority
                  className="object-cover relative z-10"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                />
              </div>
            ) : (
              <div className="relative z-10 text-center p-8 select-none">
                <span
                  className="text-7xl sm:text-9xl font-black tracking-tighter opacity-90 block mb-2 drop-shadow-lg"
                  style={{ color: project.accent }}
                >
                  {project.title.slice(0, 2).toUpperCase()}
                </span>
                <span className="text-sm font-mono tracking-widest text-slate-300 uppercase block font-semibold">
                  {project.category}
                </span>
                <span className="text-xs font-mono text-slate-500 mt-1 block">
                  ARCHITECTURE · CODE · PERFORMANCE
                </span>
              </div>
            )}
          </div>
        </Reveal>

        {/* Technical Overview & Impact Grid */}
        <div className="grid lg:grid-cols-12 gap-10 items-start mb-16">
          <Reveal delay={0.25} className="lg:col-span-8 flex flex-col gap-8">
            {/* Architectural Highlights */}
            <div className="glass-panel p-8 sm:p-12">
              <span className="text-xs font-mono uppercase tracking-widest text-primary mb-3 block">
                ENGINEERING OVERVIEW &amp; IMPACT
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Key Contributions &amp; Architectural Highlights
              </h2>
              <p className="text-slate-300 text-base leading-relaxed mb-6">
                {project.impact}
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Engineered adhering to modern software development standards, prioritizing component reusability, modular architecture, responsive interfaces, secure authentication, and type-safe data flow.
              </p>
            </div>

            {/* Key Features & Functional Modules */}
            {project.features && project.features.length > 0 && (
              <div className="glass-panel p-8 sm:p-10">
                <span className="text-xs font-mono uppercase tracking-widest text-primary mb-3 block">
                  SYSTEM CAPABILITIES
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
                  Key Implemented Features
                </h3>
                <ul className="grid sm:grid-cols-1 gap-3.5">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-slate-300">
                      <CheckCircle2 size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </Reveal>

          {/* Right Column Specs Card */}
          <Reveal delay={0.3} className="lg:col-span-4">
            <div className="glass-panel p-8 flex flex-col gap-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-primary mb-3 block">
                  PROJECT SPECIFICATIONS
                </span>
                <div className="flex flex-col gap-3 py-2 border-y border-white/10 text-xs">
                  <div className="flex justify-between py-1">
                    <span className="text-slate-400">Release Year:</span>
                    <span className="text-white font-mono">{project.year}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-400">Category:</span>
                    <span className="text-white font-mono">{project.categoryGroup}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-400">Status:</span>
                    <span className="text-emerald-400 font-mono">Production Ready</span>
                  </div>
                </div>
              </div>

              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-primary mb-3 block">
                  TECH STACK
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tag) => (
                    <span key={tag} className="skill-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="button button-acid text-center justify-center group"
                  >
                    <Github size={17} />
                    <span>View Repository</span>
                    <ArrowUpRight
                      size={16}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="button button-outline text-center justify-center group"
                  >
                    <ExternalLink size={16} />
                    <span>Launch Live Website</span>
                  </a>
                )}
                <Link
                  href="/contact"
                  className="button button-outline text-center justify-center text-xs"
                >
                  <span>Discuss Similar Project</span>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Bottom Next / Prev Project Navigation */}
        <Reveal delay={0.35}>
          <div className="pt-10 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {prevProject ? (
              <Link
                href={`/projects/${prevProject.slug}`}
                className="glass-panel p-5 flex items-center gap-4 group hover:border-violet-500/40"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:-translate-x-1 transition-all">
                  <ArrowLeft size={18} />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                    PREVIOUS PROJECT
                  </span>
                  <span className="text-sm font-semibold text-white group-hover:text-violet-300 transition-colors">
                    {prevProject.title}
                  </span>
                </div>
              </Link>
            ) : <div />}

            {nextProject && (
              <Link
                href={`/projects/${nextProject.slug}`}
                className="glass-panel p-5 flex items-center justify-between sm:justify-end gap-4 text-right group hover:border-violet-500/40"
              >
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                    NEXT PROJECT
                  </span>
                  <span className="text-sm font-semibold text-white group-hover:text-violet-300 transition-colors">
                    {nextProject.title}
                  </span>
                </div>
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all">
                  <ArrowRight size={18} />
                </div>
              </Link>
            )}
          </div>
        </Reveal>
      </article>
    </PageTransition>
  );
}
