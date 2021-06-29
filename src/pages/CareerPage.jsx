import React from 'react';
import './careerpage.css';
import ProgressScrollBar from '../components/ProgressScrollBar';
import HireButton from '../components/HireButton';
import pillBG1 from './pillBG1.png';
import pillBG2 from './pillBG2.png';
import pillRT from './pillRT.png';

function CareerPage({ scrolling }) {
  const careerArr = [
    {
      dateStyle: { top: `${scrolling * 4.7}%` },
      dateClass: 'career__text-date career__text-date1',
      dateText: '2010 May – 2010 June',
      companyStyle: { top: `${scrolling * 4.5}%` },
      companyClass: 'career__text-company career__text-company1',
      companyText: '«Convex International» LLC.',
      positionStyle: { top: `${scrolling * 4.3}%` },
      positionClass: 'career__text-position career__text-position1',
      positionText: 'Position: Marketing manager.',
    },

    {
      dateStyle: { top: `${-12 + scrolling * 2.1}%` },
      dateClass: ' career__text-date career__text-date2',
      dateText: '2010 August – 2010 November ',
      companyStyle: { top: `${-12 + scrolling * 2.3}%` },
      companyClass: ' career__text-company career__text-company2',
      companyText: '«Glassworks Neman» OJSC.',
      positionStyle: { top: `${-12 + scrolling * 2.5}%` },
      positionClass: ' career__text-position career__text-position2',
      positionText: ' Position: Marketing manager.',
    },

    {
      dateStyle: { bottom: `${-35 + scrolling * 2}%` },
      dateClass: ' career__text-date career__text-date3',
      dateText: '2010 November – 2011 December ',
      companyStyle: { top: `${-35 + scrolling * 2}%` },
      companyClass: ' career__text-company career__text-company3',
      companyText: '«Belmedpreparaty» RUE.',
      positionStyle: { bottom: `${-35 + scrolling * 2}%` },
      positionClass: ' career__text-position career__text-position3',
      positionText: ' Position: Purchase manager.',
      img1Src: pillBG1,
      img1Class: 'career__pillBG1-company3',
      img1Style: {
        transform: `translateX(${80 - scrolling * 2}%) translateY(50%)`,
      },

      img2Src: pillBG2,
      img2Class: 'career__pillBG2-company3',
      img2Style: {
        transform: `translateX(${-80 + scrolling * 2}%) translateY(50%)`,
      },

      img3Src: pillRT,
      img3Class: 'career__pillRT-company3',
      img3Style: {
        transform: `translateX(${-350 + scrolling * 10}%) translateY(${
          -400 + scrolling * 10
        }%) rotate(${scrolling * 0.2}turn)`,
      },
    },

    {
      dateStyle: { top: `${-50 + scrolling * 1.6}%` },
      dateClass: ' career__text-date career__text-date4',
      dateText: '2012 January – 2015 July ',
      companyStyle: { bottom: `${-50 + scrolling * 1.6}%` },
      companyClass: 'career__text-company career__text-company4',
      companyText: '«Jenty-Spedition» JV.',
      positionStyle: { top: `${-50 + scrolling * 1.6}%` },
      positionClass: 'career__text-position career__text-position4',
      positionText: ' Position: Oversized cargo transportation manager.',
    },

    {
      dateStyle: {
        top: `${-50 + scrolling * 1.2}%`,
        left: `${-80 + scrolling * 1.6}%`,
      },
      dateClass: 'career__text-date career__text-date5',
      dateText: '2015 September – 2017 October ',
      companyStyle: { bottom: `${-85 + scrolling * 1.6}%` },
      companyClass: 'career__text-company career__text-company5',
      companyText: '«Hellmann East Europe» JLLC.',
      positionStyle: {
        top: `${-50 + scrolling * 1.2}%`,
        left: `${-80 + scrolling * 1.6}%`,
      },
      positionClass: 'career__text-position career__text-position5',
      positionText: ' Position: Client manager.',
    },

    {
      dateStyle: {
        bottom: `${-70 + scrolling * 1.2}%`,
        left: `${-110 + scrolling * 1.6}%`,
      },
      dateClass: ' career__text-date career__text-date6',
      dateText: 'October 2017 – present',
      companyStyle: { top: `${-80 + scrolling * 1.2}%` },
      companyClass: 'career__text-company career__text-company6',
      companyText: '«RWD» LLC.',
      positionStyle: {
        bottom: `${-70 + scrolling * 1.2}%`,
        left: `${-110 + scrolling * 1.6}%`,
      },
      positionClass: 'career__text-position career__text-position6',
      positionText: 'Position: Project transportation manager.',
    },
  ];

  return (
    <div className="career__page">
      <div className="career__container">
        <h1 className="career__title">My career</h1>
        <section className="career__content-section">
          {careerArr.map(
            ({
              dateStyle,
              dateClass,
              dateText,
              companyStyle,
              companyClass,
              companyText,
              positionStyle,
              positionClass,
              positionText,
              img1Src,
              img1Class,
              img1Style,
              img2Src,
              img2Class,
              img2Style,
              img3Src,
              img3Class,
              img3Style,
            }) => (
              <div className="career__item">
                <div className="career__item-date-container">
                  <div
                    className="career__text-date_background"
                    style={dateStyle}
                  >
                    <p className={dateClass}>{dateText}</p>
                  </div>
                </div>
                <div className="career__item-company-container">
                  <div
                    className="career__text-company_background"
                    style={companyStyle}
                  >
                    <p className={companyClass}>{companyText}</p>
                  </div>
                </div>
                <div className="career__item-position-container">
                  <div
                    className="career__text-position_background"
                    style={positionStyle}
                  >
                    <p className={positionClass}>{positionText}</p>
                  </div>
                </div>
                <img
                  src={img1Src}
                  alt={img1Src}
                  className={img1Class}
                  style={img1Style}
                />
                <img
                  src={img2Src}
                  alt={img2Src}
                  className={img2Class}
                  style={img2Style}
                />
                <img
                  src={img3Src}
                  alt={img3Src}
                  className={img3Class}
                  style={img3Style}
                />
              </div>
            ),
          )}

          {/* <div className="career__item">
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
          </div> */}
        </section>
        <section className="career__button-section">
          <HireButton scrolling={scrolling} />
        </section>
        <section className="career__scroll-section">
          <ProgressScrollBar scrolling={scrolling} />
        </section>
      </div>
    </div>
  );
}

export default CareerPage;
