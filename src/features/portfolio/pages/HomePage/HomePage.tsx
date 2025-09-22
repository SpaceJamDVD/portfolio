import styles from './HomePage.module.css';
import { ProjectCard } from '../../components/ProjectCard';
import type { Project } from '../../components/ProjectCard';

const projects: Project[] = [
  {
    title: 'Splitter — Real-time Expense Tracker (MERN)',
    summary:
      'Live balances via Socket.IO, JWT + refresh, Mongo models for groups/transactions/balances, settlement recalculation.',
    tags: ['React', 'Node', 'Express', 'MongoDB', 'Socket.IO', 'JWT'],
    repo: 'https://github.com/your-username/splitter',
    live: 'https://your-live-demo.example',
  },
  // add BoothBoost, Tsuga...
];

export default function HomePage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div>
          <h1 className={styles.h1}>
            Full-stack Developer — MERN / .NET / Angular
          </h1>
          <p className={styles.blurb}>
            I build practical, real-time web apps with clean architecture.
          </p>
        </div>
        <div className={styles.heroArt} aria-hidden />
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>Projects</h2>
        <div className={styles.grid}>
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </section>
    </main>
  );
}
