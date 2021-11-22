import { Person } from '../person';

const Marvelous: Person = {
  name: 'Marvelous Ikechi',
  titles: ['Mobile Developer'],
  info: {
    phone: '+234 703 9873 707',
    email: 'marvelous@bluebird.dev',
    linkedin: 'linkedin.com/in/marvelous-ikechi',
    location: 'Ibadan, Nigeria',
  },
  summary: `Highly motivated Software Engineer with demonstrated proficiency in Django, React, React Native, 
            and adept at building scalable applications with a focus on effective collaboration, 
            top notch attention to details, quality deployment, monitoring and reliability.
    `,
  workExperience: [
    {
      title: 'Mobile Engineer',
      company: 'Monkey Music',
      bulletPoints: [
        <>
          Led a team of front-end developers in the creation of{' '}
          <a href="https://play.google.com/store/apps/details?id=com.monkeymusic">Monkey Music</a>.
        </>,
        'Ensured cross-platform compatibility and responsiveness across different mobile devices.',
        'Managed the real-time communications using Web Sockets and Redux.',
        'Orchestrated the deployments of new versions to the Play and Apple Stores.',
        'Developed a web user dashboard interface, enabling users to update and monitor high-level information and KPIs.',
      ],
      dates: 'Feb 2021 - Nov 2021',
    },
    {
      title: 'Front-end developer',
      company: 'Cloudware Technologies',
      bulletPoints: [
        <>
          Translated visual designs into highly-responsive and pixel-perfect Front-end for the{' '}
          <a href="https://booktrip.pacesettertransport.com.ng">Oyo state transport system</a>.
        </>,
        'Successfully completed the integration of Paypal’s payment gateway in the My-Deal-Tracker app project.',
        'Trained Junior Developers on front-end programming.',
        'Participates across multi-functional teams and collaborates through all phases of the product development process.',
      ],
      dates: 'Jan 2021 - Oct 2021',
    },
    {
      title: 'Software Engineer',
      company: 'DigiTebl',
      bulletPoints: [
        'Utilised sound knowledge of Ag-grid in restructuring users purchase display.',
        'Leveraged Angular’s dynamic rendering to successfully integrate dynamic loading and users purchases.',
        'Optimized components for maximum performance through strategic contributions during daily team meetings.',
        'Maintained iOS (Swift and Objective-C) applications.',
      ],
      dates: 'Aug 2020 - Jan 2021',
    },
    {
      title: 'Backend Engineer',
      company: 'Django Africa',
      bulletPoints: [
        'Identified and removed potential threats through debugging of the Django forum library and redesigned Django forum library to align with company specifications.',
        'Built multiple REST API endpoints.',
      ],
      dates: 'Jan 2020 - Jul 2020',
    },
    {
      title: 'Junior Software Developer',
      company: 'University of Port Harcourt',
      dates: 'Jan 2018 - Jul 2018',
    },
  ],
  skills: ['Mobile Development', 'Web Development', 'Backend Development', 'Team Leadership'],
  technologies: ['Javascript', 'Typescript', 'React', 'React Native', 'Python', 'Django'],
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
    'Represented High school in Annual Cowbel Mathematics competition.',
    'Performed spoken words in NYSC camp.',
    'I love Fifa and playing football.',
    'I enjoy writing and performing poetry.',
  ],
};

export default Marvelous;
