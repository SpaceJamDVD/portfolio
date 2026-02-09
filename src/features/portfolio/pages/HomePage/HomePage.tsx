import Divider from '../../components/Divider/Divider';
import { Hero } from '../../components/Hero';
import Wedge from '../../components/Wedge/Wedge';
import About from '../../components/About/About';
import Tools from '../../components/Tools/Tools';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import EmploymentTimeLine from '../../components/EmploymentTimeLine/EmploymentTimeLine';
import Athletics from '../../components/Athletics/Athletics';
import {
  HERO_DATA,
  ABOUT_DATA,
  PROJECTS_DATA,
  EMPLOYMENT_DATA,
  ATHLETICS_DATA,
  TOOLS_DATA,
} from '../../data/portfolioData';
import styles from './HomePage.module.css';

export default function HomePage() {
  return (
    <main className={styles.page}>
      <Wedge />
      <Hero
        heading={HERO_DATA.heading}
        subheading={HERO_DATA.subheading}
        blurb={HERO_DATA.blurb}
        link={HERO_DATA.link}
        link2={HERO_DATA.link2}
        imageSrc={HERO_DATA.imageSrc}
        email={HERO_DATA.email}
      />
      <Divider variant="solid" thickness="4px" color="var(--warmGrey)" />
      <About
        heading={ABOUT_DATA.heading}
        subheading={ABOUT_DATA.subheading}
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
        imageSrc={ABOUT_DATA.imageSrc}
      />

      {PROJECTS_DATA.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}

      <Divider variant="solid" thickness="4px" color="var(--charcoal)" />

      <EmploymentTimeLine
        heading={EMPLOYMENT_DATA.heading}
        nodes={EMPLOYMENT_DATA.nodes}
      />

      <Athletics
        heading={ATHLETICS_DATA.heading}
        blurb={ATHLETICS_DATA.blurb}
        category={ATHLETICS_DATA.category}
        images={ATHLETICS_DATA.images}
        achievements={ATHLETICS_DATA.achievements}
      />

      <Tools tools={TOOLS_DATA} />

      <Divider variant="custom" thickness="4px" color="var(--warmGrey)" />
    </main>
  );
}
