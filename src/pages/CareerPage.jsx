import React from 'react';
import './careerpage.css';
import ProgressScrollBar from '../components/ProgressScrollBar';
import Hire from '../components/Hire';

function CareerPage({ scrolling }) {
  const careerArr = [
    {
      representTextBackground: `career__item-represent_text-background 
        career__item-represent_text-background1`,
      representText: `I started with doing marketing researches 
        in International Commerce first...`,
      dateContainerClass:
        'career__item-date-container career__item-date-container1',
      dateTextBackground:
        'career__text-date_background career__text-date_background1',
      dateStyle: {
        top: `${scrolling * 6.1}%`,
        backgroundColor: `rgba(0, 0, 0, 0.8)`,
      },
      dateClass: 'career__text-date career__text-date1',
      dateText: '2010 May – 2010 June',
      companyContainerClass:
        'career__item-company-container career__item-company-container1',
      companyTextBackground:
        'career__text-company_background career__text-company_background1',
      companyStyle: {
        top: `${scrolling * 5.8}%`,
        backgroundColor: `rgba(0, 0, 0, 0.8)`,
      },
      companyClass: 'career__text-company career__text-company1',
      companyText: '«Convex International» LLC.',
      positionContainerClass:
        'career__item-position-container career__item-position-container1',
      positionTextBackground:
        'career__text-position_background career__text-position_background1',
      positionStyle: {
        top: `${scrolling * 5.5}%`,
        backgroundColor: `rgba(0, 0, 0, 0.8)`,
      },
      positionClass: 'career__text-position career__text-position1',
      positionText: 'Position: Marketing manager.',
      img1Src: '/images/AG1.png',
      img1Class: 'career__ag1-company1 career__img',
      img1Style: {
        transform: `translateX(${scrolling * 17}%)`,
      },
      img2Src: '/images/AG2.png',
      img2Class: 'career__ag2-company1 career__img',
      img2Style: {
        transform: `translateX(${-scrolling * 11}%) translateY(33%)`,
      },
      img3Src: '/images/AG3.png',
      img3Class: 'career__ag3-company1 career__img',
      img3Style: {
        transform: `translateX(${scrolling * 9}%) translateY(66%)`,
      },
    },

    {
      representTextBackground: `career__item-represent_text-background 
        career__item-represent_text-background2`,
      dateContainerClass:
        'career__item-date-container career__item-date-container2',
      dateTextBackground:
        'career__text-date_background career__text-date_background2',
      dateStyle: {
        top: `${-12 + scrolling * 3.1}%`,
        backgroundColor: `rgba(0, 0, 0, 0.8)`,
      },
      dateClass: ' career__text-date career__text-date2',
      dateText: '2010 August – 2010 November ',
      companyContainerClass:
        'career__item-company-container career__item-company-container2',
      companyTextBackground:
        'career__text-company_background career__text-company_background2',
      companyStyle: {
        top: `${-12 + scrolling * 3.3}%`,
        backgroundColor: `rgba(0, 0, 0, 0.8)`,
      },
      companyClass: ' career__text-company career__text-company2',
      companyText: '«Glassworks Neman» OJSC.',
      positionContainerClass:
        'career__item-position-container career__item-position-container2',
      positionTextBackground:
        'career__text-position_background career__text-position_background2',
      positionStyle: {
        top: `${-12 + scrolling * 3.7}%`,
        backgroundColor: `rgba(0, 0, 0, 0.8)`,
      },
      positionClass: ' career__text-position career__text-position2',
      positionText: ' Position: Marketing manager.',
      img1Src: '/images/Glass1.png',
      img1Class: 'career__glass1-company2 career__img',
      img1Style: {
        transform: `translateX(${-scrolling * 6}%)`,
      },
      img2Src: '/images/Glass2.png',
      img2Class: 'career__glass2-company2 career__img',
      img2Style: {
        left: `${-50 + scrolling * 4}%`,
      },
      img3Src: '/images/Glass3.png',
      img3Class: 'career__glass3-company2 career__img',
      img3Style: {
        right: `${scrolling * 1.8}%`,
      },
    },

    {
      representTextBackground: `career__item-represent_text-background 
        career__item-represent_text-background3`,
      representText: `... after then I decided to improve my 
      knowledge and set upon international purchasing sphere ...`,
      dateContainerClass:
        'career__item-date-container career__item-date-container3',
      dateTextBackground:
        'career__text-date_background career__text-date_background3',
      dateStyle: {
        bottom: `${-35 + scrolling * 3}%`,
        backgroundColor: `rgba(0, 0, 0, 0.8)`,
      },
      dateClass: ' career__text-date career__text-date3',
      dateText: '2010 November – 2011 December ',
      companyContainerClass:
        'career__item-company-container career__item-company-container3',
      companyTextBackground:
        'career__text-company_background career__text-company_background3',
      companyStyle: {
        top: `${-35 + scrolling * 2.4}%`,
        backgroundColor: `rgba(0, 0, 0, 0.8)`,
      },
      companyClass: ' career__text-company career__text-company3',
      companyText: '«Belmed Preparaty» RUE.',
      positionContainerClass:
        'career__item-position-container career__item-position-container3',
      positionTextBackground:
        'career__text-position_background career__text-position_background3',
      positionStyle: {
        bottom: `${-35 + scrolling * 3}%`,
        backgroundColor: `rgba(0, 0, 0, 0.8)`,
      },
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
        transform: `translateX(${-150 + scrolling * 10}%) translateY(${
          -230 + scrolling * 10
        }%) rotate(${scrolling * 0.2}turn)`,
      },
    },

    {
      representTextBackground: `career__item-represent_text-background 
        career__item-represent_text-background4`,
      representText: `... but it was still not enough, 
      so my career turned into logistics for 9 years!`,
      dateContainerClass:
        'career__item-date-container career__item-date-container4',
      dateTextBackground:
        'career__text-date_background career__text-date_background4',
      dateStyle: {
        top: `${-50 + scrolling * 2.2}%`,
        backgroundColor: `rgba(0, 0, 0, 0.8)`,
      },
      dateClass: ' career__text-date career__text-date4',
      dateText: '2012 January – 2015 July ',
      companyContainerClass:
        'career__item-company-container career__item-company-container4',
      companyTextBackground:
        'career__text-company_background career__text-company_background4',
      companyStyle: {
        bottom: `${-50 + scrolling * 2}%`,
        backgroundColor: `rgba(0, 0, 0, 0.8)`,
      },
      companyClass: 'career__text-company career__text-company4',
      companyText: '«Jenty-Spedition» JV.',
      positionContainerClass:
        'career__item-position-container career__item-position-container4',
      positionTextBackground:
        'career__text-position_background career__text-position_background4',
      positionStyle: {
        top: `${-50 + scrolling * 2.2}%`,
        backgroundColor: `rgba(0, 0, 0, 0.8)`,
      },
      positionClass: 'career__text-position career__text-position4',
      positionText: ' Position: Oversized cargo transportation manager.',
      img1Src: '/images/OST.png',
      img1Class: 'career__ost1-company4 career__img',
      img1Style: {
        transform: `translateX(${-115 + scrolling * 2.7}%) translateY(-50%)`,
      },
    },

    {
      representTextBackground: `career__item-represent_text-background 
        career__item-represent_text-background5`,
      dateContainerClass:
        'career__item-date-container career__item-date-container5',
      dateTextBackground:
        'career__text-date_background career__text-date_background5',
      dateStyle: {
        top: `${-50 + scrolling * 1.6}%`,
        left: `${-80 + scrolling * 2.2}%`,
        backgroundColor: `rgba(0, 0, 0, 0.8)`,
      },
      dateClass: 'career__text-date career__text-date5',
      dateText: '2015 September – 2017 October ',
      companyContainerClass:
        'career__item-company-container career__item-company-container5',
      companyTextBackground:
        'career__text-company_background career__text-company_background5',
      companyStyle: {
        bottom: `${-85 + scrolling * 2.3}%`,
        backgroundColor: `rgba(0, 0, 0, 0.8)`,
      },
      companyClass: 'career__text-company career__text-company5',
      companyText: '«Hellmann East Europe» JLLC.',
      positionContainerClass:
        'career__item-position-container career__item-position-container5',
      positionTextBackground:
        'career__text-position_background career__text-position_background5',
      positionStyle: {
        top: `${-50 + scrolling * 1.6}%`,
        left: `${-80 + scrolling * 2.2}%`,
        backgroundColor: `rgba(0, 0, 0, 0.8)`,
      },
      positionClass: 'career__text-position career__text-position5',
      positionText: ' Position: Client manager.',
      img1Src: '/images/hellm1.png',
      img1Class: 'career__hellm1-company5 career__img',
      img1Style: {
        transform: `translateX(${-360 + scrolling * 6.8}%) translateY(${
          170 - scrolling * 5.9
        }%)`,
      },
      img2Src: '/images/hellm2.png',
      img2Class: 'career__hellm2-company5 career__img',
      img2Style: {
        transform: `translateX(${360 - scrolling * 6.8}%) translateY(${
          170 - scrolling * 6
        }%)`,
      },
    },

    {
      representTextBackground: `career__item-represent_text-background 
        career__item-represent_text-background6`,
      dateContainerClass:
        'career__item-date-container career__item-date-container6',
      dateTextBackground:
        'career__text-date_background career__text-date_background6',
      dateStyle: {
        bottom: `${-70 + scrolling * 1.45}%`,
        left: `${-110 + scrolling * 2.2}%`,
        backgroundColor: `rgba(0, 0, 0, 0.8)`,
      },
      dateClass: ' career__text-date career__text-date6',
      dateText: 'October 2017 – present',
      companyContainerClass:
        'career__item-company-container career__item-company-container6',
      companyTextBackground:
        'career__text-company_background career__text-company_background6',
      companyStyle: {
        top: `${-110 + scrolling * 2.2}%`,
        backgroundColor: `rgba(0, 0, 0, 0.8)`,
      },
      companyClass: 'career__text-company career__text-company6',
      companyText: '«RWD» LLC.',
      positionContainerClass:
        'career__item-position-container career__item-position-container6',
      positionTextBackground:
        'career__text-position_background career__text-position_background6',
      positionStyle: {
        bottom: `${-70 + scrolling * 1.45}%`,
        left: `${-110 + scrolling * 2.2}%`,
        backgroundColor: `rgba(0, 0, 0, 0.8)`,
      },
      positionClass: 'career__text-position career__text-position6',
      positionText: 'Position: Project transportation manager.',
      img1Src: '/images/RWD.png',
      img1Class: 'career__rwd-company6 career__img',
      img1Style: {
        transform: `translateX(-50%) scale3d(${scrolling * 0.019}, ${
          scrolling * 0.019
        }, ${scrolling * 0.019})`,
      },
    },

    {
      representTextBackground: `career__item-represent_text-background 
        career__item-represent_text-background7`,
      representText: `But all this was just a delude oneself...`,
      dateContainerClass:
        'career__item-date-container career__item-date-container7',
      dateTextBackground:
        'career__text-date_background career__text-date_background7',
      dateStyle: { backgroundColor: `rgba(0, 0, 0, 0.8)` },
      dateClass: 'career__text-date career__text-date7',
      dateText: '...as I knew what really gave me thrill!',
      companyStyle: { backgroundColor: `rgba(0, 0, 0, 0.8)` },
      companyContainerClass:
        'career__item-company-container career__item-company-container7',
      companyTextBackground:
        'career__text-company_background career__text-company_background7',
      companyClass: 'career__text-company career__text-company7',
      companyText: 'It was WebDev! So I decided to start...',
      positionContainerClass:
        'career__item-position-container career__item-position-container7',
      positionTextBackground:
        'career__text-position_background career__text-position_background7',
      positionStyle: { backgroundColor: `rgba(0, 0, 0, 0.8)` },
      positionClass: 'career__text-position career__text-position7',
      positionText: '...learning HTML, CSS, JS and React.',
      img1Src: '/images/code1.png',
      img1Class: 'career__code1-company7 career__img',
      img2Src: '/images/code2.png',
      img2Class: 'career__code2-company7 career__img',
      img3Src: '/images/code3.png',
      img3Class: 'career__code3-company7 career__img',
      img4Src: '/images/code4.png',
      img4Class: 'career__code4-company7 career__img',
    },

    {
      representTextBackground: `career__item-represent_text-background 
        career__item-represent_text-background8`,
      representText: `So here I am, ready to start!`,
    },
  ];

  return (
    <div className="career__page">
      <section className="career__scroll-section">
        <ProgressScrollBar scrolling={scrolling} />
      </section>
      <section className="career__page-content_container">
        <div className="career__container">
          <section className="career__content-section">
            <h1 className="career__content-section_title">My career</h1>
            <div
              className="career__content-section_background"
              style={{
                transform: `translateY(${scrolling * 0.3}%)`,
                backgroundImage: `url('/images/BGL.png')`,
              }}
            />
            {careerArr.map(
              ({
                representTextBackground,
                representText,
                dateContainerClass,
                dateTextBackground,
                dateStyle,
                dateClass,
                dateText,
                companyContainerClass,
                companyTextBackground,
                companyStyle,
                companyClass,
                companyText,
                positionContainerClass,
                positionTextBackground,
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
                img4Src,
                img4Class,
                img4Style,
              }) => (
                <div className="career__item">
                  <div className="career__item-represent">
                    <div className={representTextBackground}>
                      <p className="career__item-represent_text">
                        {representText}
                      </p>
                    </div>
                  </div>
                  <div className="career__item-content">
                    <div className={dateContainerClass}>
                      <div className={dateTextBackground} style={dateStyle}>
                        <p className={dateClass}>{dateText}</p>
                      </div>
                    </div>
                    <div className={companyContainerClass}>
                      <div
                        className={companyTextBackground}
                        style={companyStyle}
                      >
                        <p className={companyClass}>{companyText}</p>
                      </div>
                    </div>
                    <div className={positionContainerClass}>
                      <div
                        className={positionTextBackground}
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
                    <img
                      src={img4Src}
                      alt={img4Src}
                      className={img4Class}
                      style={img4Style}
                    />
                  </div>
                </div>
              ),
            )}
          </section>
          <section
            className={
              scrolling < 98
                ? 'career__hire-section_unvisible'
                : 'career__hire-section_visible'
            }
          >
            <Hire />
          </section>
        </div>
      </section>
    </div>
  );
}

export default CareerPage;
