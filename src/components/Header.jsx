import React, { useRef } from 'react';
import classNames from 'classnames';
import { useIntersection } from 'react-use';
import './header.css';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedinIn,
  faTelegramPlane,
  faSkype,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header() {
  const headerRef = useRef(null);
  const intersection = useIntersection(headerRef, {
    root: null,
    rootMargin: '0px 0px -400px 0px',
    threshold: 0.7,
  });

  const isHeaderVisible = intersection && intersection.intersectionRatio > 0.7;

  const headerAvatarClasses = isHeaderVisible
    ? classNames('header__avatar')
    : classNames('header__avatar_unvisible');

  const headerNameClasses = isHeaderVisible
    ? classNames('header__name')
    : classNames('header__name_unvisible');

  // const headerLinkClasses = isHeaderVisible
  //   ? classNames('header__contact-link')
  //   : classNames('header__contact-link_unvisible');

  return (
    <div ref={headerRef} className="header__container">
      <div className="header__avatar-name-container">
        <div className="header__avatar-container">
          <img
            className={headerAvatarClasses}
            src="/images/avatar.jpg"
            alt="EK face"
          />
        </div>
        <div className="header__name-container">
          <h1 className={headerNameClasses}>
            Evgenij <br /> Kalabukhin
          </h1>
        </div>
      </div>
      <div className="header__contacts-container">
        <div className="header__contact-list">
          <div className="header__contact-item">
            <a className="header__contact-link" href="tel:+37529-28-22-532">
              <FontAwesomeIcon
                className="header__contact-link_icon"
                icon={faPhoneAlt}
              />
            </a>
          </div>
          <div className="header__contact-item">
            <a
              className="header__contact-link"
              href="mailto:coocooroozza@gmail.com"
            >
              <FontAwesomeIcon
                className="header__contact-link_icon"
                icon={faEnvelope}
              />
            </a>
          </div>
          <div className="header__contact-item">
            <a
              className="header__contact-link"
              href="callto:evgenij.kalabukhin"
            >
              <FontAwesomeIcon
                className="header__contact-link_icon"
                icon={faSkype}
              />
            </a>
          </div>
          <div className="header__contact-item">
            <a
              className="header__contact-link"
              href="https://telegram.me/EK_machine"
            >
              <FontAwesomeIcon
                className="header__contact-link_icon"
                icon={faTelegramPlane}
              />
            </a>
          </div>
          <div className="header__contact-item">
            <a
              className="header__contact-link"
              href="https://github.com/EK-machine"
            >
              <FontAwesomeIcon
                className="header__contact-link_icon"
                icon={faGithub}
              />
            </a>
          </div>
          <div className="header__contact-item">
            <a className="header__contact-link" href="#">
              <FontAwesomeIcon
                className="header__contact-link_icon"
                icon={faLinkedinIn}
              />
            </a>
          </div>
        </div>
      </div>
      {/* <div className="header__lang-container">
        <button type="button" className="header__language-btn">
          EN
        </button>
        <button type="button" className="header__language-btn">
          RU
        </button>
      </div> */}
    </div>
  );
}

export default Header;
