import React from 'react';
import './contactbuttons.css';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedinIn,
  faTelegramPlane,
  faSkype,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ContactButtons() {
  return (
    <div className="contacts__list">
      <div className="contacts__item">
        <a className="contacts__link" href="tel:+37529-28-22-532">
          <FontAwesomeIcon className="contacts__link_icon" icon={faPhoneAlt} />
        </a>
      </div>
      <div className="contacts__item">
        <a className="contacts__link" href="mailto:coocooroozza@gmail.com">
          <FontAwesomeIcon className="contacts__link_icon" icon={faEnvelope} />
        </a>
      </div>
      <div className="contacts__item">
        <a className="contacts__link" href="callto:evgenij.kalabukhin">
          <FontAwesomeIcon className="contacts__link_icon" icon={faSkype} />
        </a>
      </div>
      <div className="contacts__item">
        <a className="contacts__link" href="https://telegram.me/EK_machine">
          <FontAwesomeIcon
            className="contacts__link_icon"
            icon={faTelegramPlane}
          />
        </a>
      </div>
      <div className="contacts__item">
        <a className="contacts__link" href="https://github.com/EK-machine">
          <FontAwesomeIcon className="contacts__link_icon" icon={faGithub} />
        </a>
      </div>
      <div className="contacts__item">
        <a className="contacts__link" href="#">
          <FontAwesomeIcon
            className="contacts__link_icon"
            icon={faLinkedinIn}
          />
        </a>
      </div>
    </div>
  );
}

export default ContactButtons;
