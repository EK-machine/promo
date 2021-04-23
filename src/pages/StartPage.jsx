import React from 'react';
import './startpage.css';
import { Link } from 'react-router-dom';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
// import {
//   faHtml5,
//   faCss3Alt,
//   faJsSquare,
//   faReact,
// } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SkillsChips from '../components/SkillsChips';
import ContactButtons from '../components/ContactButtons';

// const startpageBackgroundParts = [
//   {
//     id: 1,
//     classNo: 'startpage__background startpage__background-1',
//   },
//   {
//     id: 2,
//     classNo: 'startpage__background startpage__background-2',
//   },
//   {
//     id: 3,
//     classNo: 'startpage__background startpage__background-3',
//   },
//   {
//     id: 4,
//     classNo: 'startpage__background startpage__background-4',
//   },
//   {
//     id: 5,
//     classNo: 'startpage__background startpage__background-5',
//   },
//   {
//     id: 6,
//     classNo: 'startpage__background startpage__background-6',
//   },
//   {
//     id: 7,
//     classNo: 'startpage__background startpage__background-7',
//   },
// ];

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

        {/* {startpageBackgroundParts.map(({ id, classNo }) => (
          <div key={id} className={classNo} />
        ))} */}
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
          {/* <div className="startpage__skills-list">
            <div className="startpage__skills-chip_item">
              <div className="startpage__skills-chip_icon-container">
                <FontAwesomeIcon
                  className="startpage__skills-chip_icon"
                  icon={faHtml5}
                />
              </div>
              <div className="startpage__skills-chip_text-container">
                <p className="startpage__skills-chip_paragraph">HTML</p>
              </div>
            </div>
            <div className="startpage__skills-chip_item">
              <div className="startpage__skills-chip_icon-container">
                <FontAwesomeIcon
                  className="startpage__skills-chip_icon"
                  icon={faCss3Alt}
                />
              </div>
              <div className="startpage__skills-chip_text-container">
                <p className="startpage__skills-chip_paragraph">CSS</p>
              </div>
            </div>
            <div className="startpage__skills-chip_item">
              <div className="startpage__skills-chip_icon-container">
                <FontAwesomeIcon
                  className="startpage__skills-chip_icon"
                  icon={faJsSquare}
                />
              </div>
              <div className="startpage__skills-chip_text-container">
                <p className="startpage__skills-chip_paragraph">JavaScript</p>
              </div>
            </div>
            <div className="startpage__skills-chip_item">
              <div className="startpage__skills-chip_icon-container">
                <FontAwesomeIcon
                  className="startpage__skills-chip_icon"
                  icon={faReact}
                />
              </div>
              <div className="startpage__skills-chip_text-container">
                <p className="startpage__skills-chip_paragraph">REACT</p>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
}

export default StartPage;
