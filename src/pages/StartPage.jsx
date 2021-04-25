import React from 'react';
import './startpage.css';
import { Link } from 'react-router-dom';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SkillsChips from '../components/SkillsChips';
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

function StartPage() {
  return (
    <div className="startpage__container">
      <section className="startpage__content-container">
        <div className="startpage__contacts-container">
          <ContactButtons />
        </div>

        {startpageBackgroundParts.map((v, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={i} className={v} />
        ))}
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
          <SkillsChips />
        </div>
      </section>
    </div>
  );
}

export default StartPage;
