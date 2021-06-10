import React, { useState, useEffect } from 'react';
import './carousel.css';
import {
  faArrowCircleLeft,
  faArrowCircleRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const carouselArr = [
  {
    class: 'carousel__item carousel__education-container',
    title: 'education',
    textLineOne:
      // eslint-disable-next-line max-len
      'Academy of public the aegis of the president of the Republic of Belarus.',
    textLineTwo: 'Expertise: State regulation of foreign trade.',
    textLineThree:
      'Qualifications: Economist-manager (full-time education, budget).',
  },

  {
    class: 'carousel__item carousel__summary-container',
    title: 'summary',
    textLineOne:
      // eslint-disable-next-line max-len
      'More then 9 years of developing and managing complex transport and logistics projects.',
    textLineTwo:
      // eslint-disable-next-line max-len
      'Implementation of project solutions in the field of oversized cargo transportation.',
    textLineThree: '6 years of sales and purchasing experiance.',
    textLineFour:
      // eslint-disable-next-line max-len
      'Interested in frontend engineering, started to study frontend software development.',
  },

  {
    class: 'carousel__item carousel__languages-container',
    title: 'languages',
    textLineOne: 'Belarusian - Native.',
    textLineTwo: 'Russian - Native.',
    textLineThree: 'English - Fluent.',
    textLineFour: 'German - Intermediate',
  },

  {
    class: 'carousel__item carousel__qualities-container',
    title: 'personal qualities',
    textLineOne: 'Responsible.',
    textLineTwo: 'Curiosity and ability to learn quick.',
    textLineThree: 'Communicative.',
    textLineFour: 'Stress stable.',
    textLineFive: 'Organized.',
    textLineSix: 'Flexible.',
    textLineSeven: 'Accurate.',
    textLineEight: 'Critical thinking.',
  },

  {
    class: 'carousel__item carousel__skills-container',
    title: 'skills',
    textLineOne: 'HTML.',
    textLineTwo: 'CSS.',
    textLineThree: 'JavaScript.',
    textLineFour: 'REACT.',
  },
];

function Carousel() {
  const [isCurrent, setIsCurrent] = useState(0);

  useEffect(() => {
    window.addEventListener('keydown', nextSlideOnKey);
    return () => window.removeEventListener('keydown', nextSlideOnKey);
  }, [isCurrent]);

  useEffect(() => {
    window.addEventListener('keydown', previousSlideOnKey);
    return () => window.removeEventListener('keydown', previousSlideOnKey);
  }, [isCurrent]);

  function nextSlide() {
    setIsCurrent(isCurrent === carouselArr.length - 1 ? 0 : isCurrent + 1);
  }

  function previousSlide() {
    setIsCurrent(isCurrent === 0 ? carouselArr.length - 1 : isCurrent - 1);
  }

  const nextSlideOnKey = (e) => {
    if (e.keyCode === RIGHT_KEY_CODE) {
      nextSlide();
    }
  };

  const previousSlideOnKey = (e) => {
    if (e.keyCode === LEFT_KEY_CODE) {
      previousSlide();
    }
  };

  const RIGHT_KEY_CODE = 39;

  const LEFT_KEY_CODE = 37;

  return (
    <div className="carousel__container" onWheel={nextSlide}>
      {carouselArr.map((slide, index) => (
        <div
          className={isCurrent === index ? 'visibleSlide' : 'unvisibleSlide'}
          key={slide.title}
        >
          <div className={slide.class}>
            <div className="carousel__item_content-left">
              <div
                className={
                  isCurrent === index
                    ? 'carousel__title-background'
                    : 'carousel__title-background_unvisible'
                }
              >
                <h3 className="carousel__title">{slide.title}</h3>
              </div>
            </div>
            <div className="carousel__item_content-right">
              <div
                className={
                  isCurrent === index
                    ? 'carousel__text-background'
                    : 'carousel__text-background_unvisible'
                }
              >
                <p className="carousel__text">{slide.textLineOne}</p>
                <p className="carousel__text">{slide.textLineTwo}</p>
                <p className="carousel__text">{slide.textLineThree}</p>
                <p className="carousel__text">{slide.textLineFour}</p>
                <p className="carousel__text">{slide.textLineFive}</p>
                <p className="carousel__text">{slide.textLineSix}</p>
                <p className="carousel__text">{slide.textLineSeven}</p>
                <p className="carousel__text">{slide.textLineEight}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div
        className="carousel__left-arrow"
        onClick={previousSlide}
        onKeyDown={previousSlide}
      >
        <FontAwesomeIcon icon={faArrowCircleLeft} />
      </div>
      <div
        className="carousel__right-arrow"
        onClick={nextSlide}
        onKeyDown={nextSlide}
      >
        <FontAwesomeIcon icon={faArrowCircleRight} />
      </div>
    </div>
  );
}

export default Carousel;
