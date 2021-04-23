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
  { href: 'tel:+37529-28-22-532', icon: faPhoneAlt, id: 1 },
  { href: 'mailto:coocooroozza@gmail.com', icon: faEnvelope, id: 2 },
  { href: 'callto:evgenij.kalabukhin', icon: faSkype, id: 3 },
  { href: 'https://telegram.me/EK_machine', icon: faTelegramPlane, id: 4 },
  { href: 'https://github.com/EK-machine', icon: faGithub, id: 5 },
  { href: '#', icon: faLinkedinIn, id: 6 },
];

function ContactButtons() {
  return (
    <div className="contacts__list">
      {contactButtonsArr.map(({ href, icon, id }) => (
        <div key={id} className="contacts__item">
          <a className="contacts__link" href={href}>
            <FontAwesomeIcon className="contacts__link_icon" icon={icon} />
          </a>
        </div>
      ))}
    </div>
  );
}

export default ContactButtons;
