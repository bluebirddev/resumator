import { Person } from '../person';
import React from 'react';

const bogdan: Person = {
  name: 'Daniéla Barnard',
  titles: ['Historian', 'PR', 'Teacher'],
  leftWidth: 34,
  info: {
    phone: '+995 551 15 88 45',
    email: 'danielabarnard@gmail.com',
    linkedin: 'linkedin.com/in/daniela-barnard',
  },
  summary: (
    <>
      I am a detail-orientated and resourceful person with a can-do attitude. What excites me the most is to teach and
      enlighten by leveraging my history knowledge and storytelling skills. Therefore this Albert Einstein quote has
      always resonated with me: <em>“Creativity is intelligence having fun.”</em>
    </>
  ),
  workExperience: [
    {
      company: 'Stellenbosch University',
      titles: [
        {
          title: 'History Education Lecturer',
          bulletPoints: [
            'Part-Time Teaching 1st, 3rd and 4th years, and PGCE students at University.',
            'Main themes include Bias and Prejudice in History, Creating a Student-Centred Learning Environment, Assessment Development in History, ICT, Using Public Histories and Film in the Classroom.',
            'Creating module content and structure.',
            'Teaching bilingual face-to face and online.',
            'Implementing and adapting an online interactive interface.',
          ],
          dates: '2019 - 2022',
        },
        {
          title: 'Academic Essay & Test Marker',
          bulletPoints: ['Marking 1st-3rd year History and History Education Research Essays and Tests.'],
          dates: '2018 - 2022',
        },
        {
          title: 'Afrikaans & English Translator',
          bulletPoints: ['History and Education Department written, audio and real-time two-way translator.'],
          dates: '2018 - 2022',
        },
        {
          title: 'Writing Consultant',
          bulletPoints: [
            <>
              Conduct 1-on-1 consultations to assist other writers to develop their own writing, MS Teams proficiency,
              recordkeeping, communication, and presentation skills.
            </>,
          ],
          dates: '2021',
        },
        {
          title: 'Research & Teaching Assistant',
          bulletPoints: [
            <>
              Administrative organisation, record keeping, meeting minutes, project management, archival research, small
              group teaching, and data collection.
            </>,
          ],
          dates: '2020',
        },
      ],
    },
    {
      title: 'Freelance Teacher',
      company: 'IMMI School, Englishland School, British-Georgian School',
      bulletPoints: [
        <>
          At <em>Englishland</em> I plan, prepare and deliver KET, PET and FIRST lessons according to the Cambridge
          English Curriculum Standards.
        </>,
        <>
          At <em>IMMI</em> the focus is on an American English Curriculum using the IXL Platform tool. I teach English
          as a second language in 1-1 and small group online sessions.
        </>,
        <>
          At <em>British-Georgian School (BGS)</em> I teach Geography for Key Stage 2 according to the British National
          Curriculum.
        </>,
        <>
          I believe in a student-centred and dynamic approach to create an immersive and fun environment for students.
        </>,
      ],
      dates: '2022 - Presently',
    },
    {
      company: 'Hangtime Rock Climbing Gym',
      title: 'General Staff Member & Route-setter',
      bulletPoints: ['Customer care & support, route-setting, managing front desk.'],
      dates: '2019',
    },
    {
      title: 'Babysitting & AU Pair',
      bulletPoints: ['General child care and support, activities development, scheduling.'],
      dates: '2019',
    },
    {
      title: 'Client Assistance',
      company: 'Activitar',
      bulletPoints: ['Customer service & support, data capturing.'],
      dates: '2016 - 2017',
    },
    {
      company: "Trumpet Tree Restaurant / La Romantica / Gino's Restaurant",
      title: 'Waiter & Hostess',
      bulletPoints: ['Waitering, hosting, and floor management.'],
      dates: '2015 - 2017',
    },
  ],
  skills: [
    'Delegation', // s
    'Teamwork', // s
    'Project Management', //s
    'Administrative Organisation', // l
    'Content Development',
    'Effective Communication', // l
    'Public Speaking', //s

    'Conflict Resolution', // l
    'Research',
    'Problem Solving', // s
  ],
  education: [
    {
      name: 'University of Buckingham',
      degrees: [
        {
          name: 'PGCE (Online)',
          dates: '2024',
        },
      ],
    },
    {
      name: 'Stellenbosch University',
      degrees: [
        {
          name: 'BA History Masters Degree (Cum Laude)',
          dates: '2022',
        },
      ],
    },
    {
      name: 'Brainnest Company',
      degrees: [
        {
          name: 'Public Relations (PR) Industry Training',
          dates: '2022',
        },
      ],
    },
    {
      name: 'i-to-i Teach English Abroad & Online Academy',
      degrees: [
        {
          name: '300 Hour Teaching English Foreign Language (TEFL) Diploma',
          dates: '2022',
        },
      ],
    },
    {
      name: 'Stellenbosch University',
      degrees: [
        {
          name: 'Bachelors of Arts in International Studies Degree',
          dates: '2017',
        },
      ],
    },
  ],
  lifeExperiences: [
    'Presented at the South African Historical Society Conference',
    'Received the Rhodes Award for History at Stellenbosch University',
    'Cum Laude for Ubuntu Learning Short-Course hosted at Brandvlei Prison',
    'Community Service: SPCA Stellenbosch / Dog Organisation Tbilisi',
    'Avid rock climber',
    'Golden Key International Honour Society Member',
  ],
};

export default bogdan;
