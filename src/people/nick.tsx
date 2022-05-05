import { Person } from '../person';

const nick: Person = {
  name: 'Nick Zaverdinos',
  titles: ['Senior Software Engineer'],
  info: {
    phone: '+372 59 33 0078',
    email: 'nick@bluebird.dev',
    linkedin: 'linkedin.com/in/warpy',
    location: 'Cape Town, South Africa',
  },
  summary: `Adaptive, driven and agile full stack software engineer. From providing high quality, across the board solutions, to highly customised and catered products, I have worked within banking, insurance, cryptocurrencies and sustainability industries.
    `,
    leftWidth: 43,
  workExperience: [
    {
      title: 'Co-Founder, Software Engineer',
      company: 'Bluebird Development',
      bulletPoints: [
        <>Instrumental in transitioning <a href="http://coindirect.com/">coindirect.com</a>{' '}
        (a leading crypto payments and banking provider) to <a href="http://bvnk.com/">bvnk.com</a>.</>,
        <>
          Built a privacy focused contact-tracing application endorsed by the CSIR - a South African government backed
          medical research institution to help the detection and ultimately reduce the spread of COVID-19.&nbsp;
          <a href="https://coviid.me">(coviid.me)</a>
        </>,
        <>
          Pushed features into THORChain's Asgardex client - one of the largest cryptocurrency DEFI projects with over
          $100 million staked on the network. <a href="https://thorchain.org">(thorchain.org)</a>
        </>,
        <>
          Developed a system for improving your carbon footprint and daily lifestyle with a highly customizable and
          dynamic quiz engine. <a href="https://aurorasustainability.com">(aurorasustainability.com)</a>
        </>,
      ],
      dates: 'Aug 2018 - present',
    },
    {
      title: 'Full Stack Developer',
      company: 'DigiOutsource',
      bulletPoints: [
        'Worked with React and Umbraco-integrated applications, using Visual Studio Team Services and Microsoft Azure for Continuous Integration as well as Confluence and Jira for collaboration and task management.',
      ],
      dates: 'Dec 2018 - Jan 2019',
    },
    {
      title: 'Full Stack Developer',
      company: 'Zing World',
      bulletPoints: [
        'Continued development of internal systems, through C#, MSSQL and UWP',
        'Prototyped the next major version of our custom mobile platform using React Native',
        "Contributed to Facebook's React Native git repository",
      ],
      dates: 'Jan 2017 - Nov 2018',
    },
    {
      title: 'Intermediate Software Developer',
      company: 'Blazingchilli',
      bulletPoints: [
        'Built UWP in-house applications to help manage internal systems',
        'Continued skill and backend development with C# and MS SQL',
        'Extended our in-house platform to Windows devices through UWP',
        'Maintained iOS (Swift and Objective-C) applications',
      ],
      dates: 'Jan 2015 - Dec 2016',
    },
    {
      title: 'Junior Software Developer',
      company: 'Blazingchilli',
      bulletPoints: [
        'Focused on C# and MS SQL development.',
        'Worked on in-house custom CMS for a custom mobile application platform, improving and optimizing it where possible.',
        'Trained interns and new employees into working with our custom solutions.',
      ],
      dates: 'June 2013 - Dec 2014',
    },
  ],
  skills: ['Mobile Development', 'Web Development', 'Database Design', 'Microservices', 'System Architecture'],
  technologies: ['Javascript', 'Typescript', 'React', 'React Native', 'Node.js', '.NET', 'C#', 'SQL', 'UWP', 'XAML'],
  education: [
    {
      name: 'Udacity',
      degrees: [
        {
          name: 'React Nanodegree',
          dates: '2018',
        },
      ],
    },
    {
      name: 'UNISA',
      degrees: [
        {
          name: 'BSC Computer Science',
        },
      ],
    },
  ],
  lifeExperiences: [
    'Achieved trophy for first place mathematics and computers in high-school.',
    'Squash team captain and prefect in high-school.',
    'Travelled around the world with Airbnb in 80 days.',
    "Completed Remote Year's work and travel program in Europe.",
    'Hosted an improv experience in Spain.',
    'Digital nomad.',
  ],
};

export default nick;
