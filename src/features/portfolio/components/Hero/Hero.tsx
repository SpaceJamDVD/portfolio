import styles from './Hero.module.css';

type Props = {
  heading: string;
  blurb: string;
  subheading: string;
  imageSrc: string;
};

export default function Hero({ heading, subheading, blurb, imageSrc }: Props) {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <img src={imageSrc} alt="Fox illustration" className={styles.heroArt} />
        <div className={styles.heroText}>
          <h1 className={styles.heading}>{heading}</h1>
          <h2 className={styles.subheading}>{subheading}</h2>
          <p className={styles.blurb}>{blurb}</p>
        </div>
      </div>
    </section>
  );
}
