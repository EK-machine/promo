import React from 'react';
import './skillschips.css';
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const skillsChipsArr = [
  { icon: faHtml5, text: 'HTML', id: 1 },
  { icon: faCss3Alt, text: 'CSS', id: 2 },
  { icon: faJsSquare, text: 'JavaScript', id: 3 },
  { icon: faReact, text: 'REACT', id: 4 },
];

function SkillsChips() {
  return (
    <div className="skills-list">
      {skillsChipsArr.map(({ icon, text, id }) => (
        <div key={id} className="skills-chip_item">
          <div className="skills-chip_icon-container">
            <FontAwesomeIcon className="skills-chip_icon" icon={icon} />
          </div>
          <div className="skills-chip_text-container">
            <p className="skills-chip_paragraph">{text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SkillsChips;
