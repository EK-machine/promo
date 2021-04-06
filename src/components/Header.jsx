import React, { useRef } from 'react';
import classNames from 'classnames';
import { useIntersection } from 'react-use';
import './header.css';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedinIn,
  faTelegramPlane,
  faSkype,
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

  const headerLinkClasses = isHeaderVisible
    ? classNames('header__contact-link')
    : classNames('header__contact-link_unvisible');

  const headerLanguageClasses = isHeaderVisible
    ? classNames('header__language-btn')
    : classNames('header__language-btn_unvisible');

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
        <ul className="header__contact-list">
          <li className="header__contact-item">
            <a className={headerLinkClasses} href="#">
              <FontAwesomeIcon
                className="header__contact-link_icon"
                icon={faPhoneAlt}
              />
              <p className="header__contact-link_text">Phone</p>
            </a>
          </li>
          <li className="header__contact-item">
            <a className={headerLinkClasses} href="#">
              <FontAwesomeIcon
                className="header__contact-link_icon"
                icon={faEnvelope}
              />
              <p className="header__contact-link_text">Mail</p>
            </a>
          </li>
          <li className="header__contact-item">
            <a className={headerLinkClasses} href="#">
              <FontAwesomeIcon
                className="header__contact-link_icon"
                icon={faSkype}
              />
              <p className="header__contact-link_text">Skype</p>
            </a>
          </li>
          <li className="header__contact-item">
            <a className={headerLinkClasses} href="#">
              <FontAwesomeIcon
                className="header__contact-link_icon"
                icon={faTelegramPlane}
              />
              <p className="header__contact-link_text">Telegram</p>
            </a>
          </li>
          <li className="header__contact-item">
            <a className={headerLinkClasses} href="#">
              <FontAwesomeIcon
                className="header__contact-link_icon"
                icon={faLinkedinIn}
              />
              <p className="header__contact-link_text">Linkedin</p>
            </a>
          </li>
        </ul>
      </div>
      <div className="header__lang-container">
        <button type="button" className={headerLanguageClasses}>
          EN
        </button>
        <button type="button" className={headerLanguageClasses}>
          RU
        </button>
      </div>
    </div>
  );
}

export default Header;
