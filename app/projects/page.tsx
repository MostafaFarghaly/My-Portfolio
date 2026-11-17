import type { Metadata } from "next";
import { FolderGit2 } from "lucide-react";
import { PageTransition, Reveal } from "@/components/motion";
import ProjectsExplorer from "@/components/projects-explorer";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects | Mostafa Farghaly",
  description:
    "Explore full-stack platforms, architectures, and open-source applications engineered by Mostafa Farghaly.",
};

export default function ProjectsPage() {
  return (
    <PageTransition>
      <section className="wrap pt-28 pb-20">
        <Reveal>
          <div className="section-tag">
            <FolderGit2 size={15} />
            <span>PORTFOLIO DIRECTORY · 2024—2026</span>
          </div>
        </Reveal>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <Reveal delay={0.08}>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white">
              Work that <span className="gradient-text">solves problems.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="text-slate-400 text-sm sm:text-base max-w-md leading-relaxed">
              A curated catalog of full-stack platforms, architectural prototypes,
              and open-source systems. Each project is crafted for scalability,
              reliability, and clean user experience.
            </p>
          </Reveal>
        </div>

        <ProjectsExplorer projects={projects} />
      </section>
    </PageTransition>
  );
}
