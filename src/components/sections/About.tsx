'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import ScrollReveal, { StaggerContainer, staggerItem } from '@/components/ui/ScrollReveal';

const highlights = [
  {
    icon: '✈️',
    title: 'Onsite — Malaysia',
    desc: 'Delivered Finance Software for Plusmax client, representing Twinleaves internationally.',
    color: 'from-cyan-500/20 to-blue-500/10',
    border: 'border-cyan-500/20',
    tag: 'International Delivery',
  },
  {
    icon: '🏆',
    title: 'AI Hackathon — 1st Place',
    desc: 'Built Multi-Agent NLP to BigQuery engine (Gemini + Vertex AI). 91% query accuracy. Sept 2025.',
    color: 'from-amber-500/20 to-orange-500/10',
    border: 'border-amber-500/20',
    tag: 'Twinleaves · Sept 2025',
  },
  {
    icon: '⭐',
    title: 'Employee of the Quarter',
    desc: 'Recognised for engineering impact across ERP finance platform and reporting systems.',
    color: 'from-violet-500/20 to-purple-500/10',
    border: 'border-violet-500/20',
    tag: 'Twinleaves · 2024',
  },
];

interface CounterProps {
  to: number;
  suffix?: string;
  decimals?: number;
}

function Counter({ to, suffix = '', decimals = 0 }: CounterProps) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(parseFloat((eased * to).toFixed(decimals)));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [inView, to, decimals]);

  return (
    <span ref={ref}>
      {decimals > 0 ? value.toFixed(decimals) : Math.round(value)}
      {suffix}
    </span>
  );
}

const statCards = [
  { value: 4.5, suffix: '+', label: 'Years Experience', decimals: 1, sub: 'Nov 2021 – Present' },
  { value: 500, suffix: 'K+', label: 'Monthly Transactions', decimals: 0, sub: 'Current ERP Platform' },
  { value: 90, suffix: '%', label: 'Fraud Blocked', decimals: 0, sub: 'Fintech · Plaid KYC' },
  { value: 85, suffix: '%', label: 'Faster Reports', decimals: 0, sub: '8s → 1.2s latency' },
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section header */}
        <ScrollReveal>
          <span className="section-number">01 — ABOUT</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6 text-white">
            Not just a developer.{' '}
            <span className="gradient-text">An architect.</span>
          </h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16 mt-12">
          {/* Left — narrative */}
          <div className="space-y-6">
            <ScrollReveal delay={0.1}>
              <p className="text-slate-300 text-lg leading-relaxed">
                I started at{' '}
                <span className="text-white font-medium">ICTECH</span> building aviation
                systems for Alaska Airlines — learning early that backend code has real
                consequences when planes are boarding.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-slate-300 text-lg leading-relaxed">
                At{' '}
                <span className="text-white font-medium">Swirepay</span>, I moved into
                fintech, engineering payment infrastructure that processed{' '}
                <span className="text-indigo-400 font-semibold">1M+ transactions</span> and
                stopped{' '}
                <span className="text-indigo-400 font-semibold">$500K+/year in fraud</span>.
                Every system I touched had to be fast, secure, and correct.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="text-slate-300 text-lg leading-relaxed">
                Now as{' '}
                <span className="text-white font-medium">SDE 2 at Twinleaves</span>, I
                architect ERP finance platforms on GCP, design BigQuery data pipelines
                slashing report latency by{' '}
                <span className="text-cyan-400 font-semibold">85%</span>, and push into
                AI/ML — winning the company&apos;s first hackathon with a Multi-Agent NLP
                engine that lets non-technical users query millions of records in plain
                English.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <p className="text-slate-400 text-base leading-relaxed">
                B.Tech in Computer Science from{' '}
                <span className="text-white">VIT Vellore</span> (8.75 CGPA, 2021).
                Trilingual: English, Tamil, Hindi.
              </p>
            </ScrollReveal>
          </div>

          {/* Right — stat cards */}
          <StaggerContainer className="grid grid-cols-2 gap-4" stagger={0.1} delay={0.2}>
            {statCards.map((stat) => (
              <motion.div
                key={stat.label}
                variants={staggerItem}
                className="gradient-border rounded-2xl p-6 hover-lift cursor-default"
              >
                <div className="text-3xl font-extrabold gradient-text mb-1">
                  <Counter to={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
                </div>
                <div className="text-sm font-semibold text-white mb-1">{stat.label}</div>
                <div className="text-xs text-slate-500">{stat.sub}</div>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>

        {/* Recent highlights */}
        <div className="mt-20">
          <ScrollReveal>
            <h3 className="text-xl font-semibold text-white mb-8 flex items-center gap-3">
              <span className="w-8 h-px bg-gradient-to-r from-indigo-500 to-transparent" />
              Recent Highlights
            </h3>
          </ScrollReveal>
          <StaggerContainer className="grid md:grid-cols-3 gap-5" stagger={0.1} delay={0.1}>
            {highlights.map((h) => (
              <motion.div
                key={h.title}
                variants={staggerItem}
                className={`rounded-2xl p-6 bg-gradient-to-br ${h.color} border ${h.border} hover-lift`}
              >
                <span className="text-3xl">{h.icon}</span>
                <span className="block text-xs font-mono text-slate-500 mt-3 mb-2">{h.tag}</span>
                <h4 className="text-base font-bold text-white mb-2">{h.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{h.desc}</p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
