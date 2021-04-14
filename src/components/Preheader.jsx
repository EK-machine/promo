import React, { useRef } from 'react';
import { useIntersection } from 'react-use';
import './preheader.css';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const preheaderBackgroundParts = [
  {
    id: 1,
    classNo: 'preheader__background preheader__background-1',
  },
  {
    id: 2,
    classNo: 'preheader__background preheader__background-2',
  },
  {
    id: 3,
    classNo: 'preheader__background preheader__background-3',
  },
  {
    id: 4,
    classNo: 'preheader__background preheader__background-4',
  },
  {
    id: 5,
    classNo: 'preheader__background preheader__background-5',
  },
  {
    id: 6,
    classNo: 'preheader__background preheader__background-6',
  },
  {
    id: 7,
    classNo: 'preheader__background preheader__background-7',
  },
];

function Preheader() {
  const preheaderRef = useRef(null);
  const intersection = useIntersection(preheaderRef, {
    root: null,
    rootMargin: '0px 0px -260px 0px',
    threshold: 0.1,
  });

  const isPreheaderVisible =
    intersection && intersection.intersectionRatio > 0.1;

  const scrollPreheaderToBottom = () =>
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });

  if (isPreheaderVisible) {
    scrollPreheaderToBottom();
  }

  return (
    <div className="preheader__container">
      <section className="preheader__content-container">
        {preheaderBackgroundParts.map(({ id, classNo }) => (
          <div key={id} className={classNo} />
        ))}
        <div className="preheader__bio-container">
          <div className="preheader__bio-centering">
            <h1 className="preheader__bio-name preheader__bio-name_unvisible">
              Evgenij <br />
              Kalabukhin
            </h1>
            <p className="preheader__bio-paragraph">
              Junior Front-end Developer
            </p>
          </div>
        </div>
        <div className="preheader__button-container">
          <button
            ref={preheaderRef}
            className="preheader__scroll-button"
            type="button"
            onClick={scrollPreheaderToBottom}
          >
            <FontAwesomeIcon
              className="preheader__scroll-button_icon"
              icon={faChevronDown}
            />
          </button>
        </div>
      </section>
    </div>
  );
}

export default Preheader;
