import React from 'react';
import './hirebutton.css';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function HireButton({ scrolling }) {
  return (
    <div className="hire__button-container">
      <a
        className={
          scrolling < 99
            ? 'hire__button_visible_unvisible'
            : 'hire__button_visible'
        }
        href="mailto:coocooroozza@gmail.com"
      >
        <p className="hire__button_text">HIRE</p>
        <FontAwesomeIcon className="hire__button_icon" icon={faEnvelope} />
      </a>
    </div>
  );
}

export default HireButton;
