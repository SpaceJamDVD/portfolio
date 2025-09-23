import type React from 'react';
import styles from './About.module.css';

type Props = {
  heading: string;
  subheading?: string;
  blurb: React.ReactNode;
  imageSrc: string;
};

export default function About({ heading, subheading, blurb, imageSrc }: Props) {
  return (
    <section className={styles.about}>
      {/* Container 1: Text and Image */}
      <div className={styles.contentContainer}>
        <div className={styles.text}>
          <h2 className={styles.heading}>{heading}</h2>
          {subheading && <h3 className={styles.subheading}>{subheading}</h3>}
          <p className={styles.blurb}>{blurb}</p>
        </div>

        <div className={styles.photoWrapper}>
          <img
            src={imageSrc}
            alt="Portrait of Quin Finocchio"
            className={styles.photo}
          />
        </div>
      </div>

      {/* Container 2: Squiggle overlay */}
      <div className={styles.squiggleContainer}>
        <img src="/images/lineart1.png" alt="" className={styles.squiggle} />
      </div>
    </section>
  );
}
