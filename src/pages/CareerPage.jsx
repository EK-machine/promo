import React from 'react';
import './careerpage.css';
import ProgressScrollBar from '../components/ProgressScrollBar';
import HireButton from '../components/HireButton';
import pillBG1 from './pillBG1.png';
import pillBG2 from './pillBG2.png';
import pillRT from './pillRT.png';

function CareerPage({ scroll }) {
  return (
    <div className="career__page">
      <div className="career__container">
        <h1 className="career__title">My career</h1>
        <section className="career__content-section">
          <div className="career__item">
            <div className="career__item-date-container">
              <p
                className="career__text-date career__text-date1"
                style={{ top: `${scroll * 4.7}%` }}
              >
                2010 May – 2010 June
              </p>
            </div>
            <div className="career__item-company-container">
              <p
                className="career__text-company career__text-company1"
                style={{ top: `${scroll * 4.5}%` }}
              >
                «Convex International» LLC.
              </p>
            </div>
            <div className="career__item-position-container">
              <p
                className="career__text-position career__text-position1"
                style={{ top: `${scroll * 4.3}%` }}
              >
                Position: Marketing manager.
              </p>
            </div>
          </div>

          <div className="career__item">
            <div className="career__item-date-container">
              <p
                className="career__text-date career__text-date2"
                style={{ top: `${-12 + scroll * 2.1}%` }}
              >
                2010 August – 2010 November
              </p>
            </div>
            <div className="career__item-company-container">
              <p
                className="career__text-company career__text-company2"
                style={{ top: `${-12 + scroll * 2.3}%` }}
              >
                «Glassworks Neman» OJSC.
              </p>
            </div>
            <div className="career__item-position-container">
              <p
                className="career__text-position career__text-position2"
                style={{ top: `${-12 + scroll * 2.5}%` }}
              >
                Position: Marketing manager.
              </p>
            </div>
          </div>

          <div className="career__item">
            <div className="career__item-date-container">
              <div
                className="career__text-date_background"
                style={{ bottom: `${-35 + scroll * 2}%` }}
              >
                <p className="career__text-date career__text-date3">
                  2010 November – 2011 December
                </p>
              </div>
            </div>
            <div className="career__item-company-container">
              <div
                className="career__text-company_background"
                style={{ top: `${-35 + scroll * 2}%` }}
              >
                <p className="career__text-company career__text-company3">
                  «Belmedpreparaty» RUE.
                </p>
              </div>
            </div>
            <div className="career__item-position-container">
              <div
                className="career__text-position_background"
                style={{ bottom: `${-35 + scroll * 2}%` }}
              >
                <p className="career__text-position career__text-position3">
                  Position: Purchase manager.
                </p>
              </div>
            </div>
            <img
              src={pillBG1}
              alt="pillBG1"
              className="career__pillBG1-company3"
              style={{
                transform: `translateX(${80 - scroll * 2}%) translateY(50%)`,
              }}
            />
            <img
              src={pillBG2}
              alt="pillBG2"
              className="career__pillBG2-company3"
              style={{
                transform: `translateX(${-80 + scroll * 2}%) translateY(50%)`,
              }}
            />
            <img
              src={pillRT}
              alt="pillRT"
              className="career__pillRT-company3"
              style={{
                transform: `translateX(${-350 + scroll * 10}%) translateY(${
                  -400 + scroll * 10
                }%) rotate(${scroll * 0.2}turn)`,
              }}
            />
          </div>

          <div className="career__item">
            <div className="career__item-date-container">
              <p
                className="career__text-date career__text-date4"
                style={{ top: `${-50 + scroll * 1.6}%` }}
              >
                2012 January – 2015 July
              </p>
            </div>
            <div className="career__item-company-container">
              <p
                className="career__text-company career__text-company4"
                style={{ bottom: `${-50 + scroll * 1.6}%` }}
              >
                «Jenty-Spedition» JV.
              </p>
            </div>
            <div className="career__item-position-container">
              <p
                className="career__text-position career__text-position4"
                style={{ top: `${-50 + scroll * 1.6}%` }}
              >
                Position: Oversized cargo transportation manager.
              </p>
            </div>
          </div>

          <div className="career__item">
            <div className="career__item-date-container">
              <p
                className="career__text-date career__text-date5"
                style={{
                  top: `${-50 + scroll * 1.2}%`,
                  left: `${-80 + scroll * 1.6}%`,
                }}
              >
                2015 September – 2017 October
              </p>
            </div>
            <div className="career__item-company-container">
              <p
                className="career__text-company career__text-company5"
                style={{ bottom: `${-85 + scroll * 1.6}%` }}
              >
                «Hellmann East Europe» JLLC.
              </p>
            </div>
            <div className="career__item-position-container">
              <p
                className="career__text-position career__text-position5"
                style={{
                  top: `${-50 + scroll * 1.2}%`,
                  left: `${-80 + scroll * 1.6}%`,
                }}
              >
                Position: Client manager.
              </p>
            </div>
          </div>

          <div className="career__item">
            <div className="career__item-date-container">
              <p
                className="career__text-date career__text-date6"
                style={{
                  bottom: `${-70 + scroll * 1.2}%`,
                  left: `${-110 + scroll * 1.6}%`,
                }}
              >
                October 2017 – present
              </p>
            </div>
            <div className="career__item-company-container">
              <p
                className="career__text-company career__text-company6"
                style={{
                  top: `${-80 + scroll * 1.2}%`,
                }}
              >
                «RWD» LLC.
              </p>
            </div>
            <div className="career__item-position-container">
              <p
                className="career__text-position career__text-position6"
                style={{
                  bottom: `${-70 + scroll * 1.2}%`,
                  left: `${-110 + scroll * 1.6}%`,
                }}
              >
                Position: Project transportation manager.
              </p>
            </div>
          </div>
        </section>
        <section className="career__button-section">
          <HireButton scroll={scroll} />
        </section>
        <section className="career__scroll-section">
          <ProgressScrollBar scroll={scroll} />
        </section>
      </div>
    </div>
  );
}

export default CareerPage;
