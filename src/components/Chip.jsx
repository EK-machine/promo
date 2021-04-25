import React from 'react';
import './chip.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Chip({ index, icon, text }) {
  return (
    <div key={index} className="chip_item">
      <div className="chip_icon-container">
        <FontAwesomeIcon className="chip_icon" icon={icon} />
      </div>
      <div className="chip_text-container">
        <p className="chip_paragraph">{text}</p>
      </div>
    </div>
  );
}

export default Chip;
