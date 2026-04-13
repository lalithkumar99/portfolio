'use client';

import { motion } from 'framer-motion';
import { experiences } from '@/data/experience';
import ScrollReveal, { StaggerContainer, staggerItem } from '@/components/ui/ScrollReveal';

const companyColors: Record<string, string> = {
  twinleaves: 'from-indigo-500 to-violet-500',
  swirepay:   'from-emerald-500 to-teal-500',
  ictech:     'from-orange-500 to-amber-500',
};

const companyDots: Record<string, string> = {
  twinleaves: 'bg-indigo-500 shadow-indigo-500/50',
  swirepay:   'bg-emerald-500 shadow-emerald-500/50',
  ictech:     'bg-orange-500 shadow-orange-500/50',
};

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-indigo-600/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <ScrollReveal>
          <span className="section-number">03 — EXPERIENCE</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4 text-white">
            4.5 years of{' '}
            <span className="gradient-text">compounding impact.</span>
          </h2>
          <p className="text-slate-400 max-w-xl">
            From aviation safety systems to fintech payments to AI-powered ERP —
            every role pushed the complexity ceiling higher.
          </p>
        </ScrollReveal>

        <div className="mt-16 relative">
          {/* Timeline vertical line */}
          <div className="hidden md:block absolute left-[220px] top-0 bottom-0 w-px timeline-line opacity-30" />

          <StaggerContainer className="space-y-16" stagger={0.15} delay={0.1}>
            {experiences.map((exp) => (
              <motion.div
                key={exp.id}
                variants={staggerItem}
                className="md:flex gap-10 group"
              >
                {/* Left: company + period */}
                <div className="hidden md:block w-[200px] flex-shrink-0 pt-1 text-right">
                  <div className={`text-sm font-bold bg-gradient-to-r ${companyColors[exp.id]} bg-clip-text text-transparent`}>
                    {exp.company}
                  </div>
                  <div className="text-xs text-slate-500 mt-1 font-mono">{exp.period}</div>
                  <div className="text-xs text-slate-600 mt-1">{exp.location}</div>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex flex-col items-center gap-0 flex-shrink-0 relative">
                  <div
                    className={`w-3 h-3 rounded-full mt-1.5 shadow-lg flex-shrink-0 z-10 ${
                      exp.current
                        ? `${companyDots[exp.id]} ring-2 ring-white/20`
                        : companyDots[exp.id]
                    }`}
                  />
                  {exp.current && (
                    <motion.div
                      className={`absolute top-0 w-3 h-3 rounded-full ${companyDots[exp.id]} opacity-30`}
                      animate={{ scale: [1, 2.5, 1], opacity: [0.3, 0, 0.3] }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                    />
                  )}
                </div>

                {/* Right: content */}
                <div className="flex-1 gradient-border rounded-2xl p-6 hover-lift">
                  {/* Mobile header */}
                  <div className="md:hidden mb-3">
                    <div className={`text-sm font-bold bg-gradient-to-r ${companyColors[exp.id]} bg-clip-text text-transparent`}>
                      {exp.company}
                    </div>
                    <div className="text-xs text-slate-500 font-mono">{exp.period} · {exp.location}</div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                    {exp.current && (
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-500/15 text-indigo-400 border border-indigo-500/20 font-medium">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-slate-500 font-mono mb-4">{exp.companyType}</p>
                  <p className="text-sm text-slate-400 mb-5 leading-relaxed">{exp.description}</p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-6">
                    {exp.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2.5 text-sm text-slate-300">
                        <span className="text-indigo-400 flex-shrink-0 mt-0.5">▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Awards */}
                  {exp.awards.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-5">
                      {exp.awards.map((award) => (
                        <span
                          key={award}
                          className="text-xs px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20"
                        >
                          🏅 {award}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Tech */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/6">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 text-xs font-mono text-slate-500 bg-white/4 border border-white/6 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
