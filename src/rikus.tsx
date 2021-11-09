import { Person } from "./person";
import React from 'react';

const rikus: Person = {
    name: 'Rikus Louw',
    titles: ['Fullstack Developer'],
    info: {
        phone: '+27 84 824 8384',
        email: 'rikus@bluebird.dev',
        linkedin: 'linkedin.com/in/rikuswlouw',
        location: 'Cape Town, South Africa',
    },
    summary: `I'm a friendly, enthusiastic and motivated fullstack developer with more than several years of experience. I have a huge passion for software engineering and have worked on many different projects from small startups to enterprise level applications in the worlds of finance, health and social media.`,
    workExperience: [
        {
            title: 'Co-Founder, Developer',
            company: 'Bluebird Development',
            bulletPoints: [
                <>Co-founded a small company of remote developers <a href="https://bluebird.dev">(bluebird.dev)</a></>,
                <>Developed a modern material management system for Raubex – South Africa's biggest construction company.</>,
                <>Integrated three leading banks' direct debit solutions into an enterprise system <a href="https://bank.tech">(bank.tech)</a>.</>,
                <>Built a Magic: The Gathering deck building application called MTG Spellbook for Android.</>,
                <>Modernization and development on a web project for a leading cryptocurrency company <a href="https://coindirect.com">(coindirect.com)</a>.</>,
                <>Developed a Covid tracking app (iOS and Android) for use in multiple European countries <a href="https://delta.io">(delta.io)</a>.</>,
                <>Architected and build a debit order system with integrations to two leading South African banks <a href="https://revio.com">(revio.com)</a>.</>
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
                    dates: '2007 - 2009',
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
