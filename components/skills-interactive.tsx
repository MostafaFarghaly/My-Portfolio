"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layout, Server, Database, Sparkles, CheckCircle2 } from "lucide-react";
import { categorizedSkills } from "@/lib/data";

export default function SkillsInteractive() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...categorizedSkills.map((c) => c.name)];

  const displayCategories =
    selectedCategory === "All"
      ? categorizedSkills
      : categorizedSkills.filter((c) => c.name === selectedCategory);

  return (
    <div className="flex flex-col gap-8">
      {/* Category selector pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none" role="tablist">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                isActive
                  ? "bg-violet-600/30 border border-violet-500/50 text-white shadow-[0_0_15px_rgba(139,92,246,0.25)]"
                  : "bg-white/[0.03] border border-white/5 text-slate-400 hover:text-white hover:border-white/10"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Skills Categories and Animated Bars */}
      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {displayCategories.map((group, groupIdx) => (
            <motion.div
              key={group.name}
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, delay: groupIdx * 0.05 }}
              className="glass-panel p-6 sm:p-7 flex flex-col gap-5"
            >
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-violet-500/15 border border-violet-500/30 text-violet-400 flex items-center justify-center">
                    {group.name.includes("Frontend") && <Layout size={16} />}
                    {group.name.includes("Backend") && <Server size={16} />}
                    {group.name.includes("Data") && <Database size={16} />}
                  </div>
                  <h3 className="text-base font-bold text-white">{group.name}</h3>
                </div>
                <span className="text-[10px] font-mono text-slate-400">
                  {group.items.length} SKILLS
                </span>
              </div>

              {/* Progress bars */}
              <div className="flex flex-col gap-4">
                {group.items.map((skill) => (
                  <div key={skill.name} className="flex flex-col gap-1.5 group/item">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-medium text-slate-200 group-hover/item:text-white transition-colors">
                        {skill.name}
                      </span>
                      <span className="font-mono text-violet-400 text-[11px] font-semibold">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Animated Progress Bar */}
                    <div className="h-2 w-full rounded-full bg-white/5 overflow-hidden border border-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="h-full rounded-full bg-gradient-to-r from-violet-600 via-indigo-500 to-cyan-400"
                      />
                    </div>

                    <span className="text-[11px] text-slate-400 leading-tight">
                      {skill.description}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
