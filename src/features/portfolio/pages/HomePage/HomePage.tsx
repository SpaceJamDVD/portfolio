import Divider from '../../components/Divider/Divider';
import { Hero } from '../../components/Hero';
import Wedge from '../../components/Wedge/Wedge';
import About from '../../components/About/About';
import styles from './HomePage.module.css';

export default function HomePage() {
  return (
    <main className={styles.page}>
      <Wedge />
      <Hero
        heading="Quin Finocchio —"
        subheading="Full-stack developer, designer, & digital artist"
        blurb="I get excited about creating novel web experiences and seeing ideas come to life."
        imageSrc="/images/animorphlayout.png"
      />
      <Divider variant="solid" thickness="4px" color="var(--warmGrey)" />
      <About
        heading="I'm actually a human —"
        subheading="... not a fox."
        blurb={
          <>
            But I <em>do</em> love foxes.
            <br />
            <br />
            After having a career in agritourism, I decided did'nt want to just
            grow things, but build them too. I went back to school to study
            computer science and web development, and I've been hooked ever
            since. I get excited about designing unique visual identities and
            solving technical challenges.
          </>
        }
        imageSrc="/images/QuinYakidaki.jpg"
      />

      {/* rest of page */}
    </main>
  );
}
