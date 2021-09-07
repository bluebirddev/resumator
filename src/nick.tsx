import { Person } from "./person";
import React from 'react';

const nick: Person = {
    name: 'Nick Zaverdinos',
    titles: ['Fullstack Developer'],
    info: {
        phone: '+372 59 33 0078',
        email: 'nick@bluebird.dev',
        linkedin: 'linkedin.com/in/warpy',
        location: 'Cape Town, South Africa',
    },
    summary: `Adaptive, driven and agile full stack developer. From providing high quality, across the board solutions, to highly customised and catered products, I have worked within banking, insurance, cryptocurrencies and sustainability industries.
    `,
    workExperience: [
        {
            title: 'Co-Founder, Developer',
            company: 'Bluebird Development',
            bulletPoints: [
                <>Co-founded a small company of remote developers with the mission of becoming the most sought-after tech company to work for.  <em>(bluebird.dev)</em></>,
                <>Built and maintained a logistics system for Raubex – South Africa's biggest construction company.</>,
                <>Developed banking systems (which processes 3m+ monthly financial mandates for insurance companies) and websites for the Fintec Group and its subsidiaries <em>(fintec.group, opticollect.com, bank.tech)</em>.</>
            ],
            dates: 'Jan 2019 - present'
        },
        {
            title: 'Full Stack Developer',
            company: 'DigiOutsource',
            bulletPoints: [
                'Worked with React and Umbraco-integrated applications, using Visual Studio Team Services and Microsoft Azure for Continuous Integration as well as Confluence and Jira for collaboration and task management.'
            ],
            dates: 'Dec 2018 - Jan 2019'
        },
        {
            title: 'Full Stack Developer',
            company: 'Zing World',
            bulletPoints: [
                'Continued development of internal systems, through C#, MSSQL and UWP',
                'Prototyped the next major version of our custom mobile platform using React Native',
                'Contributed to Facebook\'s React Native git repository'
            ],
            dates: 'Jan 2017 - Nov 2018'
        },
        {
            title: 'Intermediate Software Developer',
            company: 'Blazingchilli',
            bulletPoints: [
                'Built UWP in-house applications to help manage internal systems',
                'Continued skill and backend development with C# and MS SQL',
                'Extended our in-house platform to Windows devices through UWP',
                'Maintained iOS (Swift and Objective-C) applications'
            ],
            dates: 'Jan 2015 - Dec 2016'
        },
        {
            title: 'Junior Software Developer',
            company: 'Blazingchilli',
            bulletPoints: [
                'Focused on C# and MS SQL development.',
                'Worked on in-house custom CMS for a custom mobile application platform, improving and optimizing it where possible.',
                'Trained interns and new employees into working with our custom solutions.'
            ],
            dates: 'Jan 2014 - Dec 2014'
        },
        {
            title: 'Developer Internship',
            company: 'Blazingchilli',
            bulletPoints: [
                'Interned as a mobile application QA whilst developing skills in C#, .NET, MSSQL under senior mentorship.',
                'QA tested android and iOS application functionality.',
                'Proved my potential as a strong developer through quick learning and demonstration'
            ],
            dates: 'June 2013 - Dec 2013'
        }
    ],
    skills: [
        'Mobile Development',
        'Web Development',
        'Database Design',
        'Microservices',
        'System Architecture'
    ],
    technologies: [
        'Javascript',
        'Typescript',
        'React',
        'React Native',
        'Node.js',
        '.NET',
        'C#',
        'SQL',
        'UWP',
        'XAML'
    ],
    education: [
        {
            name: 'Udacity',
            degrees: [
                {
                    name: 'React Nanodegree',
                    dates: '2018',
                },
            ]
        },
        {
            name: 'UNISA',
            degrees: [
                {
                    name: 'BSC Computer Science',
                },
            ]
        }
    ],
    lifeExperiences: [
        'Achieved trophy for first place mathematics and computers in high-school.',
        'Squash team captain and prefect in high-school.',
        'Travelled around the world with Airbnb in 80 days.',
        'Completed Remote Year\'s work and travel program in Europe.',
        'Hosted an improv experience in Spain.',
        'Digital nomad.',
        'Sunset chaser.',
    ]
}

export default nick;
