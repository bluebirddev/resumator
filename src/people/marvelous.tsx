import { Person } from '../person';
import React from 'react';

const Marvelous: Person = {
  name: 'Marvelous Ikechi',
  titles: ['Software Developer'],
  info: {
    phone: '+234 703 9873 707',
    email: 'marvelous@bluebird.dev',
    linkedin: 'linkedin.com/in/marvelous-ikechi/',
    location: 'Ibadan, Nigeria',
  },
  summary: `Highly motivated Software Engineer with demonstrated proficiency in Django, React, React Native, 
            and adept at building scalable applications with a focus on effective collaboration, 
            top notch attention to details, quality deployment, monitoring and reliability.
    `,
  workExperience: [
    {
      title: 'Sftware Developer',
      company: 'Bluebird Development',
      bulletPoints: [
        <>Improved on user interface of intenally built mobile application</a></>,
      ],
      dates: 'Nov 2021 - present',
    },
    {
      title: 'Mobile Engineer',
      company: 'Monkey music',
      bulletPoints: [
        'Adapted mobile applications to suit cross platforms, ensuring responsiveness across different mobile devices.',
        'Integrated web socket which automated back and forth notification of host and users.',
        'Responsible for the authentication of users by fetching REST API and persisting user data via Redux.',
        'Leveraged redux to store apps and users state',
        'Deploy new versions to play store (https://play.google.com/store/apps/details?id=com.monkeymusic) and Apple Store.'
        'Develops user dashboard interface, enabling users to update and monitor high-level information and KPIs.'
      ],
      dates: 'Feb 2021 - Nov 2021',
    },
    {
      title: 'Front End developer | Mobile Engineer',
      company: 'Cloudware Technologies',
      bulletPoints: [
        'Translated visual designs into highly-responsive and pixel-perfect Front-end for Oyo state transport system
         (https://booktrip.pacesettertransport.com.ng/)',
        'Successfully completed the integration of Paypal’s payment gateway in the My-Deal-Tracker app project.',
        "Trains Junior Developers on Front End programming.",
          'Participates across multi-functional teams and collaborates through all phases of the product development process.'
      ],
      dates: 'Jan 2021 - Oct 2021',
    },
    {
      title: 'Software Engineer Intern',
      company: 'DigiTebl, Maharashtra, India (Remote)',
      bulletPoints: [
        'Utilised sound knowledge of Ag-grid in restructuring users purchase display.',
        'Leveraged Angular’s dynamic rendering to successfully integrate dynamic loading and users purchases.',
        'Optimized components for maximum performance through strategic contributions during daily team meetings.',
        'Maintained iOS (Swift and Objective-C) applications',
      ],
      dates: 'Aug 2020 - Jan 2021',
    },
    {
      title: 'Backend Engineer',
      company: 'Django Africa',
      bulletPoints: [
        'Identified and removed potential threats through debugging of the Django forum library and redesigned Django forum library to align with company specifications.',
        'Built REST API endpoints for DjangoAfrica using Knowledge of Django',
      ],
      dates: 'Jan 2020- July 2020',
    },
  ],
  skills: [
    'Mobile Development',
    'Web Development',
    'Backend Development',
  ],
  technologies: [
    'Javascript',
    'Typescript',
    'React',
    'React Native',
    'Python',
    'Django',
  ],
  education: [
    {
      name: 'Rivers State University',
      degrees: [
        {
          name: 'Bsc Computer Science',
          dates: '2019',
        },
      ],
    },
    {
      name: 'Rivers State Polytechnic',
      degrees: [
        {
          name: 'Diploma Computer Science',
        },
      ],
    },
  ],
  lifeExperiences: [
    'Member of DevAccent group, Rivers state University chapter.',
    'Represented High school in Annual Cowbel Mathematics competition',
    'Performed spoken words in NYSC camp' 
  ],
};

export default Marvelous;
