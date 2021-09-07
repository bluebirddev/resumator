import React from 'react';
import './App.css';
import picture from './picture';

import person from './cj';

function App() {
  return (
    <div className="App">
      <div className='pdf'>
        <div className="background-picture">{picture}</div>

        <h1>{person.name}</h1>

        <h2>{person.titles.join(', ')}</h2>

        <div className="info">
          <div><span className="emoji">☎</span> {person.info.phone}</div>
          <div><span className="emoji">✉</span> {person.info.email}</div>
          <div><span className="emoji">🌐</span> {person.info.linkedin}</div>
          <div><span className="emoji">⚲</span> {person.info.location}</div>
        </div>

        <h3>Summary</h3>
        <p>{person.summary}</p>
        
        <div className="split">
          <div>
            <h3>Work Experience</h3>
            {person.workExperience.map((we, i) => (
              <div key={i}>
                <h4>{we.title}</h4>
                <div className="align">
                  <div className="highlight">{we.company}</div>
                  <div className="dates">{we.dates}</div>
                </div>
                <ul>
                  {we.bulletPoints.map((bp, j) => <li key={j}><div className="dot" /><div>{bp}</div></li>)}
                </ul>
              </div>
            ))}
          </div>
          <div>
            <h3>Skills</h3>
            <div className="group">{person.skills.map(s => <div key={s}>{s}</div>)}</div>

            <h3>Technologies</h3>
            <div className="group">{person.technologies.map(s => <div key={s}>{s}</div>)}</div>

            <h3>Education</h3>
            <div className="education">
              {person.education.map((e, i) => (
                <div key={i}>
                  <h4>{e.name}</h4>
                  {e.degrees.map(d => (
                    <div key={d.name}>
                      <div className="align">
                        <div>{d.name}</div>
                        <div className="dates">{d.dates}</div>
                      </div>
                      <div className="highlight">{d.grades}</div>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <h3>Life experiences</h3>
            <ul className="life-experiences">
              {person.lifeExperiences.map((le, i) => (
                  <li key={i}><div className="dot" /><div>{le}</div></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
