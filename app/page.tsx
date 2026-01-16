'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'highlights', label: 'Highlights' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' }
];

const skills = [
  'Python',
  'SQL',
  'Scala',
  'Java',
  'Apache Spark',
  'PySpark',
  'Kafka',
  'Databricks',
  'n8n',
  'Docker',
  'Git',
  'VS Code',
  'PyCharm',
  'Problem Solving',
  'Arabic / English / French'
];

const highlights = [
  { label: 'Data pipelines built', value: '10+', detail: 'Batch and streaming with Spark & Kafka' },
  { label: 'AI projects', value: '3', detail: 'Agents, retrieval, automation' },
  { label: 'Languages spoken', value: '3', detail: 'Arabic, English, French' }
];

const experiences = [
  {
    title: 'Final-year Internship (Seeking)',
    period: 'Available now',
    location: 'Casablanca or remote',
    bullets: [
      'Build and optimize data pipelines (Spark, Kafka, Databricks)',
      'Deploy and monitor jobs in cloud or hybrid environments',
      'Collaborate on AI-enabled data products'
    ]
  },
  {
    title: 'Academic Projects & Labs',
    period: '2023 - 2025',
    location: 'Hassan II University of Casablanca',
    bullets: [
      'Implemented streaming ingestion with Kafka + Spark Streaming',
      'Prototyped multimodal AI agents for intelligent image search',
      'Automated workflows with n8n and external APIs'
    ]
  }
];

const projects = [
  {
    title: 'SQL Data Warehouse Project',
    description: 'Modeled and built a SQL-based data warehouse for analytics-ready data.',
    tech: 'SQL, Data Modeling, ETL',
    github: 'https://github.com/cchahid/SQL-Data-Warehouse-Project',
    image: '/architecture/sql-data-warehouse.png'
  },
  {
    title: 'ELT dbt Instacart',
    description: 'ELT pipeline with dbt to transform Instacart data for reporting and insights.',
    tech: 'dbt, SQL, ELT',
    github: 'https://github.com/cchahid/ELT_dbt_instacart',
    image: '/architecture/elt-dbt-instacart.png'
  },
  {
    title: 'AI Agent Image Search',
    description: 'Multimodal AI agent for intelligent image search and retrieval.',
    tech: 'Python, AI Agents, LLMs',
    github: 'https://github.com/cchahid/ai_agent_image-search',
    image: '/architecture/ai-agent-image-search.png'
  },
  {
    title: 'DevOps Project',
    description: 'CI/CD and infrastructure automation for application delivery.',
    tech: 'DevOps, CI/CD, Automation',
    github: 'https://github.com/cchahid/Projet_DevOps',
    image: '/architecture/devops.png'
  },
  {
    title: 'Microservice Project',
    description: 'Service-oriented backend demonstrating modular APIs and deployment practices.',
    tech: 'Microservices, APIs, Docker',
    github: 'https://github.com/cchahid/micro-service-projet',
    image: '/architecture/microservice.png'
  },
  {
    title: 'e-Health Blockchain',
    description: 'Blockchain-based approach to secure and share e-health data.',
    tech: 'Blockchain, Security, APIs',
    github: 'https://github.com/cchahid/e-Health-Blockchain',
    image: '/architecture/e-health-blockchain.png'
  }
];

function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const stored = window.localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const nextTheme = stored === 'dark' || (!stored && prefersDark) ? 'dark' : 'light';
    setTheme(nextTheme);
    document.documentElement.classList.toggle('dark', nextTheme === 'dark');
    setMounted(true);
  }, []);

  const toggle = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    document.documentElement.classList.toggle('dark', next === 'dark');
    window.localStorage.setItem('theme', next);
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggle}
      className="rounded-full border border-slate-200 dark:border-slate-800 px-3 py-1 text-sm font-medium shadow-sm bg-white/70 dark:bg-slate-900/70 hover:-translate-y-0.5 transition"
    >
      {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
}

export default function Page() {
  const [preview, setPreview] = useState<{ src: string; alt: string } | null>(null);

  return (
    <div className="relative overflow-x-hidden">
      <header className="sticky top-0 z-20 bg-white/70 dark:bg-slate-950/70 backdrop-blur border-b border-slate-200/60 dark:border-slate-800">
        <div className="container flex items-center justify-between py-3">
          <div className="font-semibold">Achraf Chahid</div>
          <nav className="hidden sm:flex items-center gap-4 text-sm">
            {sections.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="hover:text-sky-500 transition">
                {s.label}
              </a>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </header>

      <main className="container space-y-24 py-16">
        {/* Hero */}
        <section id="hero" className="grid items-center gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              Achraf Chahid
            </p>
            <h1 className="text-4xl sm:text-3xl font-bold leading-tight">
              Data Engineering Student
              <span className="block">Big Data &amp; AI Enthusiast</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Master&apos;s student in Data Science &amp; Big Data focused on building scalable data pipelines and intelligent systems with Spark, Kafka, and Databricks. Looking for a final-year internship to apply these skills.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 text-emerald-700 px-3 py-1 text-xs font-semibold dark:bg-emerald-900/40 dark:text-emerald-200">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                Available for internship
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 text-sky-700 px-3 py-1 text-xs font-semibold dark:bg-sky-900/40 dark:text-sky-200">
                Focus: Data Engineering &amp; AI
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-full bg-sky-500 text-white px-5 py-2 font-semibold shadow-lg shadow-sky-500/30 hover:-translate-y-0.5 transition"
              >
                View Projects
              </a>
              <a
                href="/CV_Chahid_Achraf.pdf"
                className="rounded-full border border-slate-200 dark:border-slate-800 px-5 py-2 font-semibold hover:-translate-y-0.5 transition"
                download
              >
                Download Resume
              </a>
              <a
                href="mailto:achraf.chahid@example.com"
                className="rounded-full bg-slate-900 text-white px-5 py-2 font-semibold shadow-lg shadow-slate-900/20 hover:-translate-y-0.5 transition dark:bg-slate-100 dark:text-slate-900"
              >
                Contact Me
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="justify-self-center"
          >
            <div className="relative h-52 w-52 rounded-3xl bg-gradient-to-br from-sky-500/70 to-purple-600/70 p-1 shadow-2xl shadow-sky-500/25">
              <div className="h-full w-full overflow-hidden rounded-2xl bg-white dark:bg-slate-900">
                <Image
                  src="/profile.jpg"
                  alt="Achraf Chahid portrait"
                  width={400}
                  height={400}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </section>

        {/* Highlights */}
        <section id="highlights" className="space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-3xl font-bold"
          >
            Highlights
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid gap-4 md:grid-cols-3"
          >
            {highlights.map((item) => (
              <div key={item.label} className="card p-5 space-y-2">
                <div className="text-2xl font-bold text-sky-600 dark:text-sky-400">{item.value}</div>
                <div className="text-sm font-semibold">{item.label}</div>
                <p className="text-sm text-slate-600 dark:text-slate-400">{item.detail}</p>
              </div>
            ))}
          </motion.div>
        </section>

        {/* About */}
        <section id="about" className="space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-3xl font-bold"
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed"
          >
            I am a Master&apos;s student in Data Science &amp; Big Data at Hassan II University of Casablanca. I specialize in scalable data pipelines and intelligent systems, with a focus on Apache Spark, Kafka, and Databricks.
          </motion.p>
        </section>

        {/* Education */}
        <section id="education" className="space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-3xl font-bold"
          >
            Education
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid gap-4 md:grid-cols-2"
          >
            <div className="card p-5 space-y-2">
              <h3 className="text-lg font-semibold">Master&apos;s in Data Science &amp; Big Data</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">Hassan II University of Casablanca — Current</p>
            </div>
            <div className="card p-5 space-y-2">
              <h3 className="text-lg font-semibold">Bachelor&apos;s in Mathematical Sciences &amp; Computer Science</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">Sultan Moulay Slimane University</p>
            </div>
          </motion.div>
        </section>

        {/* Skills */}
        <section id="skills" className="space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-3xl font-bold"
          >
            Tech Stack
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3"
          >
            {skills.map((skill) => (
              <div key={skill} className="card px-4 py-3 text-center text-sm font-medium">
                {skill}
              </div>
            ))}
          </motion.div>
        </section>

        {/* Experience */}
        <section id="experience" className="space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-3xl font-bold"
          >
            Experience &amp; Availability
          </motion.h2>
          <div className="space-y-4">
            {experiences.map((exp) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="card p-5 space-y-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <h3 className="text-lg font-semibold">{exp.title}</h3>
                  <span className="text-sm text-slate-500 dark:text-slate-400">{exp.period} · {exp.location}</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-300 text-sm">
                  {exp.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-3xl font-bold"
          >
            Projects
          </motion.h2>
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                className="card p-6 space-y-3"
              >
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() =>
                    project.image && setPreview({ src: project.image, alt: `${project.title} architecture diagram` })
                  }
                  onKeyDown={(e) => {
                    if (project.image && (e.key === 'Enter' || e.key === ' ')) {
                      e.preventDefault();
                      setPreview({ src: project.image, alt: `${project.title} architecture diagram` });
                    }
                  }}
                  className="relative block aspect-video overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 hover:shadow-md hover:-translate-y-0.5 transition cursor-pointer"
                >
                  {project.image ? (
                    <>
                      <Image
                        src={project.image}
                        alt={`${project.title} architecture diagram`}
                        width={800}
                        height={450}
                        className="h-full w-full object-cover"
                      />
                      <span className="absolute right-2 top-2 rounded-full bg-slate-900/80 px-3 py-1 text-xs font-semibold text-white shadow-sm dark:bg-white/80 dark:text-slate-900">
                        Click to enlarge
                      </span>
                    </>
                  ) : (
                    <div className="h-full w-full grid place-items-center text-sm text-slate-500 dark:text-slate-400 border border-dashed border-slate-300 dark:border-slate-700">
                      Architecture diagram (add later)
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-300">{project.description}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">{project.tech}</p>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="text-sm font-semibold text-sky-600 dark:text-sky-400 hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub Repo
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="space-y-4 pb-16">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-3xl font-bold"
          >
            Contact
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card p-6 space-y-3"
          >
            <p className="text-slate-600 dark:text-slate-300">
              Open to final-year internships and data engineering opportunities where I can build and optimize data pipelines.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 text-sm font-semibold">
              <a href="mailto:achraf.chahid@example.com" className="text-sky-600 dark:text-sky-400 hover:underline">
                achraf.chahid@example.com
              </a>
              <a href="https://www.linkedin.com/in/achraf-chahid" className="text-sky-600 dark:text-sky-400 hover:underline" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <span className="text-slate-500 dark:text-slate-400">Casablanca, Morocco</span>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="border-t border-slate-200/60 dark:border-slate-800 py-6 text-center text-sm text-slate-500 dark:text-slate-400">
        © {new Date().getFullYear()} Achraf Chahid. Built with Next.js & Tailwind.
      </footer>

      {preview && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setPreview(null)}>
          <div
            className="relative max-w-5xl w-full max-h-[85vh] overflow-hidden rounded-2xl bg-white dark:bg-slate-900 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPreview(null)}
              className="absolute right-3 top-3 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white hover:bg-black"
            >
              Close
            </button>
            <Image
              src={preview.src}
              alt={preview.alt}
              width={1600}
              height={900}
              className="h-full w-full object-contain bg-slate-900"
            />
          </div>
        </div>
      )}
    </div>
  );
}