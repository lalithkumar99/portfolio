export interface Experience {
  id: string;
  role: string;
  company: string;
  companyType: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  tech: string[];
  awards: string[];
  current: boolean;
}

export const experiences: Experience[] = [
  {
    id: 'twinleaves',
    role: 'SDE 2 — Java Backend Developer',
    company: 'Twinleaves',
    companyType: 'Product-Based · ERP / Analytics',
    period: 'May 2024 – Present',
    location: 'Bengaluru, India',
    description:
      'Architecting high-throughput ERP finance systems and GCP data pipelines while leading AI/ML initiatives.',
    highlights: [
      'Architected Tally-like ERP Finance Platform achieving 99.8% tax accuracy across 500K+ monthly transactions',
      'Built BigQuery reporting engine cutting report latency by 85% (8s → 1.2s) and DB load by 70%',
      'Travelled onsite to Malaysia to develop Finance Software for Plusmax — international client delivery',
      'Won 1st Place at company AI Hackathon (Sept 2025) — Multi-Agent NLP to BigQuery engine with 91% accuracy',
      'Resolved OOM errors and race conditions under 10K+ concurrent requests',
    ],
    tech: ['Java 21', 'Spring Boot', 'GCP', 'BigQuery', 'Gemini AI', 'Vertex AI', 'Kafka', 'Redis', 'Kubernetes', 'Docker'],
    awards: ['Best Employee of the Quarter (2024)', 'AI Hackathon Winner — 1st Place (Sept 2025)'],
    current: true,
  },
  {
    id: 'swirepay',
    role: 'Java Backend Developer',
    company: 'Swirepay Technologies',
    companyType: 'Fintech · Payments',
    period: 'Oct 2022 – Jan 2024',
    location: 'Chennai, India',
    description:
      'Built scalable fintech payment infrastructure processing millions of transactions for enterprise clients.',
    highlights: [
      'Engineered Invoice payment method processing 1M+ transactions at 10K+ peak requests/hour for TNEB',
      'Integrated Plaid KYC blocking 90% fraud — processing 5,000+ daily risk signals, eliminating $500K+/year exposure',
      'Built multi-tenant shop inventory platform with Clover POS serving 15K+ daily requests',
      '100% successful client data migration with zero data loss',
    ],
    tech: ['Java', 'Spring Boot', 'Kafka', 'Redis', 'AWS', 'MySQL', 'Docker', 'Plaid API', 'Flyway'],
    awards: ['Best Team Award — On-Time Delivery (2023)'],
    current: false,
  },
  {
    id: 'ictech',
    role: 'Assistant System Engineer',
    company: 'ICTECH Engineering Solutions',
    companyType: 'IT Services · Aviation',
    period: 'Nov 2021 – Oct 2022',
    location: 'Chennai, India',
    description:
      'Developed fault-tolerant aviation boarding systems for Alaska Airlines ensuring zero-disruption operations.',
    highlights: [
      'Created SAFE-MODE — fault-tolerant JMS-to-REST fallback boarding system for Alaska Airlines',
      'Achieved zero seconds delay in flight boarding during network disruptions',
      'Maintained 99.9% system uptime over 6 months handling 1K+ passengers per flight during outages',
      '50% reduction in boarding delays (~5 minutes per flight industry-wide)',
    ],
    tech: ['Java', 'Spring Boot', 'REST', 'JMS', 'JSON', 'MVC', 'Postman'],
    awards: ['Best Performer Award (2022)'],
    current: false,
  },
];
