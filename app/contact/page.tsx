import type { Metadata } from "next";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { PageTransition, Reveal } from "@/components/motion";
import ContactForm from "@/components/contact-form";
import WhatsAppIcon from "@/components/whatsapp-icon";
import { profile } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact | Mostafa Farghaly",
  description: "Get in touch with Full Stack Software Engineer Mostafa Farghaly.",
};

export default function ContactPage() {
  return (
    <PageTransition>
      <section className="wrap pt-28 pb-20">
        <Reveal>
          <div className="section-tag">
            <MessageSquare size={15} />
            <span>LET&apos;S TALK / GET IN TOUCH</span>
          </div>
        </Reveal>

        <div className="max-w-2xl mb-14">
          <Reveal delay={0.08}>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6">
              Let&apos;s build something <span className="gradient-text">exceptional.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              Have an open software engineering role, a client project, or an innovative idea? 
              Fill out the message form below or reach me directly on WhatsApp or Email.
            </p>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Main Form & Email Helper Card */}
          <Reveal delay={0.18} className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

              <span className="text-xs font-mono uppercase tracking-widest text-primary mb-2 block">
                SEND A MESSAGE
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">
                Get in touch directly with Mostafa
              </h2>

              <ContactForm />

              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400 font-mono">
                <span className="flex items-center gap-2">
                  <MapPin size={14} className="text-primary" />
                  {profile.location}
                </span>
                <span className="flex items-center gap-2 text-emerald-400">
                  <span className="status-dot" />
                  {profile.availability}
                </span>
              </div>
            </div>
          </Reveal>

          {/* Direct Channels: WhatsApp, LinkedIn, GitHub */}
          <Reveal delay={0.24} className="lg:col-span-5">
            <div className="flex flex-col gap-4">
              {/* WhatsApp Card */}
              {profile.whatsapp && (
                <a
                  href={profile.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="glass-panel p-6 flex items-center justify-between group border-emerald-500/30 hover:border-emerald-500/60 hover:shadow-emerald-500/10 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 group-hover:scale-110 transition-transform">
                      <WhatsAppIcon size={22} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-base font-semibold text-white">WhatsApp</h3>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-medium">
                          Quick Chat
                        </span>
                      </div>
                      <p className="text-xs text-slate-400">Instant messaging &amp; inquiries</p>
                    </div>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-slate-400 group-hover:text-emerald-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                  />
                </a>
              )}

              {/* LinkedIn Card */}
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="glass-panel p-6 flex items-center justify-between group hover:border-primary/40 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-white group-hover:border-primary/40 group-hover:text-primary transition-colors">
                    <Linkedin size={22} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white">LinkedIn</h3>
                    <p className="text-xs text-slate-400">Connect professionally</p>
                  </div>
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-slate-400 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                />
              </a>

              {/* GitHub Card */}
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="glass-panel p-6 flex items-center justify-between group hover:border-primary/40 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-white group-hover:border-primary/40 group-hover:text-primary transition-colors">
                    <Github size={22} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white">GitHub</h3>
                    <p className="text-xs text-slate-400">Explore code &amp; repositories</p>
                  </div>
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-slate-400 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                />
              </a>

              {/* Direct Gmail Compose Card */}
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                  profile.email
                )}`}
                target="_blank"
                rel="noreferrer"
                className="glass-panel p-6 flex items-center justify-between group hover:border-primary/40 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-white group-hover:border-primary/40 group-hover:text-primary transition-colors">
                    <Mail size={22} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white">Gmail Web</h3>
                    <p className="text-xs text-slate-400">Open compose window directly</p>
                  </div>
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-slate-400 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
