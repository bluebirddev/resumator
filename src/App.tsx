import React from 'react';
import './App.css';
import { Person, Title } from './person';
import picture from './picture';

const person = require('./people/__current').default as Person;

const DEFAULT_LEFT_WIDTH = 45;

function App() {
  return (
    <div className="App">
      <div className="pdf">
        <div className="background-picture">{picture}</div>
        <div
          className="image"
          style={{
            backgroundImage: 'url(/daniela.jpg)',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        />

        <h1>{person.name}</h1>

        <h2>{person.titles.join(', ')}</h2>

        <div className="info">
          <div>
            <span className="emoji">☎</span> <a href={`tel:${person.info.phone}`}>{person.info.phone}</a>
          </div>
          <div>
            <span className="emoji">✉</span> <a href={`mailto:${person.info.email}`}>{person.info.email}</a>
          </div>
          <div>
            <span className="emoji">🌐</span> <a href={`https://${person.info.linkedin}`}>{person.info.linkedin}</a>
          </div>
          {person.info.location && (
            <div>
              <span className="emoji">⚲</span> {person.info.location}
            </div>
          )}
        </div>

        <div className="split">
          <div style={{ width: `${person.leftWidth || DEFAULT_LEFT_WIDTH}%` }}>
            <h3>Summary</h3>
            <p className="content  summary">{person.summary}</p>

            <h3>Skills</h3>
            <div className="group content">
              {person.skills.map((s, i) => (
                <div key={s} className={i % 2 === 0 ? 'odd' : 'even'}>
                  {s}
                </div>
              ))}
            </div>

            {person.technologies && (
              <>
                <h3>Technologies</h3>
                <div className="group content">
                  {person.technologies.map((s) => (
                    <div key={s}>{s}</div>
                  ))}
                </div>
              </>
            )}

            <h3>Education</h3>
            <div className="education content">
              {person.education.map((e, i) => (
                <div key={i}>
                  <h4 className="edu-name">{e.name}</h4>
                  {e.degrees.map((d) => (
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
                <li key={i}>
                  <div className="dot" />
                  <div>{le}</div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Work Experience</h3>
            {person.workExperience.map((we, i) => {
              const titles: Title[] = (we as any).titles || [we];

              return (
                <div key={i} className="we">
                  {we.company && <h4 className="highlight">{we.company}</h4>}
                  {titles.map((t, j) => (
                    <div key={j}>
                      <div className="align">
                        <div className="job-title">{t.title}</div>
                        <div className="dates">{t.dates}</div>
                      </div>
                      {t.bulletPoints && (
                        <ul>
                          {t.bulletPoints.map((bp, j) => (
                            <li key={j}>
                              <div className="dot" />
                              <div>{bp}</div>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                  {i < person.workExperience.length - 1 && <div className="divider" />}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
