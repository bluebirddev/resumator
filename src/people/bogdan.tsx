import { Person } from "../person";
import React from 'react';

const bogdan: Person = {
    name: 'Bogdan Veliscu',
    titles: ['Fullstack Developer', 'Python', 'React', 'iOS'],
    info: {
        phone: '+40 765 379 993',
        email: 'bogdan@bluebird.dev',
        linkedin: 'linkedin.com/in/bogdan-veliscu',
        location: 'Craiova, Romania',
    },
    summary: `
    I am a Software Engineer Generalist with hands-on experience using various languages and technologies to create and implement software applications. 
    I am skilled at learning new concepts quickly, working well under pressure, and communicating ideas clearly and effectively.
    `,
    workExperience: [
        {
      title: 'React Developer',
      company: 'Bluebird Development',
      bulletPoints: [
        'Pushed frontend related features to coindirect.com, using React, Redux and Tailwind.',
      ],
      dates: 'Jun 2021 - present',
    },
        {
            title: 'Python & React Developer, Contractor',
            company: 'CodeSwiftr',
            bulletPoints: [
                <>Developed MumChef.io - a native iOS application helping parents introduce solid foods to todlers.</>,
                <>Python development for a Silicon Valley startup in the IoT space working with NumPy, pandas and MQTT brokers, AWS and Docker.</>,
                <>Ported an Unity AR application from mobile to web using React Redux/Saga Firebase THREE.js. Used Python scripts to grab models, images and relevant metadata from the Unity project files (YAML).</>,

                <>Most used languages/frameworks:Python, React, Redux, Javascript, Django, Django REST Framework, PyTorch and Swift.</>

            ],
            dates: 'Dec 2018 – present'
        },
        {
            title: 'Co-founder, Mobile Software Engineer',
            company: 'specta.ai',
            bulletPoints: [
            <>Solved problems using machine learning algorithms: image classification, 3D model reconstruction, point cloud image registration.
            </>,
            <>Revamped development and support for an in-house iOS application for collecting medical images and a desktop app. Successfully collected sensitive information from 30K+ patients.</>,
            <>Built <a href="torga-stylist.web.app">Torga iStylist</a> A glasses virtual try on using face  tracking collaborated with a cross functional team (programmers, 3D artists, UI/UX designer).</>,

            <>Used tech: Python, PyTorch, Swift, JavaFX, Unity. </>

            ],
            dates: 'Oct 2017 – Jan 2020'
        },
        {
            title: 'Co-founder, Senior Unity, Javascript Developer',
            company: 'pvp.studio',
            bulletPoints: [
            <> Implemented multiplayer support achieving 30 FPS, character & weapon customization, game progression, in-app purchases, game economy. </>

            ],
            dates: 'Mar 2017 – Mar 2018'
        },
        {
            title: 'Lead Game Programmer, Mobile/Web Developer',
            company: 'Ubisoft',
            bulletPoints: [
                <>Led a team of 5 programmers and coordinated the live operations on Driver Speedboat Paradise.
                </>, 
                <>Maintained an in-house Game Engine (C++ with Lua scripting) and successfully released two major updates.
                </>, 
                <>Successfully ported a console level car physics library to iOS and Android and created the needed Unity bindings to make it usable in Unity games. 
                </>,
                <>Pioneered the first localization support and In-App purchases. </>,
                <>Ported the AC Pirates to web. Created the setup and pipelines for reusing the mobile version assets and implemented the game-play for the boat race.</>

            ],
            dates: 'Jun 2013 - Mar 2017'
        },
    ],
    skills: [
        'Mobile Development',
        'Web Development',
        'Design Patterns',
        'Microservices',
        'Agile Methodologies',
        'Machine Learning',
        'Internet of Things',
        'Augmented Reality',
    ],
    technologies: [
        'Python',
        'Javascript',
        'Swift',
        'iOS',
        'React',
        'Django',
        'AWS',
        'Typescript',
        'React Native',
        'Node.js',
        'Java',
        'Android',
        'C#',
    ],
    education: [
        {
            name: 'University of Craiova',
            degrees: [
                {
                    name: 'MSc Internet, Computers and Communications',
                    dates: '2009-2011',
                },
            ]
        },
        {
            name: 'University of Craiova',
            degrees: [
                {
                    name: 'BSc in Computer Science',
                    dates: '2005-2009',
                },
            ]
        }
    ],
    lifeExperiences: [
        'Former Clash Royale addict.',
        'Spent a few thousand hours playing iOS games.',
        'Endless learner on Udemy, LinkedIn and PluralSight.',
        'Coffee lover.',
    ]
}

export default bogdan;
