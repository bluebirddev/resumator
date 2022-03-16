import { Person } from '../person';

const Estian: Person = {
  name: 'Estian Diedericks',
  titles: ['Software Developer'],
  info: {
    phone: '+27 84 628 5447',
    email: 'estian@bluebird.dev',
    linkedin: 'https://www.linkedin.com/in/estian-diedericks-18094490/',
    location: 'Cape Town, South Africa',
  },
  summary: `I am a software developer with a passion for
      learning new technologies and an interest in how the web
      works. I enjoy working on the front end and
      back end of a project and love making creative ideas come to
      life. I am always looking for new
      opportunities to increase my knowledge on a subject and
      strive for self improvement.
    `,
  workExperience: [
    {
      title: 'Software Developer',
      company: 'Bluebird Development',
      bulletPoints: [<>In the process of developing a Rugby ratings application.</>],
      dates: 'Nov 2021 - present',
    },
    {
      title: 'Freelance Developer',
      company: 'Self Employed',
      bulletPoints: [
        <>Created a E-commerce shop for a company selling furniture.</>,
        <>
          Developed an analytical dashboard for the purpose of analyzing patterns for crypto assets between different
          exchanges.
        </>,
        <>
          Developed a website for a company providing a service for installing, fixing and maintaining computers and
          electronic devices.
        </>,
        <>
          Developed a page for the display of panoramic views of a mountain series and trails{' '}
          <a href="https://www.cradockpeak.co.za/">(Ecobound)</a>.
        </>,
      ],
      dates: '2018 - 2021',
    },
    {
      title: 'Fullstack Developer',
      company: 'Fancam',
      bulletPoints: [
        <>Designed and Developed a management platform for the company to interface with and increase productivity</>,
        <>Designed and Developed an analytical dashboard for clients to track activity on their projects(Fancams).</>,
        <>Worked with AWS Facial rekognition to build a platform for analyzing attendance of fans at events.</>,
      ],
      dates: '2016 - 2018',
    },
  ],
  skills: ['Web Development', 'Backend Development', 'Database Design'],
  technologies: ['Javascript', 'Typescript', 'React', 'Node.js', 'AWS', 'SQL', 'MongoDB', 'PHP', 'Laravel'],
  education: [
    {
      name: 'CTI',
      degrees: [
        {
          name: 'Software Development',
          dates: '2014',
        },
      ],
    },
  ],
  lifeExperiences: [
    'Completed a 70.3 Ironman',
    'Always trying to capture my youth as a gamer.',
    'Played drums for a band.',
    'Aspiring Golfer.',
  ],
};

export default Estian;
