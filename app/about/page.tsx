import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Code2,
  Download,
  GraduationCap,
  Layers3,
  MonitorSmartphone,
  Sparkles,
  Terminal,
  Zap,
  Briefcase,
  CheckCircle2,
} from "lucide-react";
import { PageTransition, Reveal, AnimatedCounter } from "@/components/motion";
import SkillsInteractive from "@/components/skills-interactive";
import { experience, profile, stats, skills } from "@/lib/data";

export const metadata: Metadata = {
  title: "About | Mostafa Farghaly",
  description:
    "Software engineering background, academic foundation, technical toolkit, and career milestones of Mostafa Farghaly.",
};

export default function AboutPage() {
  return (
    <PageTransition>
      {/* ===================== HERO SECTION ===================== */}
      <section className="wrap pt-28 pb-16">
        <Reveal>
          <div className="section-tag inline-flex items-center gap-2">
            <Sparkles size={14} className="text-primary animate-pulse" />
            <span>A LITTLE ABOUT ME</span>
          </div>
        </Reveal>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <Reveal delay={0.08}>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white">
              Curious mind. <span className="gradient-text">Careful maker.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="text-slate-400 text-base sm:text-lg max-w-lg leading-relaxed">
              I&apos;m <strong className="text-white font-semibold">{profile.name}</strong>, a Full Stack Software Engineer graduated from the Faculty of Computers &amp; Informatics, Suez Canal University. Focused on building high-performance, responsive web applications.
            </p>
          </Reveal>
        </div>

        {/* Education & Discipline Strip */}
        <Reveal delay={0.18}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-white/10">
            <div className="glass-panel p-5 flex items-center gap-4 group hover:border-violet-500/40 transition-colors">
              <div className="p-2.5 rounded-xl bg-violet-500/10 text-primary border border-violet-500/20 group-hover:scale-110 transition-transform">
                <GraduationCap size={20} />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">EDUCATION</span>
                <span className="text-sm font-semibold text-white">B.Sc. Computers &amp; Informatics</span>
              </div>
            </div>

            <div className="glass-panel p-5 flex items-center gap-4 group hover:border-cyan-500/40 transition-colors">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:scale-110 transition-transform">
                <Terminal size={20} />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">DISCIPLINE</span>
                <span className="text-sm font-semibold text-white">Full-Stack &amp; Scalable Systems</span>
              </div>
            </div>

            <div className="glass-panel p-5 flex items-center gap-4 group hover:border-emerald-500/40 transition-colors">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 group-hover:scale-110 transition-transform">
                <Sparkles size={20} />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">PHILOSOPHY</span>
                <span className="text-sm font-semibold text-white">Design Minded · Code Focused</span>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ===================== STATS HIGHLIGHTS ===================== */}
      <section className="wrap pb-16">
        <Reveal delay={0.2}>
          <div className="metrics-strip mt-0">
            {stats.map((item) => (
              <div key={item.label} className="metric-item">
                <span className="metric-number">
                  <AnimatedCounter target={item.value} suffix={item.suffix} />
                </span>
                <span className="metric-label">{item.label}</span>
                <span className="text-[11px] text-slate-500 font-mono hidden sm:inline">
                  {item.sublabel}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ===================== THE PHILOSOPHY ===================== */}
      <section className="section wrap">
        <Reveal className="section-heading">
          <div>
            <div className="section-tag">
              <span>01 — THE APPROACH</span>
            </div>
            <h2 className="section-title">
              Where design meets <span>robust engineering.</span>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed mb-12">
            My focus is building responsive interfaces that are intuitive and resilient.
            I break complex ideas into modular components, connect them to secure backend APIs,
            and refine every detail across viewports.
          </p>
        </Reveal>

        <div className="bento-grid">
          <Reveal delay={0.12}>
            <div className="bento-card h-full group">
              <div className="bento-icon group-hover:scale-110 transition-transform">
                <Code2 size={24} />
              </div>
              <h3>Clean Code Architecture</h3>
              <p>
                Reusable components, strict TypeScript typing, clear naming, and modular maintainable project structure.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="bento-card h-full group">
              <div className="bento-icon group-hover:scale-110 transition-transform">
                <MonitorSmartphone size={24} />
              </div>
              <h3>Responsive First</h3>
              <p>
                Flawless layout behavior across viewports, touch gestures, and screen sizes, from mobile to ultra-wide monitors.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="bento-card h-full group">
              <div className="bento-icon group-hover:scale-110 transition-transform">
                <Layers3 size={24} />
              </div>
              <h3>Thoughtful UI &amp; Motion</h3>
              <p>
                Polished hierarchy, intentional micro-animations, accessible color contrast, and seamless user experiences.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================== THE TOOLKIT & SKILL BARS ===================== */}
      <section className="section wrap">
        <Reveal className="section-heading">
          <div>
            <div className="section-tag">
              <span>02 — WHAT I WORK WITH</span>
            </div>
            <h2 className="section-title">
              Full technical <span>arsenal &amp; stack.</span>
            </h2>
          </div>
          <p className="text-xs font-mono text-slate-400 hidden sm:block">
            FILTER BY SPECIALIZATION
          </p>
        </Reveal>

        {/* Interactive animated skill progress bars */}
        <Reveal delay={0.1}>
          <SkillsInteractive />
        </Reveal>

        {/* Quick Flat Tag Cloud */}
        <Reveal delay={0.2} className="mt-8">
          <div className="glass-panel p-6">
            <span className="text-[11px] font-mono uppercase text-slate-400 tracking-wider block mb-3">
              QUICK REFERENCE TAGS
            </span>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* ===================== THE JOURNEY / TIMELINE ===================== */}
      <section className="section wrap">
        <Reveal className="section-heading">
          <div>
            <div className="section-tag">
              <span>03 — THE JOURNEY</span>
            </div>
            <h2 className="section-title">
              Milestones &amp; <span>technical growth.</span>
            </h2>
          </div>
        </Reveal>

        <div className="timeline mb-12">
          {experience.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08} className="timeline-item group">
              <div className="flex flex-col gap-1.5">
                <span>{item.period}</span>
                {item.badge && (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 w-fit">
                    {item.badge}
                  </span>
                )}
              </div>
              <div>
                <h3 className="group-hover:text-violet-300 transition-colors">
                  {item.title}
                </h3>
                <p>{item.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="flex flex-wrap items-center gap-4">
          <Link href="/contact" className="button button-acid group">
            <span>Have a project in mind?</span>
            <ArrowUpRight size={17} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="button button-outline group"
          >
            <Download size={16} className="group-hover:translate-y-0.5 transition-transform" />
            <span>Download Resume (CV)</span>
          </a>
        </Reveal>
      </section>
    </PageTransition>
  );
}
