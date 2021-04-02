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

  const preheaderClasses = isPreheaderVisible
    ? classNames('preheader__container', 'preheader__container_visible')
    : classNames('header__opacity-container');

  classNames('preheader__container');

  return (
    <div ref={preheaderRef} className={preheaderClasses}>
      <section className="preheader__item preheader__img-container">
        <img
          className="preheader__avatar"
          src="/images/avatar.jpg"
          alt="EK face"
        />
      </section>
      <section className="preheader__item preheader__bio-container">
        <h1 className="preheader__name">Evgenij Kalabukhin</h1>
        <p className="preheader__paragraph">Date of birth: 05.04.1987</p>
        <p className="preheader__paragraph">Age: 33 </p>
        <p className="preheader__paragraph">Marital status: married</p>
        <p className="preheader__paragraph">Minsk, Belarus</p>
      </section>
      <section className="preheader__item preheader__contacts-container">
        <div className="preheader__contact-item preheader__contact-phone">
          <a className="preheader__contact-link" href="#">
            <FontAwesomeIcon
              className="preheader__contact-link_icon"
              icon={faPhoneAlt}
            />
            <p className="preheader__contact-link_text">Phone</p>
          </a>
        </div>
        <div className="preheader__contact-item preheader__contact-mail">
          <a className="preheader__contact-link" href="#">
            <FontAwesomeIcon
              className="preheader__contact-link_icon"
              icon={faEnvelope}
            />
            <p className="preheader__contact-link_text">Mail</p>
          </a>
        </div>
        <div className="preheader__contact-item preheader__contact-skype">
          <a className="preheader__contact-link" href="#">
            <FontAwesomeIcon
              className="preheader__contact-link_icon"
              icon={faSkype}
            />
            <p className="preheader__contact-link_text">Skype</p>
          </a>
        </div>
        <div className="preheader__contact-item preheader__contact-telegram">
          <a className="preheader__contact-link" href="#">
            <FontAwesomeIcon
              className="preheader__contact-link_icon"
              icon={faTelegramPlane}
            />
            <p className="preheader__contact-link_text">Telegram</p>
          </a>
        </div>
        <div className="preheader__contact-item preheader__contact-linkedin">
          <a className="preheader__contact-link" href="#">
            <FontAwesomeIcon
              className="preheader__contact-link_icon"
              icon={faLinkedinIn}
            />
            <p className="preheader__contact-link_text">Linkedin</p>
          </a>
        </div>
      </section>
      <div className="preheader__item preheader__languages-container">
        <button type="button" className="preheader__language-btn">
          EN
        </button>
        <button type="button" className="preheader__language-btn">
          RU
        </button>
      </div>
    </div>
  );
}

export default Preheader;
