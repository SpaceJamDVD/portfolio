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
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiPhp,
  SiThreedotjs,
  SiP5Dotjs,
  SiPostman,
  SiFigma,
} from 'react-icons/si';

export const HERO_DATA = {
  heading: 'Quin Finocchio —',
  subheading: 'Full-stack developer, designer, & digital artist',
  blurb: 'Nice to meet you!',
  link: 'https://github.com/SpaceJamDVD',
  link2: 'https://www.linkedin.com/in/quin-finocchio-b7132724b/',
  imageSrc: '/images/animorphlayout.png',
  email: 'quinfinocchio@gmail.com',
};

export const ABOUT_DATA = {
  heading: "I'm actually a human —",
  subheading: '... not a fox.',
  imageSrc: '/images/QuinYakidaki.jpg',
};

export const PROJECTS_DATA = [
  {
    title: 'OurExpenses',
    summary:
      'Originally built as a personal alternative to Splitwise, OurExpenses evolved into a full-stack tool tailored for couples living together. Built with JavaScript, React, Node.js, Express, and MongoDB, it helps users manage shared expenses in real time. It’s a practical solution to a real problem — and one that already has real users.',
    image: '/images/ourexpenses1.jpg',
    image2: '/images/ourexpenses22.jpg',
    tags: [
      { name: 'React', Icon: SiReact, color: '#61DAFB' },
      { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
      { name: 'Node.js', Icon: SiNodedotjs, color: '#68A063' },
      { name: 'Express', Icon: SiExpress, color: '#000000' },
      { name: 'MongoDB', Icon: SiMongodb, color: '#4DB33D' },
      { name: 'GitHub', Icon: SiGithub, color: '#181717' },
    ],
    live: 'https://splitter-client.onrender.com/',
    repo: 'https://github.com/SpaceJamDVD/splitter',
  },
  {
    title: 'Wander',
    summary:
      'Created as part of a creative writing class, Wander began as an experiment in making text fade dynamically inside Twine. It evolved into a surreal, interactive experience where animations built with p5.js and Three.js push the story forward. Combining 2D and 3D graphics with narrative text, Wander invites players into a dreamy space between game and poem.',
    image: '/images/wander.jpg',
    image2: '/images/wander2.jpg',
    tags: [
      { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
      { name: 'p5.js', Icon: SiP5Dotjs, color: '#ED225D' },
      { name: 'Three.js', Icon: SiThreedotjs, color: '#000000' },
    ],
    live: '/wander.html',
  },
  {
    title: 'BoothBoost',
    summary:
      'Built as my senior capstone project in an agile team of four, BoothBoost is a full-stack web app designed to gamify fundraising at conventions and trade shows. Vendors can broadcast messages, track live leaderboards, and manage conventions in real-time. Awarded "Category Winner" at the UBCO capstone showcase.',
    image: '/images/boothboost2.jpg',
    image2: '/images/boothboost1.jpg',
    tags: [
      { name: 'Angular', Icon: SiAngular, color: '#DD0031' },
      { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
      { name: 'ASP.NET Core', Icon: SiDotnet, color: '#512BD4' },
      { name: 'MySQL', Icon: SiMysql, color: '#4479A1' },
    ],
    video: 'https://www.youtube.com/watch?v=cvw6szvee1Q',
  },
  {
    title: 'Poetry',
    summary:
      "Some of this was written for a poetry elective, and some of it just happened. Either way, it was a fun creative outlet that let me experiment with mixing digital art and writing. It also made me learn a bunch of new software. While most of the artwork was made using GIMP, most of the actual page layout was done using Scribus, a desktop publishing software. Some of the longer multipage elements are SVG's that I created using python scripts.",
    image: '/images/poetry1.jpg',
    image2: '/images/poetry2.jpg',
    tags: [{ name: 'GIMP', Icon: SiGimp, color: '#5C5543' }],
    live: '/online_poetry_portfolio.pdf',
  },
];

import type { EmploymentNode } from '../components/EmploymentTimeLine/EmploymentTimeLine';

export const EMPLOYMENT_DATA: {
  heading: string;
  nodes: EmploymentNode[];
} = {
  heading: 'Employment & Education',
  nodes: [
    {
      type: 'start',
      title: 'B.Sc. Computer Science',
      subtitle: 'University of British Columbia Okanagan',
      date: '2021 – 2025',
      description:
        'Studied software engineering, web development, and systems design, with an emphasis on building real, user-facing applications. Completed a senior capstone project in an agile team environment, taking a full-stack product from concept to deployment.',
    },
    {
      type: 'end',
      title: 'Web Application Developer',
      subtitle: 'One Source Office Supplies',
      date: '2025 – Present',
      description:
        'Working as a full-stack developer on internal business systems, building and maintaining features using PHP, PostgreSQL,and JavaScript tooling. Manage full application lifecycle from requirements gathering to developing and deploying. Built and maintained accounting tools, analytics dashboards, inhouse ATS and ticketing systems.',
    },
  ],
};

export const ATHLETICS_DATA = {
  heading: 'Athletics',
  blurb:
    'Before my agritourism and tech careers, I was a competitive downhill skateboarder.',
  category: 'Downhill Skateboarding',
  images: [
    { src: '/images/downhill1.jpg', alt: 'Downhill skateboarding race' },
  ],
  achievements: [
    { title: '2012 IGSA Junior 2 World Champion' },
    { title: '2012 IGSA Junior 2 North American Champion' },
    { title: '2011 IGSA Junior 2 North American Champion' },
  ],
};

export const TOOLS_DATA = [
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
  { name: 'HTML5', Icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS3', Icon: SiCss3, color: '#1572B6' },
  { name: 'TailwindCSS', Icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'PHP', Icon: SiPhp, color: '#777BB4' },
  { name: 'Three.js', Icon: SiThreedotjs, color: '#000000' },
  { name: 'p5.js', Icon: SiP5Dotjs, color: '#ED225D' },
  { name: 'Postman', Icon: SiPostman, color: '#FF6C37' },
  { name: 'Figma', Icon: SiFigma, color: '#F24E1E' },
];
