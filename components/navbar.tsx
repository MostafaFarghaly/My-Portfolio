"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "@/lib/data";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change or Escape key press
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [open]);

  return (
    <header className="site-header" role="banner">
      <nav
        className={`nav-shell transition-all duration-300 ${
          scrolled
            ? "py-2 bg-[#0c0e15]/95 shadow-2xl border-white/15"
            : "py-2.5 bg-[#0c0e15]/80"
        }`}
        aria-label="Main navigation"
      >
        {/* Brand */}
        <Link
          href="/"
          className="brand group"
          onClick={() => setOpen(false)}
          aria-label={`${profile.name} home`}
        >
          <div className="brand-mark transition-transform duration-300 group-hover:scale-105 group-hover:border-violet-400">
            <span>M</span>
          </div>
          <div className="flex flex-col">
            <span className="brand-name flex items-center gap-1 font-semibold">
              MF
              <span className="text-primary font-mono text-[10px] px-1.5 py-0.5 rounded-md bg-violet-500/10 border border-violet-500/20">
                .dev
              </span>
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links with animated active pill */}
        <div className="desktop-nav relative" role="menubar">
          {links.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));

            return (
              <Link
                key={link.href}
                href={link.href}
                role="menuitem"
                aria-current={isActive ? "page" : undefined}
                className={`relative px-4 py-1.5 text-xs font-medium rounded-full transition-colors duration-200 z-10 ${
                  isActive ? "text-white font-semibold" : "text-slate-400 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-nav-pill"
                    className="absolute inset-0 bg-gradient-to-r from-violet-600/30 to-indigo-600/30 border border-violet-500/40 rounded-full shadow-[0_0_15px_rgba(139,92,246,0.25)] -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="nav-cta hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold"
          >
            <Sparkles size={13} className="text-violet-200 animate-pulse" />
            <span>Let&apos;s talk</span>
            <ArrowUpRight size={14} />
          </Link>

          <button
            type="button"
            className="mobile-menu-button sm:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Animated Mobile Nav Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mobile-nav wrap mt-3 p-5 rounded-2xl bg-[#0c0e15]/95 border border-white/10 backdrop-blur-2xl shadow-2xl flex flex-col gap-2 pointer-events-auto"
          >
            {links.map((link, idx) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));

              return (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between py-2.5 px-3 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-violet-600/20 text-white border border-violet-500/30 font-semibold"
                        : "text-slate-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-400 shadow-[0_0_8px_#8b5cf6]" />
                    )}
                  </Link>
                </motion.div>
              );
            })}

            <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="button button-acid w-full text-center py-2.5 text-xs font-semibold justify-center"
              >
                <span>Start a Project</span>
                <ArrowUpRight size={15} />
              </Link>
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 px-1">
                <span>{profile.location}</span>
                <span className="text-emerald-400">● {profile.availability}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
