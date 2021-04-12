import React from 'react';
import './preheader.css';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Preheader() {
  const scrollPreheaderToBottom = () =>
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });

  return (
    <div className="preheader__container">
      <section className="preheader__content-container">
        <div className="preheader__background preheader__background-1" />
        <div className="preheader__background preheader__background-2" />
        <div className="preheader__background preheader__background-3" />
        <div className="preheader__background preheader__background-4" />
        <div className="preheader__background preheader__background-5" />
        <div className="preheader__background preheader__background-6" />
        <div className="preheader__background preheader__background-7" />
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
            className="preheader__scroll-button"
            type="button"
            onClick={scrollPreheaderToBottom}
          >
            {/* <img src="preheader_down_arrow.png" alt="move down arrow" /> */}
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
