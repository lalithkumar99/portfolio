'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, type Project } from '@/data/projects';
import ScrollReveal, { StaggerContainer, staggerItem } from '@/components/ui/ScrollReveal';

type Filter = 'all' | 'ai' | 'fintech' | 'erp' | 'aviation';

const filters: { label: string; value: Filter }[] = [
  { label: 'All', value: 'all' },
  { label: 'AI / ML', value: 'ai' },
  { label: 'Fintech', value: 'fintech' },
  { label: 'ERP', value: 'erp' },
  { label: 'Aviation', value: 'aviation' },
];

function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      layout
      variants={staggerItem}
      className={`gradient-border rounded-2xl overflow-hidden hover-lift ${
        project.highlight ? 'ring-1 ring-indigo-500/30' : ''
      }`}
    >
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex-1">
            {project.badge && (
              <span
                className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full bg-gradient-to-r ${project.badgeColor} text-white mb-3`}
              >
                {project.badge}
              </span>
            )}
            <h3 className="text-lg font-bold text-white leading-tight">{project.title}</h3>
            <p className="text-sm text-slate-500 mt-1 font-mono">
              {project.company} · {project.period}
            </p>
          </div>
          <span
            className={`text-xs px-2.5 py-1 rounded-full border font-medium ${
              project.category === 'ai'
                ? 'border-pink-500/30 text-pink-400 bg-pink-500/8'
                : project.category === 'fintech'
                ? 'border-emerald-500/30 text-emerald-400 bg-emerald-500/8'
                : project.category === 'erp'
                ? 'border-cyan-500/30 text-cyan-400 bg-cyan-500/8'
                : 'border-violet-500/30 text-violet-400 bg-violet-500/8'
            }`}
          >
            {project.category.toUpperCase()}
          </span>
        </div>

        {/* Impact */}
        <ul className="space-y-1.5 mb-5">
          {project.impact.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
              <span className="text-indigo-400 mt-0.5 flex-shrink-0">▸</span>
              {item}
            </li>
          ))}
        </ul>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-0.5 text-xs font-mono text-slate-400 bg-white/5 border border-white/8 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Expand toggle */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-1.5"
        >
          {expanded ? 'Hide details' : 'Problem & Solution'}
          <motion.span
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            ↓
          </motion.span>
        </button>

        {/* Expanded content */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="mt-5 pt-5 border-t border-white/8 space-y-4">
                <div>
                  <span className="text-xs font-bold text-rose-400 uppercase tracking-wider">Problem</span>
                  <p className="text-sm text-slate-400 mt-2 leading-relaxed">{project.problem}</p>
                </div>
                <div>
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Solution</span>
                  <p className="text-sm text-slate-400 mt-2 leading-relaxed">{project.solution}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<Filter>('all');

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-28 px-6 relative bg-[#0a0a10]">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-violet-600/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <ScrollReveal>
          <span className="section-number">02 — PROJECTS</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4 text-white">
            Built for{' '}
            <span className="gradient-text">real impact.</span>
          </h2>
          <p className="text-slate-400 max-w-xl">
            5 systems spanning aviation, fintech, enterprise ERP, and AI — each measured
            by outcomes, not lines of code.
          </p>
        </ScrollReveal>

        {/* Filter bar */}
        <ScrollReveal delay={0.1} className="mt-10">
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setActiveFilter(f.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeFilter === f.value
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20'
                    : 'glass-card text-slate-400 hover:text-white hover:border-indigo-500/30'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Grid */}
        <motion.div layout className="mt-10">
          <AnimatePresence mode="wait">
            <StaggerContainer
              key={activeFilter}
              className="grid md:grid-cols-2 xl:grid-cols-3 gap-6"
              stagger={0.08}
              delay={0.05}
            >
              {filtered.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </StaggerContainer>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
