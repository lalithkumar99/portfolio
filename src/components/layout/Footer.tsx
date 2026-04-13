'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="border-t border-indigo-500/10 py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate-500 text-sm font-mono">
          © {new Date().getFullYear()} T Lalith Kumar
        </p>
        <div className="flex items-center gap-6">
          <motion.a
            href="https://github.com/tlalithkumar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-white text-sm transition-colors"
            whileHover={{ y: -2 }}
          >
            GitHub
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/t-lalith-kumar-276a08131/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-white text-sm transition-colors"
            whileHover={{ y: -2 }}
          >
            LinkedIn
          </motion.a>
          <motion.a
            href="mailto:tlalithkumar99@gmail.com"
            className="text-slate-500 hover:text-white text-sm transition-colors"
            whileHover={{ y: -2 }}
          >
            Email
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
