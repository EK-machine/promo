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

const contactButtonsArr = [
  { href: 'tel:+37529-28-22-532', icon: faPhoneAlt },
  { href: 'mailto:coocooroozza@gmail.com', icon: faEnvelope },
  { href: 'callto:evgenij.kalabukhin', icon: faSkype },
  { href: 'https://telegram.me/EK_machine', icon: faTelegramPlane },
  { href: 'https://github.com/EK-machine', icon: faGithub },
  { href: '#', icon: faLinkedinIn, id: 6 },
];

function ContactButtons() {
  return (
    <div className="contacts__list">
      {contactButtonsArr.map(({ href, icon }) => (
        <div key={href} className="contacts__item">
          <a className="contacts__link" href={href}>
            <FontAwesomeIcon className="contacts__link_icon" icon={icon} />
          </a>
        </div>
      ))}
    </div>
  );
}

export default ContactButtons;
