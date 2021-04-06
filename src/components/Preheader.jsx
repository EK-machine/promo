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

  const preheaderImgClasses = isPreheaderVisible
    ? classNames('preheader__img')
    : classNames('preheader__img_unvisible');

  const preheaderNameClasses = isPreheaderVisible
    ? classNames('preheader__bio-name')
    : classNames('preheader__bio-name_unvisible');

  const preheaderLinkClasses = isPreheaderVisible
    ? classNames('preheader__contact-link')
    : classNames('preheader__contact-link_unvisible');

  const preheaderLanguageClasses = isPreheaderVisible
    ? classNames('preheader__language-btn')
    : classNames('preheader__language-btn_unvisible');

  return (
    <div ref={preheaderRef} className="preheader__container">
      <section className="preheader__img-container">
        <img
          className={preheaderImgClasses}
          src="/images/avatar.jpg"
          alt="EK-face"
        />
      </section>
      <section className="preheader__contacts-container">
        <div className="preheader__bio-container_centering">
          <div className="preheader__bio-container">
            <h1 className={preheaderNameClasses}>
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
        </div>
        <div className="preheader__contacts-container_buttons">
          <div className="preheader__contact-item">
            <a className={preheaderLinkClasses} href="tel:+37529-28-22-532">
              <FontAwesomeIcon
                className="preheader__contact-link_icon"
                icon={faPhoneAlt}
              />
              <p className="preheader__contact-link_text">Call now</p>
            </a>
          </div>
          <div className="preheader__contact-item" />
          <div className="preheader__contact-item" />
          <div className="preheader__contact-item" />
          <div className="preheader__contact-item">
            <a
              className={preheaderLinkClasses}
              href="mailto:coocooroozza@gmail.com"
            >
              <FontAwesomeIcon
                className="preheader__contact-link_icon"
                icon={faEnvelope}
              />
              <p className="preheader__contact-link_text">E-mail</p>
            </a>
          </div>
          <div className="preheader__contact-item" />
          <div className="preheader__contact-item" />
          <div className="preheader__contact-item" />
          <div className="preheader__contact-item">
            <a
              className={preheaderLinkClasses}
              href="callto:evgenij.kalabukhin"
            >
              <FontAwesomeIcon
                className="preheader__contact-link_icon"
                icon={faSkype}
              />
              <p className="preheader__contact-link_text">Skype</p>
            </a>
          </div>
          <div className="preheader__contact-item" />
          <div className="preheader__contact-item">
            <a
              className={preheaderLinkClasses}
              href="https://telegram.me/EK_machine"
            >
              <FontAwesomeIcon
                className="preheader__contact-link_icon"
                icon={faTelegramPlane}
              />
              <p className="preheader__contact-link_text">Telegram</p>
            </a>
          </div>
          <div className="preheader__contact-item" />
          <div className="preheader__contact-item">
            <a className={preheaderLinkClasses} href="#">
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
          <button type="button" className={preheaderLanguageClasses}>
            EN
          </button>
          <button type="button" className={preheaderLanguageClasses}>
            RU
          </button>
        </div>
      </section>
    </div>
  );
}

export default Preheader;
