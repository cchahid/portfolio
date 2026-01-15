'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' }
];

const skills = [
  'Next.js',
  'TypeScript',
  'React',
  'Tailwind CSS',
  'Node.js',
  'Git',
  'Vercel',
  'Framer Motion'
];

const projects = [
  {
    title: 'Project One',
    description: 'Short description of your project, stack, and impact.',
    github: 'https://github.com/yourname/project-one',
    demo: 'https://yourdemo.com'
  },
  {
    title: 'Project Two',
    description: 'Another highlight with clear outcomes and learnings.',
    github: 'https://github.com/yourname/project-two',
    demo: 'https://yourdemo.com'
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
  return (
    <div className="relative overflow-x-hidden">
      <header className="sticky top-0 z-20 bg-white/70 dark:bg-slate-950/70 backdrop-blur border-b border-slate-200/60 dark:border-slate-800">
        <div className="container flex items-center justify-between py-3">
          <div className="font-semibold">cchahid</div>
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
              Hello, I&apos;m
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              cchahid — Building modern web experiences.
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              I craft performant, accessible, and visually clean products using Next.js, TypeScript, and Tailwind.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-full bg-sky-500 text-white px-5 py-2 font-semibold shadow-lg shadow-sky-500/30 hover:-translate-y-0.5 transition"
              >
                View Projects
              </a>
              <a
                href="/resume.pdf"
                className="rounded-full border border-slate-200 dark:border-slate-800 px-5 py-2 font-semibold hover:-translate-y-0.5 transition"
                download
              >
                Download Resume
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
              <div className="h-full w-full rounded-2xl bg-white dark:bg-slate-900 grid place-items-center text-3xl font-bold text-slate-700 dark:text-slate-200">
                Your Photo
              </div>
            </div>
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
            I&apos;m a developer focused on building reliable, user-centered web applications. I enjoy translating ideas
            into thoughtful interfaces with clean, maintainable code.
          </motion.p>
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
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-300">{project.description}</p>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="text-sm font-semibold text-sky-600 dark:text-sky-400 hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub Repo
                  </a>
                  <a
                    href={project.demo}
                    className="text-sm font-semibold text-sky-600 dark:text-sky-400 hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
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
              Feel free to reach out for collaborations or just a friendly hello.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 text-sm font-semibold">
              <a href="mailto:you@example.com" className="text-sky-600 dark:text-sky-400 hover:underline">
                you@example.com
              </a>
              <a href="https://www.linkedin.com/in/yourprofile" className="text-sky-600 dark:text-sky-400 hover:underline" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="border-t border-slate-200/60 dark:border-slate-800 py-6 text-center text-sm text-slate-500 dark:text-slate-400">
        © {new Date().getFullYear()} cchahid. Built with Next.js & Tailwind.
      </footer>
    </div>
  );
}