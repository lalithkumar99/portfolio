'use client';

import { motion } from 'framer-motion';
import { skillCategories } from '@/data/skills';
import ScrollReveal, { StaggerContainer, staggerItem } from '@/components/ui/ScrollReveal';

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 relative bg-[#0a0a10]">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-indigo-600/4 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <ScrollReveal>
          <span className="section-number">04 — SKILLS</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4 text-white">
            Full-stack of{' '}
            <span className="gradient-text">backend expertise.</span>
          </h2>
          <p className="text-slate-400 max-w-xl">
            Spanning distributed systems, cloud data engineering, DevOps, and AI/ML —
            the toolkit of a modern backend engineer.
          </p>
        </ScrollReveal>

        {/* Skill grid */}
        <StaggerContainer
          className="mt-14 grid sm:grid-cols-2 xl:grid-cols-3 gap-6"
          stagger={0.07}
          delay={0.1}
        >
          {skillCategories.map((cat) => (
            <motion.div
              key={cat.id}
              variants={staggerItem}
              className="gradient-border rounded-2xl p-6 hover-lift group"
              style={{
                ['--glow' as string]: cat.glowColor,
              }}
              whileHover={{
                boxShadow: `0 8px 40px ${cat.glowColor}`,
              }}
              transition={{ duration: 0.2 }}
            >
              {/* Icon + title */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center text-lg`}
                >
                  {cat.icon}
                </div>
                <h3 className="font-bold text-white">{cat.title}</h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-mono text-slate-300 bg-white/5 border border-white/8 rounded-lg cursor-default select-none"
                    whileHover={{
                      backgroundColor: 'rgba(99,102,241,0.12)',
                      borderColor: 'rgba(99,102,241,0.3)',
                      color: '#e2e8f0',
                      scale: 1.04,
                    }}
                    transition={{ duration: 0.15 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* Bottom callout */}
        <ScrollReveal delay={0.2} className="mt-16">
          <div className="gradient-border rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-sm text-slate-500 mb-1 font-mono">Currently exploring</div>
              <div className="text-xl font-bold text-white">
                Agentic AI · gRPC Streaming · Distributed Tracing
              </div>
            </div>
            <div className="flex gap-3 flex-wrap">
              {['Gemini API', 'Vertex AI', 'OpenTelemetry', 'gRPC'].map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 text-sm font-mono text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 rounded-lg"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
