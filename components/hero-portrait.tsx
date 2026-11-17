"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Code2, Cpu, Globe, Sparkles } from "lucide-react";

export default function HeroPortrait({
  src,
  alt,
  fallbackInitials = "MF",
}: {
  src?: string;
  alt: string;
  fallbackInitials?: string;
}) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative w-full h-full flex items-center justify-center select-none">
      {/* Background Radial Glow */}
      <div className="absolute w-[320px] h-[320px] rounded-full bg-violet-600/25 blur-3xl pointer-events-none animate-pulse-subtle" />

      {/* Interactive Floating Tech Badges with micro-interactions */}
      <motion.div
        className="tech-tag tech-tag-1 cursor-default group"
        whileHover={{ scale: 1.08, y: -2 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      >
        <Sparkles size={14} className="text-violet-400 group-hover:rotate-12 transition-transform" />
        <span>Next.js 15 App Router</span>
      </motion.div>

      <motion.div
        className="tech-tag tech-tag-2 cursor-default group"
        whileHover={{ scale: 1.08, y: -2 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      >
        <Globe size={14} className="text-cyan-400 group-hover:rotate-12 transition-transform" />
        <span>Full-Stack &amp; Real-Time</span>
      </motion.div>

      <motion.div
        className="tech-tag tech-tag-3 cursor-default group"
        whileHover={{ scale: 1.08, y: -2 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      >
        <Code2 size={14} className="text-emerald-400 group-hover:rotate-12 transition-transform" />
        <span>TypeScript &amp; React</span>
      </motion.div>

      <motion.div
        className="tech-tag tech-tag-4 cursor-default group"
        whileHover={{ scale: 1.08, y: -2 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      >
        <Cpu size={14} className="text-indigo-400 group-hover:rotate-12 transition-transform" />
        <span>Node.js &amp; Scalable APIs</span>
      </motion.div>

      {/* Center Portrait / Avatar with Next.js Image */}
      {!src || hasError ? (
        <div className="hero-sun z-10">
          <span>{fallbackInitials}</span>
        </div>
      ) : (
        <motion.div
          className="hero-portrait-frame relative overflow-hidden"
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src={src}
            alt={alt}
            width={240}
            height={240}
            priority
            quality={90}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            onError={() => setHasError(true)}
            sizes="(max-width: 680px) 170px, 220px"
          />
          {/* Subtle overlay gradient to blend into dark theme */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#07080b]/40 via-transparent to-transparent pointer-events-none" />
        </motion.div>
      )}
    </div>
  );
}
