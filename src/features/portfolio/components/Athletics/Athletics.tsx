import styles from './Athletics.module.css';

export interface AthleticAchievement {
  title: string;
}

interface Props {
  heading?: string;
  blurb?: string;
  category?: string;
  achievements: AthleticAchievement[];
  images?: {
    src: string;
    alt?: string;
  }[];
}

export default function Athletics({
  heading,
  blurb,
  achievements,
  images,
}: Props) {
  return (
    <section className={styles.athletics}>
      {heading && <h2 className={styles.heading}>{heading}</h2>}

      <div className={styles.content}>
        {images && images.length > 0 && (
          <div className={styles.images}>
            {images.map((img, i) => (
              <img key={i} src={img.src} alt={img.alt ?? ''} loading="lazy" />
            ))}
          </div>
        )}

        <div className={styles.text}>
          {blurb && <p className={styles.blurb}>{blurb}</p>}

          <span className={styles.subheading}>Titles</span>

          <ul className={styles.list}>
            {achievements.map((a, i) => (
              <li key={i} className={styles.item}>
                <span className={styles.dot} />
                <span className={styles.title}>{a.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
