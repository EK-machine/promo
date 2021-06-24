import React from 'react';
import './hirebutton.css';

function HireButton({ scroll }) {
  return (
    <div className="hire__button-container">
      <button
        className={
          scroll < 99
            ? 'hire__button_visible_unvisible'
            : 'hire__button_visible'
        }
        type="button"
      >
        HIRE
      </button>
    </div>
  );
}

export default HireButton;
