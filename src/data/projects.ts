export interface Project {
  id: string;
  title: string;
  company: string;
  period: string;
  category: 'ai' | 'fintech' | 'erp' | 'aviation';
  problem: string;
  solution: string;
  impact: string[];
  tech: string[];
  highlight: boolean;
  badge?: string;
  badgeColor?: string;
}

export const projects: Project[] = [
  {
    id: 'nlp-bigquery',
    title: 'Multi-Agent NLP → BigQuery',
    company: 'Twinleaves',
    period: 'Sept 2025',
    category: 'ai',
    problem:
      'Non-technical stakeholders couldn\'t query financial data without SQL expertise, creating report bottlenecks across teams.',
    solution:
      'Built a multi-agent AI pipeline using Gemini and Vertex AI — intent classifier → SQL generator → validator → summariser — converting plain English to BigQuery queries in real time.',
    impact: [
      '91% query accuracy on natural language financial inputs',
      '20+ concurrent sessions supported',
      '1st Place at company AI Hackathon',
    ],
    tech: ['Gemini API', 'Vertex AI', 'Multi-Agent AI', 'BigQuery', 'Java 21', 'Spring Boot', 'NLP-to-SQL'],
    highlight: true,
    badge: '🏆 Hackathon Winner',
    badgeColor: 'from-amber-500 to-orange-500',
  },
  {
    id: 'bigquery-reporting',
    title: 'Centralised BigQuery Reporting Engine',
    company: 'Twinleaves',
    period: '2024 – Present',
    category: 'erp',
    problem:
      'Report generation took ~8s and heavy ad-hoc queries were degrading transactional database performance under load.',
    solution:
      'Designed a federated query + materialised views engine on BigQuery ingesting data from all finance microservices, with Redis distributed locking for scheduling and GCS batch pipelines.',
    impact: [
      '85% faster reports — 8s → 1.2s',
      '70% cut in transactional DB load',
      'OOM errors eliminated at 10K+ concurrent requests',
      '500+ daily scheduled jobs, zero missed',
    ],
    tech: ['GCP BigQuery', 'Federated Queries', 'Materialised Views', 'Redis', 'GCS', 'Java 21', 'Spring Boot'],
    highlight: true,
    badge: '85% Faster',
    badgeColor: 'from-cyan-500 to-blue-500',
  },
  {
    id: 'erp-finance',
    title: 'ERP Finance Platform',
    company: 'Twinleaves',
    period: 'May 2024 – Present',
    category: 'erp',
    problem:
      'Manual GST reconciliation across Purchase, Sales and Tax modules introduced errors and consumed most of the accounting team\'s bandwidth.',
    solution:
      'Architected a Tally-like ERP with event-driven microservices communicating via Google Pub/Sub, automated reconciliation pipelines, and Tally push integration for master data.',
    impact: [
      '60% reduction in manual GST reconciliation',
      '99.8% tax computation accuracy',
      '500K+ transactions processed monthly',
      '~95% reduction in data inconsistency incidents',
    ],
    tech: ['Java 21', 'Spring Boot', 'Google Pub/Sub', 'GCP', 'Kafka', 'MySQL', 'Microservices', 'ConcurrentHashMaps'],
    highlight: false,
  },
  {
    id: 'payment-gateway',
    title: 'Payment Gateway & Invoice System',
    company: 'Swirepay Technologies',
    period: 'Oct 2022 – Jan 2024',
    category: 'fintech',
    problem:
      'TNEB needed a scalable payment gateway with robust fraud prevention — existing methods lacked identity verification and handled limited transaction volume.',
    solution:
      'Built an Invoice payment method + Plaid KYC integration processing 5,000+ daily risk signals across credit/debit cards, net banking and digital wallets.',
    impact: [
      '1M+ transactions processed',
      '90% fraudulent transactions blocked',
      '$500K+/year fraud exposure eliminated',
      '3 new enterprise clients acquired',
    ],
    tech: ['Java', 'Spring Boot', 'Kafka', 'Redis', 'AWS', 'MySQL', 'Plaid API', 'Docker', 'Flyway'],
    highlight: false,
    badge: '1M+ Transactions',
    badgeColor: 'from-emerald-500 to-teal-500',
  },
  {
    id: 'safe-mode',
    title: 'SAFE-MODE — Aviation Boarding',
    company: 'ICTECH / Alaska Airlines',
    period: 'Nov 2021 – Oct 2022',
    category: 'aviation',
    problem:
      'Alaska Airlines boarding system failed silently during JMS network outages, causing passenger data loss and cascading flight delays.',
    solution:
      'Built a fault-tolerant JMS-to-REST fallback system with a queuing mechanism to preserve all passenger records and guarantee boarding continuity during network gaps.',
    impact: [
      'Zero seconds delay in flight boarding',
      '50% reduction in boarding delays (~5 mins/flight)',
      '99.9% uptime across 6 months',
      '1,000+ passenger records secured per flight',
    ],
    tech: ['Java', 'Spring Boot', 'REST', 'JMS', 'JSON', 'MVC', 'Postman'],
    highlight: false,
    badge: '99.9% Uptime',
    badgeColor: 'from-violet-500 to-purple-500',
  },
];
