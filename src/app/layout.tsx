import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'T Lalith Kumar — Java Backend Engineer',
  description:
    'SDE 2 at Twinleaves. 4.5+ years architecting distributed systems across fintech, ERP, and AI. Java 21 · Spring Boot · GCP · BigQuery · AI/ML.',
  keywords: [
    'T Lalith Kumar',
    'Java Backend Engineer',
    'Spring Boot',
    'Distributed Systems',
    'GCP',
    'BigQuery',
    'Twinleaves',
    'Portfolio',
  ],
  authors: [{ name: 'T Lalith Kumar' }],
  openGraph: {
    title: 'T Lalith Kumar — Java Backend Engineer',
    description: 'SDE 2 building distributed systems at scale. 4.5+ years · Fintech · ERP · AI/ML.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="noise-overlay">{children}</body>
    </html>
  );
}
