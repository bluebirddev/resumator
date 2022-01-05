import { Person } from '../person';
import React from 'react';

const shaun: Person = {
  leftWidth: 55,
  name: 'Shaun Kearley',
  titles: ['Software Developer'],
  info: {
    phone: '+27 84 604 7050',
    email: 'shaun@bluebird.dev',
    linkedin: 'linkedin.com/in/shaun-kearley-19b24a1bb',
    location: 'Paarl, South Africa',
  },
  summary: `
   I am a Software Developer with experience in various fields with a focus on front-end development. I have experience working as a freelancer, as well as working in teams
   at various firms. Before considering a career in IT, I worked for 5 years in the transport logistics industry, managing long
   haul goods transport. I learned valuable skills related to logistics that transfer to many other industries, and
   allow me to better understand business processes that need automation or technological refinement. During
   that time, I also managed all IT systems relating to logistics (including a satellite tracking systems).
    `,
  workExperience: [
    {
      title: 'Developer',
      company: 'Bluebird Development',
      bulletPoints: [
        <>Full time employment.</>,
        <>
          Maintained and expanded a newly built logistics systems for Raubex – South Africa's biggest construction
          company.
        </>,
        <>
          Developed and maintained both existing and brand new products and features at Coindirect – a company
          facilitating cryptocurrency transactions and investments.
        </>,
        <>Developed and maintained systems for a brand-new cryptocurrency investment platform called BVNK.</>,
        <>Worked on various internal and upcoming projects at Bluebird development, that are not yet public.</>,
      ],
      dates: 'Feb 2021 - present',
    },
    {
      title: 'Freelance Developer',
      company: 'Self Employed',
      bulletPoints: [
        <>Worked on my university studies at Unisa, while also working freelance as a software developer.</>,
        <>Developed and maintained software systems for private clients.</>,
        <>
          I built the front-end for an educational tool for high school students. After releasing the tool, the client
          won an award for it at the 2020 MTN business app of the year awards
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
          for management in my previous role.
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
  technologies: ['React', '.NET', 'C#', 'Node.js', 'Java', 'React Native', 'Vue.js', 'SQL', 'MongoDB', 'Typescript'],
  education: [
    {
      name: 'Unisa',
      degrees: [
        {
          name: 'Diploma in Information Technology',
          dates: '2016 - 2020',
        },
      ],
    },
  ],
  lifeExperiences: [
    'Musician',
    'Sound engineering hobbyist',
    'Computer hardware aficionado',
    'Passion for many areas of design, including UX and product design',
  ],
};

export default shaun;
