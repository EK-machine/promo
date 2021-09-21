import React from 'react';
import './hire.css';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Hire() {
  return (
    <div className="hire__button-container">
      <a className="hire__button" href="mailto:evgenij.kalabukhin@gmail.com">
        <p className="hire__button_text">HIRE</p>
        <FontAwesomeIcon className="hire__button_icon" icon={faEnvelope} />
      </a>
    </div>
  );
}

export default Hire;
