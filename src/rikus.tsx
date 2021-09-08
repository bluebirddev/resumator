import { Person } from "./person";
import React from 'react';

const rikus: Person = {
    name: 'Rikus Louw',
    titles: ['Fullstack Developer'],
    info: {
        phone: '+27 84 824 8384',
        email: 'rikus@bluebird.dev',
        linkedin: 'linkedin.com/in/rikus-louw-01b71461',
        location: 'Cape Town, South Africa',
    },
    summary: ``,
    workExperience: [
        {
            title: 'Co-Founder, Developer',
            company: 'Bluebird Development',
            bulletPoints: [
                <>Co-founded a small company of remote developers with the mission of becoming the most sought-after tech company to work for.  <em>(bluebird.dev)</em></>,
                <>Built and maintained a logistics system for Raubex – South Africa's biggest construction company.</>,
                <>Developed banking systems (which processes 3m+ monthly financial mandates for insurance companies) and websites for the Fintec Group and its subsidiaries <em>(fintec.group, opticollect.com, bank.tech)</em>.</>
            ],
            dates: 'Jul 2019 - present'
        },
        {
            title: 'Lead Mobile Developer',
            company: 'Zing World',
            bulletPoints: [
                'Maintained the mobile client for Android and Xamarin',
                'Co-developed an insurance platform in .NET and SQL',
                'Co-developed an walleting platform in .NET and SQL',
            ],
            dates: 'Feb 2017 - Jul 2019'
        },
        {
            title: 'Intermediate Mobile Developer',
            company: 'Blazingchilli',
            bulletPoints: [
                'Built the mobile client for Android, Xamarin and Blackberry 10',
                'Helped with developing and maintaining builds on J2ME and Blackberry',
            ],
            dates: 'Feb 2014 - Feb 2017'
        },
        {
            title: 'Software Developer',
            company: 'Vanguard Software Solutions',
            bulletPoints: [
                'Focused on C# and MS SQL development.',
                'Learned the principles of Domain driven design',
                'Built an audio and video transcoder in .NET and ffmpeg'
            ],
            dates: 'Oct 2013 - Feb 2014'
        },
        {
            title: 'Mobile Developer',
            company: 'Bozza.mobi',
            bulletPoints: [
                'Developed the Android version of the Bozza.mobi social media and music application.',
                'Co-Developed the J2ME and Blackberry versions of the Bozza.mobi social media and music application.',
                'Helped to build an audio and video transcoder in JAVA and ffmpeg'
            ],
            dates: 'Oct 2012 - Sep 2013'
        },
        {
            title: 'Junior Developer',
            company: 'Sebrio',
            bulletPoints: [
                'Developed a Taxi hailing app prototype in Android',
                'Developed a Heart rate monitor in HTML5',
                'Crated a tool for dynamic PDFs via XSL-FO for pathology reports',
                'Worked on an enterprise assurance application in Adobe Flex'
            ],
            dates: 'Jan 2012 - Sep 2012'
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
        'Android',
        'Xamarin',

    ],
    education: [
        {
            name: 'CTI',
            degrees: [
                {
                    name: 'Software Development',
                    dates: '2011',
                },
            ]
        },
        {
            name: 'University of Stellenbosch',
            degrees: [
                {
                    name: 'Electric & Electronic Engineering (Incomplete)',
                    dates: '2007-2009',
                },
            ]
        }
    ],
    lifeExperiences: [
        'Sang first tenor in the oldest religious choir in South Africa',
        'Played rugby for the first team throughout school',
        
    ]
}

export default rikus;
