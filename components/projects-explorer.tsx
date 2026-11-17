"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { Search, X, SlidersHorizontal, Layers, FolderGit2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "@/components/project-card";
import type { Project } from "@/lib/data";

const categories = ["All", "Full-Stack", "Frontend", "Systems & Backend"] as const;
type Category = (typeof categories)[number];

export default function ProjectsExplorer({
  projects,
}: {
  projects: Project[];
}) {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Keyboard shortcut: Press '/' to focus search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === "/" &&
        document.activeElement?.tagName !== "INPUT" &&
        document.activeElement?.tagName !== "TEXTAREA"
      ) {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === "All" || project.categoryGroup === activeCategory;

      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const matchesQuery =
        project.title.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        project.category.toLowerCase().includes(q) ||
        project.stack.some((tech) => tech.toLowerCase().includes(q));

      return matchesCategory && matchesQuery;
    });
  }, [projects, activeCategory, searchQuery]);

  const clearFilters = () => {
    setActiveCategory("All");
    setSearchQuery("");
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Search and Category Filter Toolbar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 rounded-2xl bg-[#12141d]/80 border border-white/10 backdrop-blur-xl">
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none" role="tablist">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(category)}
                className={`relative px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? "text-white bg-violet-600/30 border border-violet-500/50 shadow-[0_0_15px_rgba(139,92,246,0.25)]"
                    : "text-slate-400 hover:text-white bg-white/[0.03] border border-white/5 hover:border-white/10"
                }`}
              >
                {category}
                {category === "All" && (
                  <span className="ml-1.5 opacity-60 font-mono text-[10px]">
                    ({projects.length})
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Live Search Input */}
        <div className="relative min-w-[260px] md:max-w-xs w-full">
          <Search
            size={16}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
          />
          <input
            ref={searchInputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search stack, title, keywords..."
            className="w-full bg-[#07080b]/90 border border-white/10 rounded-xl pl-9 pr-9 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-violet-500/60 focus:ring-1 focus:ring-violet-500/30 transition-all"
            aria-label="Search projects by keyword"
          />
          {searchQuery ? (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white p-0.5"
              aria-label="Clear search"
            >
              <X size={14} />
            </button>
          ) : (
            <kbd className="hidden sm:inline-block absolute right-3 top-1/2 -translate-y-1/2 px-1.5 py-0.5 text-[10px] font-mono text-slate-400 bg-white/5 border border-white/10 rounded pointer-events-none">
              /
            </kbd>
          )}
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs font-mono text-slate-400 px-1">
        <span className="text-violet-400 uppercase tracking-wider flex items-center gap-2">
          <FolderGit2 size={14} />
          Showing {filteredProjects.length} of {projects.length} projects
        </span>
        {(searchQuery || activeCategory !== "All") && (
          <button
            type="button"
            onClick={clearFilters}
            className="text-xs text-slate-400 hover:text-white underline underline-offset-4"
          >
            Reset Filters
          </button>
        )}
      </div>

      {/* Projects Grid with layout transitions */}
      <motion.div
        layout
        className="grid md:grid-cols-2 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index % 2}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty State when no results found */}
      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-16 px-6 rounded-3xl bg-[#12141d]/50 border border-white/10 backdrop-blur-md"
        >
          <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-violet-500/10 border border-violet-500/20 text-violet-400 flex items-center justify-center">
            <Search size={24} />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">No projects matched</h3>
          <p className="text-sm text-slate-400 max-w-sm mx-auto mb-6">
            No projects found matching &ldquo;{searchQuery}&rdquo; in category &ldquo;{activeCategory}&rdquo;.
          </p>
          <button
            type="button"
            onClick={clearFilters}
            className="button button-acid text-xs"
          >
            Reset All Filters
          </button>
        </motion.div>
      )}
    </div>
  );
}
