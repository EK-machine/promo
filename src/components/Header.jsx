import React from 'react';
import { Link } from 'react-router-dom';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './header.css';
import ContactButtons from './Buttons';

function Header() {
  return (
    <div className="header__container">
      <div className="header__avatar-name-container">
        <div className="header__avatar-container">
          <Link exact to="/" className="header__avatar-link">
            <div className="header__avatar-img_container">
              <img
                className="header__avatar"
                src="/images/avatar.jpg"
                alt="EK face"
              />
            </div>
            <FontAwesomeIcon
              className="header__avatar-link_icon"
              icon={faChevronUp}
            />
          </Link>
        </div>
        <div className="header__name-container">
          <h1 className="header__name">
            Evgenij <br /> Kalabukhin
          </h1>
        </div>
      </div>
      <div className="header__contacts-container">
        <ContactButtons />
      </div>
    </div>
  );
}

export default Header;
