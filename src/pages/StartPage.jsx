import React from 'react';
import './startpage.css';
import { Link } from 'react-router-dom';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Chip from '../components/Chip';
import ContactButtons from '../components/ContactButtons';

const startpageBackgroundParts = [
  'startpage__background startpage__background-1',
  'startpage__background startpage__background-2',
  'startpage__background startpage__background-3',
  'startpage__background startpage__background-4',
  'startpage__background startpage__background-5',
  'startpage__background startpage__background-6',
  'startpage__background startpage__background-7',
];

const skillsChipsArr = [
  { icon: faHtml5, text: 'HTML' },
  { icon: faCss3Alt, text: 'CSS' },
  { icon: faJsSquare, text: 'JS' },
  { icon: faReact, text: 'REACT' },
];

function StartPage() {
  return (
    <div className="startpage__container">
      <section className="startpage__content-container">
        {startpageBackgroundParts.map((classes) => (
          <div key={classes} className={classes} />
        ))}
        <div className="startpage__contacts-container">
          <ContactButtons />
        </div>
        <div className="startpage__content-lower">
          <div className="startpage__bio-container">
            <div className="startpage__bio-centering">
              <h1 className="startpage__bio-name">
                Evgenij <br />
                Kalabukhin
              </h1>
              <p className="startpage__bio-paragraph">
                Junior Front-end Developer
              </p>
            </div>
          </div>
          <div className="startpage__button-container">
            <Link to="/main/home" className="startpage__arrow-down_link">
              <FontAwesomeIcon
                className="startpage__arrow-down_icon"
                icon={faChevronDown}
              />
            </Link>
          </div>
          <div className="startpage__skills-container">
            {skillsChipsArr.map(({ icon, text }) => (
              <Chip icon={icon} text={text} key={text} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default StartPage;
