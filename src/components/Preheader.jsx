import React, { useRef } from 'react';
import classNames from 'classnames';
import { useIntersection } from 'react-use';
import './preheader.css';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedinIn,
  faTelegramPlane,
  faSkype,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Preheader() {
  const preheaderRef = useRef(null);
  const intersection = useIntersection(preheaderRef, {
    root: null,
    rootMargin: '0px 0px -300px 0px',
    threshold: 0.35,
  });

  const isPreheaderVisible =
    intersection && intersection.intersectionRatio > 0.35;

  // const preheaderOpacityClasses = isPreheaderVisible
  //   ? classNames(
  //       'preheader__opacity-container',
  //       'preheader__opacity-container_visible',
  //     )
  //   : classNames('preheader__opacity-container');

  const preheaderImgClasses = isPreheaderVisible
    ? classNames('preheader__img')
    : classNames('preheader__img-down');

  return (
    <div ref={preheaderRef} className="preheader__container">
      <div className="preheader__opacity-container_visible">
        <section className="preheader__img-container">
          <img
            className={preheaderImgClasses}
            src="/images/avatar.jpg"
            alt="EK-face"
          />
        </section>
        <section className="preheader__contacts-container">
          <div className="preheader__bio-container">
            <h1 className="preheader__bio-name">
              Evgenij
              <br />
              Kalabukhin
            </h1>
            <p className="preheader__bio-paragraph">
              Minsk
              <br />
              Belarus
            </p>
          </div>
          <div className="preheader__contacts-container_buttons">
            <div className="preheader__contact-item">
              <a className="preheader__contact-link" href="#">
                <FontAwesomeIcon
                  className="preheader__contact-link_icon"
                  icon={faPhoneAlt}
                />
                <p className="preheader__contact-link_text">Phone</p>
              </a>
            </div>
            <div className="preheader__contact-item" />
            <div className="preheader__contact-item" />
            <div className="preheader__contact-item" />
            <div className="preheader__contact-item">
              <a className="preheader__contact-link" href="#">
                <FontAwesomeIcon
                  className="preheader__contact-link_icon"
                  icon={faEnvelope}
                />
                <p className="preheader__contact-link_text">Mail</p>
              </a>
            </div>
            <div className="preheader__contact-item" />
            <div className="preheader__contact-item" />
            <div className="preheader__contact-item" />
            <div className="preheader__contact-item">
              <a className="preheader__contact-link" href="#">
                <FontAwesomeIcon
                  className="preheader__contact-link_icon"
                  icon={faSkype}
                />
                <p className="preheader__contact-link_text">Skype</p>
              </a>
            </div>
            <div className="preheader__contact-item" />
            <div className="preheader__contact-item">
              <a className="preheader__contact-link" href="#">
                <FontAwesomeIcon
                  className="preheader__contact-link_icon"
                  icon={faTelegramPlane}
                />
                <p className="preheader__contact-link_text">Telegram</p>
              </a>
            </div>
            <div className="preheader__contact-item" />
            <div className="preheader__contact-item">
              <a className="preheader__contact-link" href="#">
                <FontAwesomeIcon
                  className="preheader__contact-link_icon"
                  icon={faLinkedinIn}
                />
                <p className="preheader__contact-link_text">Linkedin</p>
              </a>
            </div>
            <div className="preheader__contact-item" />
            <div className="preheader__contact-item" />
          </div>
          <div className="preheader__contacts-container_languages">
            <button type="button" className="preheader__language-btn">
              EN
            </button>
            <button type="button" className="preheader__language-btn">
              RU
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Preheader;
