import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import {
  faBars,
  faTimes,
  faHome,
  faCommentAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const sidebarButtonData = [
  {
    id: 1,
    url: '/',
    text: 'home',
    icon: <FontAwesomeIcon icon={faHome} />,
  },
  {
    id: 2,
    url: '/comment',
    text: 'comment',
    icon: <FontAwesomeIcon icon={faCommentAlt} />,
  },
];

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);
  const sidebarButtonClasses = classNames('sidebar', {
    'sidebar__is-open': isOpen,
  });
  return (
    <div className={sidebarButtonClasses}>
      <button onClick={toggleSidebar} type="button" className="sidebar__toggle">
        <FontAwesomeIcon
          icon={isOpen ? faTimes : faBars}
          className="sidebar__toggle-button"
        />
      </button>
      <ul className="sidebar__button-container">
        {sidebarButtonData.map(({ id, url, text, icon }) => (
          <>
            <li key={id} className="sidebar__button-item">
              <NavLink
                exact
                to={url}
                className="sidebar__button-link"
                activeClassName="sidebar__active-link"
              >
                <div className="sidebar__button-logo">{icon}</div>
                <p>{text}</p>
              </NavLink>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
