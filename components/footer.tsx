import Link from "next/link";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import WhatsAppIcon from "@/components/whatsapp-icon";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="wrap pb-12 pt-6">
      <div className="footer-bottom">
        <div className="flex items-center gap-3">
          <div className="brand-mark w-7 h-7 text-xs rounded-lg">
            <span>M</span>
          </div>
          <span className="text-slate-400 text-xs">
            © {new Date().getFullYear()} {profile.name} · Engineered with Next.js &amp; Tailwind
          </span>
        </div>

        <div className="flex items-center gap-2">
          {profile.whatsapp && (
            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="p-2.5 rounded-full text-slate-400 hover:text-emerald-400 hover:bg-emerald-500/10 transition-colors"
            >
              <WhatsAppIcon size={18} />
            </a>
          )}
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="p-2.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="p-2.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
              profile.email
            )}`}
            target="_blank"
            rel="noreferrer"
            aria-label="Email (Open Gmail)"
            className="p-2.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
