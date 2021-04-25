import React from 'react';
// import './chip.css';

function Chip(props) {
  return (
    <div key={props.index} className="skills-chip_item">
      <div className="skills-chip_icon-container">
        <FontAwesomeIcon className="skills-chip_icon" icon={props.icon} />
      </div>
      <div className="skills-chip_text-container">
        <p className="skills-chip_paragraph">{props.text}</p>
      </div>
    </div>
  );
}

export default Chip;
