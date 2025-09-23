import Divider from '../../components/Divider/Divider';
import { Hero } from '../../components/Hero';
import Wedge from '../../components/Wedge/Wedge';
import About from '../../components/About/About';
import Tools from '../../components/Tools/Tools';
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiDotnet,
  SiAngular,
  SiDocker,
  SiGit,
  SiGithub,
  SiGimp,
  SiAdobephotoshop,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiPhp,
  SiThreedotjs,
  SiP5Dotjs,
  SiPostman,
  SiFigma,
} from 'react-icons/si';
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
            After having a career in agritourism, I decided I didn't want to
            just grow things, but build them too. I went back to school to study
            computer science and web development, and I've been hooked ever
            since. I get excited about designing unique visual identities and
            solving technical challenges.
          </>
        }
        imageSrc="/images/QuinYakidaki.jpg"
      />
      <Divider variant="custom" thickness="4px" color="var(--warmGrey)" />

      <Tools
        tools={[
          { name: 'React', Icon: SiReact, color: '#61DAFB' },
          { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
          { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
          { name: 'Node.js', Icon: SiNodedotjs, color: '#68A063' },
          { name: 'Express', Icon: SiExpress, color: '#000000' },
          { name: 'MongoDB', Icon: SiMongodb, color: '#4DB33D' },
          { name: 'MySQL', Icon: SiMysql, color: '#4479A1' },
          { name: '.NET', Icon: SiDotnet, color: '#512BD4' },
          { name: 'Angular', Icon: SiAngular, color: '#DD0031' },
          { name: 'Docker', Icon: SiDocker, color: '#2496ED' },
          { name: 'Git', Icon: SiGit, color: '#F05032' },
          { name: 'GitHub', Icon: SiGithub, color: '#181717' },
          { name: 'GIMP', Icon: SiGimp, color: '#5C5543' },
          { name: 'Photoshop', Icon: SiAdobephotoshop, color: '#31A8FF' },
          { name: 'HTML5', Icon: SiHtml5, color: '#E34F26' },
          { name: 'CSS3', Icon: SiCss3, color: '#1572B6' },
          { name: 'TailwindCSS', Icon: SiTailwindcss, color: '#06B6D4' },
          { name: 'PHP', Icon: SiPhp, color: '#777BB4' },
          { name: 'Three.js', Icon: SiThreedotjs, color: '#000000' },
          { name: 'p5.js', Icon: SiP5Dotjs, color: '#ED225D' },
          { name: 'Postman', Icon: SiPostman, color: '#FF6C37' },
          { name: 'Figma', Icon: SiFigma, color: '#F24E1E' },
        ]}
      />

      {/* rest of page */}
    </main>
  );
}
