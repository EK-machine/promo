import React from 'react';
import './careerpage.css';
import ProgressScrollBar from '../components/ProgressScrollBar';
import HireButton from '../components/HireButton';

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
      img1Src: '/images/AG1.png',
      img1Class: 'career__ag1-company1 career__img',
      img1Style: {
        transform: `translateX(${scrolling * 15}%)`,
      },
      img2Src: '/images/AG2.png',
      img2Class: 'career__ag2-company1 career__img',
      img2Style: {
        transform: `translateX(${-scrolling * 9}%) translateY(33%)`,
      },
      img3Src: '/images/AG3.png',
      img3Class: 'career__ag3-company1 career__img',
      img3Style: {
        transform: `translateX(${scrolling * 7}%) translateY(66%)`,
      },
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
      img1Src: '/images/Glass1.png',
      img1Class: 'career__glass1-company2 career__img',
      img1Style: {
        transform: `translateX(${-scrolling * 5}%)`,
      },
      img2Src: '/images/Glass2.png',
      img2Class: 'career__glass2-company2 career__img',
      img2Style: {
        left: `${-50 + scrolling * 3}%`,
      },
      img3Src: '/images/Glass3.png',
      img3Class: 'career__glass3-company2 career__img',
      img3Style: {
        right: `${scrolling}%`,
      },
    },

    {
      dateStyle: { bottom: `${-35 + scrolling * 2}%` },
      dateClass: ' career__text-date career__text-date3',
      dateText: '2010 November – 2011 December ',
      companyStyle: { top: `${-35 + scrolling * 2}%` },
      companyClass: ' career__text-company career__text-company3',
      companyText: '«Belmed Preparaty» RUE.',
      positionStyle: { bottom: `${-35 + scrolling * 2}%` },
      positionClass: ' career__text-position career__text-position3',
      positionText: ' Position: Purchase manager.',
      img1Src: '/images/pillBG1.png',
      img1Class: 'career__pillBG1-company3 career__img',
      img1Style: {
        transform: `translateX(${80 - scrolling * 2}%) translateY(50%)`,
      },
      img2Src: '/images/pillBG2.png',
      img2Class: 'career__pillBG2-company3 career__img',
      img2Style: {
        transform: `translateX(${-80 + scrolling * 2}%) translateY(50%)`,
      },
      img3Src: '/images/pillBG3.png',
      img3Class: 'career__pillBG3-company3 career__img',
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
      img1Src: '/images/OST.png',
      img1Class: 'career__ost1-company4 career__img',
      img1Style: {
        transform: `translateX(${-115 + scrolling * 2}%) translateY(-50%)`,
      },
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
      img1Src: '/images/hellm1.png',
      img1Class: 'career__hellm1-company5 career__img',
      img1Style: {
        transform: `translateX(${-360 + scrolling * 5}%) translateY(${
          170 - scrolling * 4
        }%)`,
      },
      img2Src: '/images/hellm2.png',
      img2Class: 'career__hellm2-company5 career__img',
      img2Style: {
        transform: `translateX(${360 - scrolling * 5}%) translateY(${
          170 - scrolling * 4
        }%)`,
      },
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

      img1Src: '/images/RWD.png',
      img1Class: 'career__rwd-company6 career__img',
      img1Style: {
        transform: `translateX(-50%) scale3d(${scrolling * 0.0095}, ${
          scrolling * 0.0095
        }, ${scrolling * 0.0095})`,
      },
    },
  ];

  return (
    <div className="career__page">
      <section className="career__scroll-section">
        <ProgressScrollBar scrolling={scrolling} />
      </section>
      <section className="career__page-content_conteiner">
        <div className="career__container">
          <section className="career__content-section">
            <h1 className="career__content-section_title">My career</h1>
            <div
              className="career__content-section_background"
              style={{
                transform: `translateY(${scrolling * 0.009}%)`,
                backgroundImage: `url('/images/BGL.png')`,
              }}
            />
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
          </section>
          <section className="career__button-section">
            {scrolling < 99 ? null : <HireButton />}
          </section>
        </div>
      </section>
    </div>
  );
}

export default CareerPage;
