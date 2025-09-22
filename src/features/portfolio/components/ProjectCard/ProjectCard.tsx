import styles from './ProjectCard.module.css';

export type Project = {
  title: string;
  summary: string;
  tags: string[];
  repo?: string;
  live?: string;
};

type Props = { project: Project };

export default function ProjectCard({ project }: Props) {
  const { title, summary, tags, repo, live } = project;
  return (
    <article className={styles.card} aria-labelledby={`${title}-h`}>
      <header className={styles.header}>
        <h3 id={`${title}-h`} className={styles.title}>
          {title}
        </h3>
      </header>

      <p className={styles.summary}>{summary}</p>

      <ul className={styles.tags}>
        {tags.map((t) => (
          <li key={t} className={styles.tag}>
            {t}
          </li>
        ))}
      </ul>

      <footer className={styles.links}>
        {live && (
          <a href={live} target="_blank" rel="noreferrer">
            Live ↗
          </a>
        )}
        {repo && (
          <a href={repo} target="_blank" rel="noreferrer">
            Repo ↗
          </a>
        )}
      </footer>
    </article>
  );
}
