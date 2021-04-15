import React from 'react';
import { Link } from 'react-router-dom';
import './startpage.css';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ContactButtons from '../components/Contactbuttons';

const startpageBackgroundParts = [
  {
    id: 1,
    classNo: 'startpage__background startpage__background-1',
  },
  {
    id: 2,
    classNo: 'startpage__background startpage__background-2',
  },
  {
    id: 3,
    classNo: 'startpage__background startpage__background-3',
  },
  {
    id: 4,
    classNo: 'startpage__background startpage__background-4',
  },
  {
    id: 5,
    classNo: 'startpage__background startpage__background-5',
  },
  {
    id: 6,
    classNo: 'startpage__background startpage__background-6',
  },
  {
    id: 7,
    classNo: 'startpage__background startpage__background-7',
  },
];

const url = '/';

function StartPage() {
  return (
    <div className="startpage__container">
      <section className="startpage__content-container">
        <div className="startpage__contacts-container">
          <ContactButtons />
        </div>
        {startpageBackgroundParts.map(({ id, classNo }) => (
          <div key={id} className={classNo} />
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
          <Link exact to={url} className="startpage__scroll-button">
            <FontAwesomeIcon
              className="startpage__scroll-button_icon"
              icon={faChevronDown}
            />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default StartPage;
