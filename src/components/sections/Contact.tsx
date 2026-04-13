'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal, { StaggerContainer, staggerItem } from '@/components/ui/ScrollReveal';

const contactLinks = [
  {
    icon: '✉️',
    label: 'Email',
    value: 'tlalithkumar99@gmail.com',
    href: 'mailto:tlalithkumar99@gmail.com',
    copyable: true,
    color: 'from-indigo-500/20 to-violet-500/10',
    border: 'border-indigo-500/20',
    hoverGlow: 'hover:shadow-indigo-500/15',
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'linkedin.com/in/t-lalith-kumar-276a08131',
    href: 'https://www.linkedin.com/in/t-lalith-kumar-276a08131/',
    copyable: false,
    color: 'from-blue-500/20 to-cyan-500/10',
    border: 'border-blue-500/20',
    hoverGlow: 'hover:shadow-blue-500/15',
  },
  {
    icon: '🐙',
    label: 'GitHub',
    value: 'github.com/tlalithkumar',
    href: 'https://github.com/tlalithkumar',
    copyable: false,
    color: 'from-slate-500/20 to-slate-700/10',
    border: 'border-slate-500/20',
    hoverGlow: 'hover:shadow-slate-500/15',
  },
  {
    icon: '📞',
    label: 'Phone',
    value: '+91 9080788237',
    href: 'tel:+919080788237',
    copyable: true,
    color: 'from-emerald-500/20 to-teal-500/10',
    border: 'border-emerald-500/20',
    hoverGlow: 'hover:shadow-emerald-500/15',
  },
];

function ContactCard({
  link,
}: {
  link: (typeof contactLinks)[0];
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!link.copyable) return;
    await navigator.clipboard.writeText(link.value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      variants={staggerItem}
      className={`rounded-2xl p-6 bg-gradient-to-br ${link.color} border ${link.border} hover-lift hover:shadow-lg ${link.hoverGlow} transition-shadow duration-300`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="text-2xl mb-3">{link.icon}</div>
          <div className="text-xs text-slate-500 font-mono mb-1">{link.label}</div>
          <a
            href={link.href}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="text-sm text-slate-300 hover:text-white transition-colors break-all leading-relaxed"
          >
            {link.value}
          </a>
        </div>

        {link.copyable && (
          <motion.button
            onClick={handleCopy}
            className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-white/8 hover:bg-white/15 border border-white/10 transition-colors text-slate-400 hover:text-white"
            whileTap={{ scale: 0.9 }}
            title="Copy to clipboard"
          >
            {copied ? (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="text-emerald-400 text-xs"
              >
                ✓
              </motion.span>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-3.5 h-3.5"
              >
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
            )}
          </motion.button>
        )}
      </div>
    </motion.div>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 relative">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[500px] bg-indigo-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-violet-600/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">

          {/* Header */}
          <ScrollReveal>
            <span className="section-number">05 — CONTACT</span>
            <h2 className="text-4xl md:text-6xl font-extrabold mt-3 mb-6 text-white leading-tight">
              Let&apos;s build
              <br />
              <span className="gradient-text-animate">something great.</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-xl mx-auto mb-12">
              Open to senior backend, SDE 2/3, or Staff Engineer roles where distributed
              systems and data scale matter. Drop a message.
            </p>
          </ScrollReveal>

          {/* Contact grid */}
          <StaggerContainer
            className="grid sm:grid-cols-2 gap-4 mb-12"
            stagger={0.08}
            delay={0.1}
          >
            {contactLinks.map((link) => (
              <ContactCard key={link.label} link={link} />
            ))}
          </StaggerContainer>

          {/* Resume CTA */}
          <ScrollReveal delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-colors glow-indigo flex items-center gap-2"
                whileHover={{ scale: 1.03, boxShadow: '0 0 30px rgba(99,102,241,0.35)' }}
                whileTap={{ scale: 0.97 }}
              >
                <span>📄</span> Download Resume
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/t-lalith-kumar-276a08131/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl border border-indigo-500/40 text-slate-300 hover:text-white hover:border-indigo-400 font-semibold transition-all flex items-center gap-2"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span>💼</span> Connect on LinkedIn
              </motion.a>
            </div>
          </ScrollReveal>

          {/* Location */}
          <ScrollReveal delay={0.4} className="mt-12">
            <p className="text-slate-600 text-sm flex items-center justify-center gap-2">
              <span>📍</span> Bengaluru, India · Open to remote &amp; relocation
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
