import { Person } from '../person';

const cj: Person = {
  name: 'C.J. Visser',
  titles: ['Senior Software Engineer', 'Manager', 'Entrepreneur'],
  leftWidth: 42,
  info: {
    phone: '+995 595 086 017',
    email: 'cj@bluebird.tech',
    linkedin: 'linkedin.com/in/cjvisser',
    location: 'Cape Town, South Africa',
  },
  summary: `From the financial sector to the entertainment industry, I have led the creation of products that went into the hands of millions of satisfied customers.
    I know how to cultivate a positive work atmosphere, manage teams, design sustainable systems, tackle complex problems, and get things done.
    `,
  workExperience: [
    {
      title: 'Founder, Software Engineer',
      company: 'Bluebird Technologies',
      bulletPoints: [
        <>
          Founded a company of remote software engineers with the mission of becoming South Africa's most sought-after
          tech company to work for. <a href="https://bluebird.tech">(bluebird.tech)</a>
        </>,
        <>
          Created an AI (GPT-based) financial advisor that integrates with{' '}
          <a href="https://www.sanlam.co.za">Sanlam's</a> financial products.
        </>,
        <>
          Built and maintained a logistics system for <a href="https://www.raubex.co.za">Raubex</a> – South Africa's
          biggest construction company.
        </>,
        <>
          Led the web development teams of multi succesful companies and products: <a href="https://revix.com">Revix</a>
          , <a href="https://www.doctorly.de/">Doctorly</a>, <a href="https://www.bvnk.com/">BVNK</a>,{' '}
          <a href="https://www.tweakcarbon.com/">Tweak</a>
        </>,
        <>
          Developed banking systems (which processes 3m+ monthly financial mandates for insurance companies) and
          websites for the <a href="https://bank.tech">Fintec Group</a> and its subsidiaries.
        </>,
        <>
          CTO and co-founder of <a href="https://www.luulo.io/">Luulo</a>, developing bespoke WhatsApp solutions,
          powered by AI. Some of the clients being <a href="https://www.spar.co.za">Spar</a> and{' '}
          <a href="https://www.herotel.com/">Herotel</a>.
        </>,
      ],
      dates: 'Aug 2018 - present',
    },
    {
      title: 'Senior Freelance Engineer, Consultant',
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
      title: 'Senior Full Stack Developer',
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
    'AI',
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
