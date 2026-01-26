import styles from './Hero.module.css';
import { SiGithub, SiLinkedin } from 'react-icons/si';

type Props = {
  heading: string;
  blurb: string;
  subheading: string;
  link: string; // GitHub
  link2: string; // LinkedIn
  imageSrc: string;
  email: string; // Contact email
};

export default function Hero({
  heading,
  subheading,
  blurb,
  link,
  link2,
  imageSrc,
  email,
}: Props) {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <img src={imageSrc} alt="Fox illustration" className={styles.heroArt} />
        <div className={styles.heroText}>
          <h1 className={styles.heading}>{heading}</h1>
          <h2 className={styles.subheading}>{subheading}</h2>
          <p className={styles.blurb}>{blurb}</p>

          <div className={styles.heroLinks}>
            {link && (
              <a href={link} target="_blank" rel="noreferrer">
                <SiGithub size={28} /> GitHub
              </a>
            )}
            {link2 && (
              <a href={link2} target="_blank" rel="noreferrer">
                <SiLinkedin size={28} /> LinkedIn
              </a>
            )}
            {email && (
              <a href={`mailto:${email}`} className={styles.ctaButton}>
                Contact Me
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
