import { Person } from '../person';
import React from 'react';

const shaun: Person = {
  name: 'Shaun Kearley',
  titles: ['Software Developer'],
  info: {
    phone: '+27 84 604 7050',
    email: 'shaun@bluebird.dev',
    linkedin: 'linkedin.com/in/shaun-kearley-19b24a1bb',
    location: 'Paarl, South Africa',
  },
  summary: `
   I am a young software developer with experience in various fields with a focus on front-end development. I have a
   diploma from Unisa (University of South Africa) in Information Technology. I have experience working as a freelancer, as well as working in teams
   at various firms. Before considering a career in IT, I worked for 5 years in the transport logistics industry, managing long
   haul goods transport. I learned valuable skills relating to logistics that transfer to many other industries, and
   allow me to be even better understand business processes that need automation or technological refinement. During
   that time, I also managed all IT systems relating to logistics (including the satellite tracking systems).
    `,
  workExperience: [
    {
      title: 'Developer',
      company: 'Bluebird Development',
      bulletPoints: [
        <>Full time employment</>,
        <>Maintaining and expanding the logistics systems for Raubex – South Africa's biggest construction company.</>,
        <>
          Developed and maintained both existing and brand new products and features at Coindirect – a company
          facilitationg cryptocurrency transactions and investments
        </>,
        <>Developed and maintained systems for a brand new cryptocurrency investment platform called BVNK</>,
        <>Worked on various internal and upcoming projects at Bluebird development, that are not yet public.</>,
      ],
      dates: 'Feb 2021 - present',
    },
    {
      title: 'Freelance Developer',
      company: 'self employed',
      bulletPoints: [
        <>Working on my university studies at Unisa, while also working freelance as a software developer</>,
        <>Developing and maintaining software systems for private clients</>,
        <>
          For one of my clients, I built an educational tool for high school students. For that project my previous
          collegues at Eval geniuses built the backend systems while I developed the front-end. After releasing the
          tool, the client won an award for it at the 2020 MTN business app of the year awards
        </>,
      ],
      dates: 'Oct 2019 – Feb 2021',
    },
    {
      title: 'Fleet Manager/ Human resources manager',
      company: 'Kearley’s Transport',
      bulletPoints: [
        <>
          Worked as a fleet manager for 3 years then transferred to Human Resources department, having shown an aptitude
          for management in my previous role. Resigned from the company in 2015 to pursue a different career path, as it
          was clear the company was being mismanaged by ownership. About 2 to 3 years after I left the company was
          willingly liquidated.
        </>,
      ],
      dates: 'Jan 2010 – Jan 2015',
    },
  ],
  skills: [
    'Web Development',
    'Functional Programming',
    'Test Driven Development',
    'UX Design',
    'Mobile Development',
    'Sound Engineering',
    'Human Resources Management',
  ],
  technologies: ['React', '.NET', 'C#', 'Node.js', 'Java', 'React Native', 'Vue.js', 'SQL', 'MongoDB'],
  education: [
    {
      name: 'Unisa',
      degrees: [
        {
          name: 'Diploma in Information Technology',
          dates: '2016 to 2020',
        },
      ],
    },
  ],
  lifeExperiences: [
    'Musician',
    'Sound engineering hobbyist',
    'Computer hardware aficionado',
    'Passion for many areas of design, including UX design and product design',
  ],
};

export default shaun;
