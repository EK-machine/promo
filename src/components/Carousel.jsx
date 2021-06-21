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
    text: [
      `Academy of Public Administration under the Aegis of the 
    President of the Republic of Belarus.`,
      'Expertise: State regulation of foreign trade.',
      'Qualifications: Economist-manager (full-time education, budget).',
    ],
  },

  {
    class: 'carousel__item carousel__summary-container',
    title: 'summary',
    text: [
      `More than 9 years of developing and managing logistics projects.`,
      `Implementation of project solutions to 
    oversized cargo transportations.`,
      '6 years of sales and purchasing experience.',
      `Interested in frontend engineering, started to study 
    frontend software development.`,
    ],
  },
  {
    class: 'carousel__item carousel__languages-container',
    title: 'languages',
    text: [
      'Belarusian - Native.',
      'Russian - Native.',
      'English - Fluent.',
      'German - Intermediate',
    ],
  },
  {
    class: 'carousel__item carousel__qualities-container',
    title: 'personal qualities',
    text: [
      'Responsible.',
      'Curious and quick-learning.',
      'Communicative.',
      'Stress stable.',
      'Organized.',
      'Flexible.',
      'Accurate.',
      'Critical thinking.',
    ],
  },
  {
    class: 'carousel__item carousel__skills-container',
    title: 'skills',
    text: ['HTML.', 'CSS.', 'JavaScript.', 'REACT.'],
  },
];

const carouselDotsArr = [1, 2, 3, 4, 5];

const RIGHT_KEY_CODE = 39;

const LEFT_KEY_CODE = 37;

const SECONDS_TO_NEXT_SLIDE = 5;

function Carousel() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const sliderInterval = setInterval(
      () => nextSlide(),
      SECONDS_TO_NEXT_SLIDE * 1000,
    );
    return () => clearInterval(sliderInterval);
  }, [currentSlideIndex]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeySliding);
    return () => window.removeEventListener('keydown', handleKeySliding);
  }, []);

  const nextSlide = () => {
    setCurrentSlideIndex((previousSlideIndex) => {
      if (previousSlideIndex === carouselArr.length - 1) {
        return 0;
      }
      return previousSlideIndex + 1;
    });
  };

  const previousSlide = () => {
    setCurrentSlideIndex((previousSlideIndex) => {
      if (previousSlideIndex === 0) {
        return carouselArr.length - 1;
      }
      return previousSlideIndex - 1;
    });
  };

  const handleKeySliding = (e) => {
    if (e.keyCode === RIGHT_KEY_CODE) {
      nextSlide();
    } else if (e.keyCode === LEFT_KEY_CODE) {
      previousSlide();
    }
  };

  const onDotClick = (dotIndex) => {
    setCurrentSlideIndex(dotIndex);
  };

  return (
    <div className="carousel__container">
      {carouselArr.map((slide, index) => (
        <div
          className={
            currentSlideIndex === index ? 'visibleSlide' : 'unvisibleSlide'
          }
          key={slide.title}
        >
          <div className={slide.class}>
            <div className="carousel__item_content-left">
              <div
                className={
                  currentSlideIndex === index
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
                  currentSlideIndex === index
                    ? 'carousel__text-background'
                    : 'carousel__text-background_unvisible'
                }
              >
                {slide.text.map((textString, ind) => (
                  <p className="carousel__text" key={textString[ind]}>
                    {textString}
                  </p>
                ))}
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
      <div className="carousel__dots-container">
        {carouselDotsArr.map((dotData, dotIndex) => (
          <div
            className={
              currentSlideIndex === dotIndex
                ? 'carousel__dot-active'
                : 'carousel__dot'
            }
            key={dotData}
            onKeyDown={() => onDotClick(dotIndex)}
            onClick={() => onDotClick(dotIndex)}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
