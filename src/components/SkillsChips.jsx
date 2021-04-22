import React from 'react';
import './skillschips.css';
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SkillsChips() {
  return (
    <div className="skills-list">
      <div className="skills-chip_item">
        <div className="skills-chip_icon-container">
          <FontAwesomeIcon className="skills-chip_icon" icon={faHtml5} />
        </div>
        <div className="skills-chip_text-container">
          <p className="skills-chip_paragraph">HTML</p>
        </div>
      </div>
      <div className="skills-chip_item">
        <div className="skills-chip_icon-container">
          <FontAwesomeIcon className="skills-chip_icon" icon={faCss3Alt} />
        </div>
        <div className="skills-chip_text-container">
          <p className="skills-chip_paragraph">CSS</p>
        </div>
      </div>
      <div className="skills-chip_item">
        <div className="skills-chip_icon-container">
          <FontAwesomeIcon className="skills-chip_icon" icon={faJsSquare} />
        </div>
        <div className="skills-chip_text-container">
          <p className="skills-chip_paragraph">JavaScript</p>
        </div>
      </div>
      <div className="skills-chip_item">
        <div className="skills-chip_icon-container">
          <FontAwesomeIcon className="skills-chip_icon" icon={faReact} />
        </div>
        <div className="skills-chip_text-container">
          <p className="skills-chip_paragraph">REACT</p>
        </div>
      </div>
    </div>
  );
}

export default SkillsChips;
