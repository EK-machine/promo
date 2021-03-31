import React, { useRef, useState, useEffect } from 'react';
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
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef(null);
  const intersection = useIntersection(headerRef, {
    root: null,
    rootMargin: '0px 0px -550px 0px',
    threshold: 1,
  });

  const headerClasses = classNames('header__opacity-container', {
    'header__opacity-container_visible': isOpen,
  });
  const showHeader = () => {
    setIsOpen(true);
  };
  const hideHeader = () => {
    setIsOpen(false);
  };

  if (intersection && intersection.intersectionRatio < 1) {
    useEffect(() => {
      hideHeader();
    });
  } else {
    useEffect(() => {
      showHeader();
    });
  }

  return (
    <div ref={headerRef} className="header__container">
      <div className={headerClasses}>
        <div className="header__avatar-name-container">
          <div className="header__avatar-container">
            <img
              className="header__avatar"
              src="/images/avatar.jpg"
              alt="EK face"
            />
          </div>
          <div className="header__name-container">
            <h1 className="header__name">Evgenij Kalabukhin</h1>
          </div>
        </div>
        <div className="header__contacts-container">
          <ul className="header__contact-list">
            <li className="header__contact-item">
              <FontAwesomeIcon
                className="header__contact-link_icon"
                icon={faPhoneAlt}
              />
              <p className="header__contact-link_text">Phone</p>
            </li>
            <li className="header__contact-item">
              <FontAwesomeIcon
                className="header__contact-link_icon"
                icon={faEnvelope}
              />
              <p className="header__contact-link_text">Mail</p>
            </li>
            <li className="header__contact-item">
              <FontAwesomeIcon
                className="header__contact-link_icon"
                icon={faSkype}
              />
              <p className="header__contact-link_text">Skype</p>
            </li>
            <li className="header__contact-item">
              <FontAwesomeIcon
                className="header__contact-link_icon"
                icon={faTelegramPlane}
              />
              <p className="header__contact-link_text">Telegram</p>
            </li>
            <li className="header__contact-item">
              <FontAwesomeIcon
                className="header__contact-link_icon"
                icon={faLinkedinIn}
              />
              <p className="header__contact-link_text">Linkedin</p>
            </li>
          </ul>
        </div>
        <div className="header__lang-container">
          <button type="button" className="header__language-btn">
            EN
          </button>
          <button type="button" className="header__language-btn">
            RU
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
