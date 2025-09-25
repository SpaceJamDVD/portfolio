import styles from './ProjectCard.module.css';
import type { IconType } from 'react-icons';

export type Project = {
  title: string;
  summary: string;
  image: string;
  image2?: string;
  tags: { name: string; Icon: IconType; color?: string }[];
  repo?: string;
  live?: string;
  video?: string;
};

type Props = { project: Project };

export default function ProjectCard({ project }: Props) {
  const { title, summary, image, image2, tags, repo, live, video } = project;

  return (
    <article className={styles.card} aria-labelledby={`${title}-h`}>
      <div className={styles.content}>
        {/* Left column */}
        <div className={styles.text}>
          <header className={styles.header}>
            <h3 id={`${title}-h`} className={styles.title}>
              {title}
            </h3>
          </header>

          <p className={styles.summary}>{summary}</p>

          <ul className={styles.tags}>
            {tags.map((t) => (
              <li key={t.name} className={styles.tag} title={t.name}>
                <t.Icon size={24} color={t.color || 'var(--charcoal)'} />
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
            {video && (
              <a href={video} target="_blank" rel="noreferrer">
                Demo ↗
              </a>
            )}
          </footer>
        </div>

        {/* Right column */}
        <div className={styles.imageWrapper}>
          <img src={image} alt={title} className={styles.image} />
          {image2 && (
            <img
              src={image2}
              alt={`${title} alt`}
              className={styles.imageHover}
            />
          )}
        </div>
      </div>
    </article>
  );
}
