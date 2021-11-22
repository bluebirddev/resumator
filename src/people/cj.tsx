import { Person } from '../person';
import React from 'react';

const cj: Person = {
  name: 'C.J. Visser',
  titles: ['Software Developer', 'Manager', 'Entrepreneur'],
  info: {
    phone: '+995 595 086 017',
    email: 'cj@bluebird.dev',
    linkedin: 'linkedin.com/in/cjvisser',
    location: 'Cape Town, South Africa',
  },
  summary: `From the financial sector to the entertainment industry, I have led the creation of products that went into the hands of millions of satisfied customers.
    I know how to cultivate a positive work atmosphere, manage teams, design sustainable systems, tackle complex problems, and get things done.
    `,
  workExperience: [
    {
      title: 'Founder, Developer',
      company: 'Rektech',
      bulletPoints: [
        <>
          Founded a company of 9 remote developers with the mission of becoming the most sought-after tech company to
          work for.
        </>,
        <>
          Built and maintained a logistics system for <a href="https://www.raubex.co.za">Raubex</a> – South Africa's
          biggest construction company.
        </>,
        <>
          Led the web development teams of multi succesful companies and products: <a href="https://revix.com">Revix</a>
          , <a href="https://www.doctorly.de/">Doctorly</a>, <a href="https://www.coindirect.com/">Coindirect</a>,{' '}
          <a href="https://www.evuna.co.za/">eVuna</a>,{' '}
          <a href="https://www.aurorasustainability.com/">Aurora Sustainability</a>
        </>,
        <>
          Developed banking systems (which processes 3m+ monthly financial mandates for insurance companies) and
          websites for the <a href="https://bank.tech">Fintec Group</a> and its subsidiaries.
        </>,
      ],
      dates: 'Aug 2018 - present',
    },
    {
      title: 'Senior Freelance Developer, Consultant',
      company: 'Toptal',
      bulletPoints: [
        `Consults on the UI and data analytics for PepsiCo's internal Sales & Automation tools.`,
        'Work among the top 3% of global talent for clients around the world.',
      ],
      dates: 'Jul 2018 – present',
    },
    {
      title: 'Lead Web Developer',
      company: '22seven',
      bulletPoints: [
        'Led 22seven’s web development, which included the migration of the web application (with a user base of 200k+) from Angular to React.',
      ],
      dates: 'Oct 2017 – Sep 2018',
    },
    {
      title: 'Senior Developer',
      company: 'BlazingChilli',
      bulletPoints: [
        'Introduced, developed, and maintained a centralized web console to holistically manage the company’s internal systems, which is used by the support personnel, the developers, and the managers.',
      ],
      dates: 'Feb 2016 – Sep 2017',
    },
    {
      title: 'MES Developer',
      company: 'Omnia Fertilizer',
      bulletPoints: [
        'Introduced a factory standby and log sheet capturing application to eliminate daily check-in meetings.',
        'Developed a highly configurable, real-time charting web application to represent thousands of data points in the plants.',
        'Created a near-hit capturing ap that that replaced the paper system where 100+ incidents needed to be processed by hand per week.',
        'Authored an automated tool that moved 20+ years of confidential Labware data from Lotus Notes, MS Access, and Excel to a centralized SQL Server database integrated to SharePoint.',
      ],
      dates: 'Nov 2014 – Jan 2016',
    },
  ],
  skills: [
    'Engineer Management',
    'Web Development',
    'Functional Programming',
    'Database Design',
    'System Architecture',
    'Cloud Software',
    'Test Driven Development',
    'UX Design',
    'Mobile Development',
    'Data Science',
  ],
  technologies: ['.NET, C#', 'Node.js', 'Python', 'Java, Scala, Clojure', 'React, React Native', 'SQL, MongoDB'],
  education: [
    {
      name: 'Udacity',
      degrees: [
        {
          name: 'Self-driving Car Nanodegree',
          dates: '2018',
        },
        {
          name: 'Full Stack Developer Nanodegree',
          dates: '2015',
        },
      ],
    },
    {
      name: 'NWU Potchefstroom',
      degrees: [
        {
          name: 'BSC Computer Science & Mathematics',
          grades: 'Final year - 7/8 distinctions',
        },
      ],
    },
    {
      name: 'McGill University',
      degrees: [
        {
          name: 'BSc Freshman Program',
          grades: 'GPA – 3.7',
        },
      ],
    },
  ],
  lifeExperiences: [
    'Mathematics Olympiad provincial winner.',
    'Head boy in primary- and secondary school.',
    'Perpetual student on Udemy.',
    'Occasional digital nomad.',
    'Aspiring fiction writer and avid reader.',
    'A bit of a fitness fanatic and rugby and cricket fan.',
    'Gamer.',
  ],
};

export default cj;
