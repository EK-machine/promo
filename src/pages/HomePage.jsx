import React from 'react';
import './homepage.css';
// import {
//   faHtml5,
//   faCss3Alt,
//   faJsSquare,
//   faReact,
// } from '@fortawesome/free-brands-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function HomePage() {
  return (
    <div className="home__page">
      <h1>Homepage</h1>
      {/*
      <div className="home__container">
        <div className="home__main-container home__page-item">
          <div className="home__avatar">
            <img src="/images/avatar.jpg" alt="EK" />
          </div>
          <div className="home__text-block home__main-text">
            <h1 className="home__h1 home__name">Evgenij Kalabukhin</h1>
            <p className="home__paragraph home__main_paragraph">
              Date of birth: 05.04.1987
            </p>
            <p className="home__paragraph home__main_paragraph">Age: 33 </p>
            <p className="home__paragraph home__main_paragraph">
              Marital status: married
            </p>
            <p className="home__paragraph home__main_paragraph">
              Minsk, Belarus
            </p>
          </div>
        </div>

        <div className="home__education-container home__page-item">
          <div className="home__text-block home__education-text">
            <h1 className="home__h1 home__education-title">Education</h1>
            <p className="home__paragraph home__education_paragraph">
              Academy of public administration under the aegis of the president
              of the Republic of Belarus.
            </p>
            <p className="home__paragraph home__education_paragraph">
              Expertise: State regulation of foreign trade.
            </p>
            <p className="home__paragraph home__education_paragraph">
              Qualifications: Economist-manager (full-time education, budget).
            </p>
          </div>
          <div className="home__education-img">
            <img
              src="/images/education-img.png"
              alt="edu-body"
              className="home__education-img_body"
            />
            <img
              src="/images/head-img.png"
              alt="edu-head"
              className="home__education-img_head"
            />
          </div>
        </div>

        <div className="home__summary-container home__page-item">
          <div className="home__summary-img">
            <img
              src="/images/summary.png"
              alt="summary-blank"
              className="home__summary-img_body"
            />
          </div>
          <div className="home__text-block home__summary-text">
            <h1 className="home__h1 home__h3">Summary</h1>
            <p className="home__paragraph">
              More then 9 years of developing and managing complex transport and
              logistics projects, implementation of project solutions in the
              field of oversized cargo transportation. 6 years of sales and
              purchasing experiance. Interested in frontend engineering, started
              to study frontend software development.
            </p>
          </div>
        </div>

        <div className="home__languages-container home__page-item">
          <div className="home__text-block home__languages-text">
            <h1 className="home__h1 home__h3">Languages</h1>
            <p className="home__paragraph">Belarusian - Native</p>
            <p className="home__paragraph">Russian - Native</p>
            <p className="home__paragraph">English - Fluent</p>
            <p className="home__paragraph">German - Intermediate</p>
          </div>
          <div className="home__languages-img">
            <img
              src="/images/languages.png"
              alt="languages"
              className="home__languages-img_body"
            />
          </div>
        </div>

        <div className="home__skills-container home__page-item">
          <div className="home__skills-img">
            <img
              src="/images/skills.png"
              alt="skills"
              className="home__skills-img_body"
            />
          </div>
          <div className="home__text-block home__skills-text">
            <h1 className="home__h1">Skills</h1>
            <div className="home__chips-container">
              <div className="chip">
                <div className="chip-icon">
                  <FontAwesomeIcon icon={faHtml5} />
                </div>
                <div className="chip-text">HTML</div>
              </div>
              <div className="chip">
                <div className="chip-icon">
                  <FontAwesomeIcon icon={faCss3Alt} />
                </div>
                <div className="chip-text">CSS</div>
              </div>
              <div className="chip">
                <div className="chip-icon">
                  <FontAwesomeIcon icon={faJsSquare} />
                </div>
                <div className="chip-text">JavaScript</div>
              </div>
              <div className="chip">
                <div className="chip-icon">
                  <FontAwesomeIcon icon={faReact} />
                </div>
                <div className="chip-text">React</div>
              </div>
            </div>
          </div>
        </div>

        <div className="home__qualities home__page-item">
          <div className="home__text-block home__qualities-text">
            <h1 className="home__h1">Personal qualities</h1>
            <p className="home__paragraph">Responsible</p>
            <p className="home__paragraph">
              Curiosity and ability to learn quick
            </p>
            <p className="home__paragraph">Communicative</p>
            <p className="home__paragraph">Stress stable</p>
            <p className="home__paragraph">Organized</p>
            <p className="home__paragraph">Flexible</p>
            <p className="home__paragraph">Accurate</p>
            <p className="home__paragraph">Critical thinking</p>
          </div>
          <div className="home__qualities-img">
            <img
              src="/images/qualities.png"
              alt="qualities"
              className="home__qualities-img_body"
            />
          </div>
        </div>
        <div className="home__experiance-container  home__page-item">
          <h1 className="home__h1">Work experiance</h1>
          <div className="home__experiance-item">
            <p className="home__paragraph home__experiance-item-1">
              2010 May – 2010 June
            </p>
            <p className="home__paragraph home__experiance-item-2">
              «Convex International» LLC. Position: Marketing manager.
            </p>
          </div>
          <div className="home__experiance-item">
            <p className="home__paragraph home__experiance-item-1">
              2010 August – 2010 November
            </p>
            <p className="home__paragraph home__experiance-item-2">
              «Glassworks Neman» OJSC. Position: Marketing manager.
            </p>
          </div>
          <div className="home__experiance-item">
            <p className="home__paragraph home__experiance-item-1">
              2010 November – 2011 December
            </p>
            <p className="home__paragraph home__experiance-item-2">
              «Belmedpreparaty» RUE. Position: Purchase manager.
            </p>
          </div>
          <div className="home__experiance-item">
            <p className="home__paragraph home__experiance-item-1">
              2012 January – 2015 July
            </p>
            <p className="home__paragraph home__experiance-item-2">
              «Jenty-Spedition» JV. Position: Oversized transportation maneger.
            </p>
          </div>
          <div className="home__experiance-item">
            <p className="home__paragraph home__experiance-item-1">
              2015 September – 2017 October
            </p>
            <p className="home__paragraph home__experiance-item-2">
              «Hellmann East Europe» JLLC. Position: Client manager.
            </p>
          </div>
          <div className="home__experiance-item">
            <p className="home__paragraph home__experiance-item-1">
              October 2017 – present
            </p>
            <p className="home__paragraph home__experiance-item-2">
              «RWD» LLC. Position: Client manager.
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
}
export default HomePage;
