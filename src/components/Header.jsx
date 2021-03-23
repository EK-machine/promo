import React from 'react';
import './header.css';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedinIn,
  faTelegramPlane,
  faSkype,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header() {
  return (
    <div className="header__container">
      <section className="header__item header__img-container">
        <img
          className="header__avatar"
          src="/images/avatar.jpg"
          alt="EK face"
        />
      </section>
      <section className="header__item header__bio-container">
        <h1 className="header__name">Evgenij Kalabukhin</h1>
        <p className="header__paragraph">Date of birth: 05.04.1987</p>
        <p className="header__paragraph">Age: 33 </p>
        <p className="header__paragraph">Marital status: married</p>
        <p className="header__paragraph">Minsk, Belarus</p>
      </section>
      <section className="header__item header__contacts-container">
        <div className="header__contact-item header__contact-phone">
          <a className="header__contact-link" href="#">
            <FontAwesomeIcon
              className="header__contact-link_icon"
              icon={faPhoneAlt}
            />
            <p className="header__contact-link_text">Phone</p>
          </a>
        </div>
        <div className="header__contact-item header__contact-mail">
          <a className="header__contact-link" href="#">
            <FontAwesomeIcon
              className="header__contact-link_icon"
              icon={faEnvelope}
            />
            <p className="header__contact-link_text">Mail</p>
          </a>
        </div>
        <div className="header__contact-item header__contact-skype">
          <a className="header__contact-link" href="#">
            <FontAwesomeIcon
              className="header__contact-link_icon"
              icon={faSkype}
            />
            <p className="header__contact-link_text">Skype</p>
          </a>
        </div>
        <div className="header__contact-item header__contact-telegram">
          <a className="header__contact-link" href="#">
            <FontAwesomeIcon
              className="header__contact-link_icon"
              icon={faTelegramPlane}
            />
            <p className="header__contact-link_text">Telegram</p>
          </a>
        </div>
        <div className="header__contact-item header__contact-linkedin">
          <a className="header__contact-link" href="#">
            <FontAwesomeIcon
              className="header__contact-link_icon"
              icon={faLinkedinIn}
            />
            <p className="header__contact-link_text">Linkedin</p>
          </a>
        </div>
      </section>
      <section className="header__item header__languages-container">
        <button type="button" className="header__language-btn">
          EN
        </button>
        <button type="button" className="header__language-btn">
          RU
        </button>
      </section>
    </div>
  );
}

export default Header;
