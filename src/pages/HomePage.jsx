import React from 'react';
import './pages.css';

function HomePage() {
  return (
    <div className="home__container">
      <img
        className="home__avatar home__page-item"
        src="/images/avatar.jpg"
        alt="EKface"
      />
      <h1 className="home__name  home__page-item">Evgenij Kalabukhin</h1>
      <div className="home__bio-education home__page-item">
        <div className="home__bio-container">
          <h3 className="home__h3">Bio</h3>
          <p className="home__paragraph">Date of birth: 05.04.1987</p>
          <p className="home__paragraph">Age: 33 </p>
          <p className="home__paragraph">Marital status: married</p>
        </div>
        <div className="home__education-container">
          <h3 className="home__h3">Education</h3>
          <p className="home__paragraph">
            Academy of public administration under the aegis of the president of
            the Republic of Belarus.
          </p>
          <p className="home__paragraph">
            Expertise: State regulation of foreign trade.
          </p>
          <p className="home__paragraph">
            Qualifications: Economist-manager (full-time education, budget).
          </p>
        </div>
      </div>
      <div className="home__skills-container home__page-item">
        <h3 className="home__h3">Skills</h3>
      </div>
      <div className="home__summary-container home__page-item">
        <h3 className="home__h3">Summary</h3>
        <p className="home__paragraph">
          More then 9 years of developing and managing complex transport and
          logistics projects, implementation of project solutions in the field
          of oversized cargo transportation. 6 years of sales and purchasing
          experiance. Interested in frontend engineering, started to study
          frontend software development.
        </p>
      </div>
      <div className="home__qualities home__page-item">
        <h3 className="home__h3">Personal qualities</h3>
        <p className="home__paragraph">Responsible</p>
        <p className="home__paragraph">Curiosity and ability to learn quick</p>
        <p className="home__paragraph">Communicative</p>
        <p className="home__paragraph">Stress stable</p>
        <p className="home__paragraph">Organized</p>
        <p className="home__paragraph">Flexible</p>
        <p className="home__paragraph">Accurate</p>
        <p className="home__paragraph">Critical thinking</p>
      </div>
      <div className="home__languages-container home__page-item">
        <h3 className="home__h3">Languages</h3>
        <p className="home__paragraph">Belarusian - Native</p>
        <p className="home__paragraph">Russian - Native</p>
        <p className="home__paragraph">English - Fluent</p>
        <p className="home__paragraph">German - Intermediate</p>
      </div>
      <div className="home__experiance-container  home__page-item">
        <h3 className="home__h3">Work experiance</h3>
        <p className="home__paragraph home__experiance-item">2010 May-June</p>
        <p className="home__paragraph home__experiance-item">
          Representative office of the Limited Liability Company «Convex
          International GmbH» (Federal Republic of Germany) in the Republic of
          Belarus. Position: Marketing manager.
        </p>
        <p className="home__paragraph home__experiance-item">
          2010 August-November
        </p>
        <p className="home__paragraph home__experiance-item">
          «Glassworks Neman» OJSC. Position: Marketing manager.
        </p>
        <p className="home__paragraph home__experiance-item">
          2010 November -2011 December
        </p>
        <p className="home__paragraph home__experiance-item">
          «Belmedpreparaty» RUE. Position: purchase manager.
        </p>
        <p className="home__paragraph home__experiance-item">
          2012 January – July 2015
        </p>
        <p className="home__paragraph home__experiance-item">
          «Jenty-Spedition» JV. Position: oversized transportation maneger.
        </p>
        <p className="home__paragraph home__experiance-item">
          2015 September – October 2017
        </p>
        <p className="home__paragraph home__experiance-item">
          «Hellmann East Europe» JLLC. Position: client manager.
        </p>
        <p className="home__paragraph home__experiance-item">
          October 2017 – present
        </p>
        <p className="home__paragraph home__experiance-item">
          «RWD» LLC. Position:{' '}
        </p>
      </div>
    </div>
  );
}
export default HomePage;
