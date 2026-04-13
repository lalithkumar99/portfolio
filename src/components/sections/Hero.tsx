'use client';

import { useRef, useCallback, Suspense } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

const ParticleField = dynamic(() => import('@/components/three/ParticleField'), {
  ssr: false,
  loading: () => null,
});

const techPills = [
  'Java 21', 'Spring Boot', 'GCP · BigQuery', 'Kafka', 'Redis', 'Kubernetes', 'AI/ML',
];

const stats = [
  { value: '4.5+', label: 'Years Building' },
  { value: '1M+', label: 'Transactions / System' },
  { value: '85%', label: 'Faster Reports Built' },
  { value: '3×', label: 'Award Winner' },
];

export default function Hero() {
  const mouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      mouseRef.current = {
        x: ((e.clientX - rect.left) / rect.width) * 2 - 1,
        y: -(((e.clientY - rect.top) / rect.height) * 2 - 1),
      };
    },
    []
  );

  const onMouseLeave = useCallback(() => {
    mouseRef.current = { x: 0, y: 0 };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#050508]"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {/* Three.js Particle Canvas */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={null}>
          <ParticleField mouseRef={mouseRef} />
        </Suspense>
      </div>

      {/* Left vignette for text readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#050508] via-[#050508]/80 to-transparent pointer-events-none" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#050508] via-transparent to-[#050508]/50 pointer-events-none" />

      {/* Glow orb behind content */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-600/5 blur-[120px] pointer-events-none z-10" />
      <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] rounded-full bg-violet-600/5 blur-[100px] pointer-events-none z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="max-w-3xl">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-card mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm text-slate-300 font-medium">
              SDE 2 @ Twinleaves · Bengaluru
            </span>
          </motion.div>

          {/* Main headline */}
          <div className="mb-6 space-y-2">
            <motion.h1
              className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            >
              Architecting
            </motion.h1>
            <motion.h1
              className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight gradient-text-animate"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
            >
              Systems at Scale.
            </motion.h1>
          </div>

          {/* Sub-headline */}
          <motion.p
            className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          >
            Java Backend Engineer with{' '}
            <span className="text-white font-medium">4.5+ years</span> building
            distributed systems across fintech, enterprise ERP, and AI — processing{' '}
            <span className="text-indigo-400 font-medium">1M+ transactions</span>,
            winning{' '}
            <span className="text-amber-400 font-medium">AI hackathons</span>, and
            shipping systems that simply don&apos;t break.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap gap-4 mb-14"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
          >
            <motion.button
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-7 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-colors glow-sm"
              whileHover={{ scale: 1.03, boxShadow: '0 0 24px rgba(99,102,241,0.4)' }}
              whileTap={{ scale: 0.97 }}
            >
              View My Work
            </motion.button>
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-xl border border-indigo-500/40 text-slate-300 hover:text-white hover:border-indigo-400 font-semibold text-sm transition-all"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Download Resume ↗
            </motion.a>
          </motion.div>

          {/* Tech pills */}
          <motion.div
            className="flex flex-wrap gap-2 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {techPills.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.85 + i * 0.05 }}
                className="px-3 py-1 text-xs font-mono text-slate-400 bg-white/5 border border-white/8 rounded-full"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* Stat strip */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.95 }}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glass-card rounded-xl p-4 text-center hover-lift"
              >
                <div className="text-2xl font-extrabold gradient-text">{stat.value}</div>
                <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <span className="text-xs text-slate-600 font-mono tracking-widest uppercase">Scroll</span>
        <motion.div
          className="w-px h-12 bg-gradient-to-b from-indigo-500 to-transparent"
          animate={{ scaleY: [0.4, 1, 0.4], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
}
