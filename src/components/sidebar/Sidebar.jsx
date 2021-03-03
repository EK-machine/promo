import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { sidebarButtonData } from './sidebarButtonData';

const Sidebar = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const sidebarToggle = () =>
    sidebarIsOpen ? setSidebarIsOpen(false) : setSidebarIsOpen(true);
  const sidebarButtonClasses = classNames('sidebar__button-link', {
    'sidebar__button-open': sidebarIsOpen,
  });
  return (
    <div className="sidebar">
      <button onClick={sidebarToggle} type="button" className="sidebar__toggle">
        <FontAwesomeIcon icon={sidebarIsOpen ? faTimes : faBars} />
      </button>
      <ul className="sidebar__button-container">
        {sidebarButtonData.map((buttonData) => {
          const { id, url, text, icon } = buttonData;
          return (
            <li key={id}>
              <Link to={url} className={sidebarButtonClasses}>
                <div className="sidebar__button-logo">{icon}</div>
                <p>{text}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
