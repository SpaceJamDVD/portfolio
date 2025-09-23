import styles from './About.module.css';

type Props = {
  heading: string;
  subheading?: string;
  blurb: string;
  imageSrc: string;
};

export default function About({ heading, subheading, blurb, imageSrc }: Props) {
  return (
    <section className={styles.about}>
      <div className={styles.text}>
        <h2 className={styles.heading}>{heading}</h2>
        <h3 className={styles.subheading}>{subheading}</h3>
        <p className={styles.blurb}>{blurb}</p>
      </div>
      <div className={styles.photo}>
        <img src={imageSrc} alt="Portrait of Quin Finocchio" />
      </div>
    </section>
  );
}
