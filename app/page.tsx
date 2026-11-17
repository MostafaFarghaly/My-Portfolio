import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Cpu,
  Download,
  Layers3,
  Sparkles,
  Zap,
  CheckCircle2,
  Terminal,
} from "lucide-react";
import {
  MagneticText,
  PageTransition,
  Reveal,
  AnimatedCounter,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion";
import ProjectCard from "@/components/project-card";
import HeroPortrait from "@/components/hero-portrait";
import WhatsAppIcon from "@/components/whatsapp-icon";
import { profile, projects, skills, stats } from "@/lib/data";

export default function HomePage() {
  return (
    <PageTransition>
      {/* ===================== HERO SECTION ===================== */}
      <section className="hero wrap relative">
        {/* Availability Badge */}
        <Reveal>
          <div className="status-pill inline-flex items-center gap-2.5">
            <span className="status-dot" />
            <span>{profile.availability}</span>
          </div>
        </Reveal>

        <div className="hero-grid">
          {/* Hero Copy */}
          <div className="hero-copy">
            <Reveal delay={0.05}>
              <div className="section-tag mt-3 inline-flex items-center gap-2">
                <Sparkles size={14} className="text-primary animate-pulse" />
                <span>FULL STACK SOFTWARE ENGINEER</span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="hero-title">
                Engineering <span className="gradient-text">Scalable</span>
                <br />
                Web Solutions.
              </h1>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="hero-description">{profile.intro}</p>
            </Reveal>

            {/* Action Buttons */}
            <Reveal delay={0.2}>
              <div className="hero-actions">
                <Link href="/projects" className="button button-acid group">
                  <span>Explore Projects</span>
                  <ArrowUpRight
                    size={17}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </Link>

                <a
                  href={profile.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="button button-outline group"
                  aria-label="Download CV Resume"
                >
                  <Download
                    size={16}
                    className="group-hover:translate-y-0.5 transition-transform"
                  />
                  <span>Resume</span>
                </a>

                <Link href="/contact" className="text-link ml-1 group">
                  <span>Let&apos;s connect</span>
                  <ArrowRight
                    size={15}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Hero Art / Interactive Developer Visual Card */}
          <Reveal delay={0.2} className="w-full">
            <div className="hero-art" aria-label="Developer Showcase">
              <HeroPortrait
                src={profile.avatar}
                alt={profile.name}
                fallbackInitials="MF"
              />
            </div>
          </Reveal>
        </div>

        {/* Live Animated Metrics / Quick Bento Highlights Strip */}
        <Reveal delay={0.25}>
          <div className="metrics-strip">
            {stats.map((stat, i) => (
              <div key={stat.label} className="metric-item">
                <span className="metric-number">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </span>
                <span className="metric-label">{stat.label}</span>
                <span className="text-[11px] text-slate-500 font-mono hidden sm:inline">
                  {stat.sublabel}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Animated Scroll Down Indicator */}
        <div className="flex justify-center pt-10">
          <a
            href="#selected-work"
            className="flex flex-col items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors group"
            aria-label="Scroll down to featured work"
          >
            <span className="text-[11px] tracking-widest uppercase opacity-75">
              Scroll to explore
            </span>
            <span className="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center p-1 group-hover:border-violet-400 transition-colors">
              <span className="w-1.5 h-2.5 rounded-full bg-violet-400 animate-bounce" />
            </span>
          </a>
        </div>
      </section>

      {/* ===================== SELECTED PROJECTS ===================== */}
      <section id="selected-work" className="section wrap">
        <Reveal className="section-heading">
          <div>
            <div className="section-tag">
              <span>01 — FEATURED PROJECTS</span>
            </div>
            <h2 className="section-title">
              Crafted with <span>purpose &amp; precision.</span>
            </h2>
          </div>
          <Link
            href="/projects"
            className="button button-outline text-xs group"
          >
            <span>View All ({projects.length})</span>
            <ArrowUpRight
              size={16}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </Link>
        </Reveal>

        <div className="project-grid">
          {projects.slice(0, 4).map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </section>

      {/* ===================== ENGINEERING APPROACH (BENTO) ===================== */}
      <section className="section wrap">
        <Reveal className="section-heading">
          <div>
            <div className="section-tag">
              <span>02 — ENGINEERING PHILOSOPHY</span>
            </div>
            <h2 className="section-title">
              Architecture that <span>scales with trust.</span>
            </h2>
          </div>
          <Link href="/about" className="text-link group">
            <span>More about me</span>
            <ArrowUpRight
              size={16}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </Link>
        </Reveal>

        <div className="bento-grid">
          <Reveal delay={0.08}>
            <div className="bento-card h-full group">
              <div className="bento-icon group-hover:scale-110 group-hover:bg-violet-600/30 transition-all">
                <Zap size={24} />
              </div>
              <h3>Performance &amp; Speed</h3>
              <p>
                Zero-layout-shift interfaces, React Server Components (RSC),
                edge caching, and code splitting strategies to achieve 95+ Core
                Web Vitals across low-end and high-end devices.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="bento-card h-full group">
              <div className="bento-icon group-hover:scale-110 group-hover:bg-cyan-600/30 transition-all">
                <Code2 size={24} />
              </div>
              <h3>Clean Architecture</h3>
              <p>
                Strict TypeScript contracts, modular component hierarchy,
                RESTful &amp; WebSocket protocols, and maintainable project conventions
                built for team longevity.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="bento-card h-full group">
              <div className="bento-icon group-hover:scale-110 group-hover:bg-emerald-600/30 transition-all">
                <Layers3 size={24} />
              </div>
              <h3>Thoughtful UI &amp; Motion</h3>
              <p>
                Polished dark-mode aesthetics, intentional micro-animations,
                reduced-motion accessibility, and seamless responsive design that
                feels natural to every user.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================== TECH STACK & TOOLKIT ===================== */}
      <section className="section wrap">
        <Reveal className="section-heading">
          <div>
            <div className="section-tag">
              <span>03 — TECH STACK</span>
            </div>
            <h2 className="section-title">
              Modern tools for <span>modern web platforms.</span>
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-xs text-right hidden sm:block">
            Continuously updated toolkit aligned with modern industry benchmarks.
          </p>
        </Reveal>

        <div className="glass-panel p-8 sm:p-10">
          <div className="flex flex-wrap gap-2.5">
            {skills.map((skill, i) => (
              <Reveal key={skill} delay={i * 0.02}>
                <span className="skill-pill cursor-default hover:border-violet-500/50 hover:bg-violet-500/10">
                  {skill}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CALL TO ACTION ===================== */}
      <section className="wrap pb-20">
        <Reveal>
          <div className="footer-cta-card">
            <div className="max-w-xl">
              <div className="section-tag text-violet-400">
                <span>LET&apos;S WORK TOGETHER</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mt-2 mb-4">
                Have an exciting project or role in mind?
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                I&apos;m always open to discussing new opportunities, full-stack
                engineering positions, or innovative collaborations.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link href="/contact" className="button button-acid group">
                <span>Start a Conversation</span>
                <ArrowUpRight
                  size={17}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </Link>
              {profile.whatsapp && (
                <a
                  href={profile.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="button button-outline text-emerald-400 border-emerald-500/30 hover:border-emerald-500 group"
                >
                  <WhatsAppIcon size={16} />
                  <span>WhatsApp</span>
                </a>
              )}
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                  profile.email
                )}`}
                target="_blank"
                rel="noreferrer"
                className="button button-outline text-center"
              >
                <span>{profile.email}</span>
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </PageTransition>
  );
}
