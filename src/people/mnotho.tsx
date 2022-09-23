import { Person } from '../person';
import React from 'react';

const mnotho: Person = {
   name: 'Mnotho Gumede',
   titles: ['Software Developer', 'Manager', 'Entrepreneur'],
   info: {
      phone: '+27 73 978 7541',
      email: 'mnotho@bluebird.dev',
      linkedin: 'linkedin.com/in/mnotho-gumede-241b94b6/',
      location: 'Gauteng, South Africa',
   },
   summary: `Formed into the React Native field since the start of my developer journey, I am a enthusiastic indiividual with a drive 
   for creating beautiful and sustainable solutions. I am comfortable as a team tech lead, as I thrive in complex situations created by complex problems. 
    `,
   workExperience: [
      {
         title: 'Software Developer, React Native Specialist',
         company: 'DVT',
         bulletPoints: [
            <>
               Created and launched a unified App for Mutlichoice to serve the entire African continent.
            </>,
            <>Enabled non-technical users to create automation scripts for Kantar in their Quality Assurance Platform by means of incorporating an easily understandable, user-friendly system</>,
            <>
               Built a social network app for Dotmodus, that brings together pet owners from all around the world for communication and product listings. 
            </>,
            <>
               Created the mobile rebranding development of Zilch, a payment processing platform that also included a virtual card for payment splitting. 
            </>
         ],
         dates: 'Nov 2020- present',
      },
      {
         title: 'Lead Software Developer',
         company: 'Make Better',
         bulletPoints: ['Development team lead on Checkers project, working on mobile and web applications development. Deploying apps to Google Play and App Store, & cloud function scripting as per app requirements'],
         dates: 'Oct 2019 - Sep 2020',
      },
      {
         title: 'Software Developer',
         company: 'BNRY',
         bulletPoints: [
            'Developing features in already existing applications for cross-platform app packaging, testing and debugging applications to ensure the desired behavior in deployment procedures and beyond',
         ],
         dates: 'Feb 2019 - Sep 2019',
      },
      {
         title: 'Software Developer',
         company: 'WIGROUP',
         bulletPoints: [
            'Developing loyalty and rewards applications in already existing applications and debugging mobile applications to ensure the desired behaviour.',
         ],
         dates: 'Feb 2018 - Sep 2018',
      },
      {
         title: 'Computer Science Tutor',
         company: 'UCT',
         bulletPoints: [
            'Facilitating weekly lab practical sessions, creation of test and asssignments as well as marking. CSS, Python, Java, CGI and SQLite3'  
         ],
         dates: 'Feb 2016 – Sep 2017',
      },
   ],
   skills: [
      'Mobile Development',
      'Web Development',
      'Functional Programming',
      'System Architecture',
      'Cloud Software',
      'Test Driven Development',
      'UX Design'
      ,
   ],
   technologies: [
      'React Native',
      'React',
      'Node.js',
      'Git',
      'Typescript',
      'Firebase',
      'CSS',
      'Python',
      'Jira',
      'SQL'
   ],
   education: [
      {
         name: 'University of Cape Town',
         degrees: [
            {
               name: 'BSc Computer Science and Computer Engineering,',
               dates: '2017',
            },
         ],
      },
   ],
   lifeExperiences: [
      'Science Enthusiast',
      'Technology Guru',
      'Basketball player',
   ],
};

export default mnotho;
