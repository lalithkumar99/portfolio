export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  gradient: string;
  glowColor: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'backend',
    title: 'Backend & Frameworks',
    icon: '⚡',
    gradient: 'from-indigo-500 to-violet-600',
    glowColor: 'rgba(99,102,241,0.15)',
    skills: [
      'Java 21',
      'Spring Boot',
      'Spring MVC',
      'Spring Security',
      'Hibernate/JPA',
      'Lombok',
      'gRPC',
      'OAuth 2.0',
      'JWT',
    ],
  },
  {
    id: 'distributed',
    title: 'Distributed Systems',
    icon: '🔗',
    gradient: 'from-violet-500 to-purple-600',
    glowColor: 'rgba(139,92,246,0.15)',
    skills: [
      'Kafka',
      'Redis',
      'Microservices',
      'REST APIs',
      'Google Pub/Sub',
      'Feign Client',
      'ConcurrentHashMaps',
      'Flyway',
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud & Data',
    icon: '☁️',
    gradient: 'from-cyan-500 to-blue-600',
    glowColor: 'rgba(6,182,212,0.15)',
    skills: [
      'GCP BigQuery',
      'Federated Queries',
      'Materialised Views',
      'GCS',
      'AWS EC2 / S3 / RDS',
      'Amazon Cognito',
      'CloudWatch',
    ],
  },
  {
    id: 'devops',
    title: 'DevOps & Tools',
    icon: '🛠️',
    gradient: 'from-emerald-500 to-teal-600',
    glowColor: 'rgba(16,185,129,0.15)',
    skills: [
      'Docker',
      'Kubernetes',
      'Jenkins (CI/CD)',
      'Git / Bitbucket',
      'JIRA',
      'Postman',
      'Sentry',
      'IntelliJ IDEA',
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    icon: '🗄️',
    gradient: 'from-orange-500 to-amber-600',
    glowColor: 'rgba(249,115,22,0.15)',
    skills: [
      'MySQL',
      'PostgreSQL',
      'MongoDB',
      'Google BigQuery',
      'Redis Cache',
      'Redis Distributed Lock',
    ],
  },
  {
    id: 'ai',
    title: 'AI / ML',
    icon: '🤖',
    gradient: 'from-pink-500 to-rose-600',
    glowColor: 'rgba(236,72,153,0.15)',
    skills: [
      'Gemini API',
      'Vertex AI',
      'Multi-Agent AI',
      'LLM Orchestration',
      'NLP-to-SQL',
      'Prompt Engineering',
    ],
  },
];
