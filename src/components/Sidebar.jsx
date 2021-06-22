import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import './sidebar.css';
import {
  faBars,
  faTimes,
  faHome,
  faCommentAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const sidebarButtonData = [
  {
    url: '/main/home',
    text: 'Home',
    icon: faHome,
  },
  {
    url: '/main/comment',
    text: 'Comment',
    icon: faCommentAlt,
  },
];

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const sidebarButtonClasses = classNames('sidebar', {
    'sidebar__is-open': isOpen,
  });

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className={sidebarButtonClasses}>
      <button onClick={toggleSidebar} type="button" className="sidebar__toggle">
        <div className="sidebar__icon">
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </div>
      </button>
      <ul className="sidebar__button-container">
        {sidebarButtonData.map(({ url, text, icon }) => (
          <li key={text} className="sidebar__button-item">
            <NavLink
              exact
              to={url}
              className="sidebar__button-link"
              activeClassName="sidebar__active-link"
            >
              <div className="sidebar__icon">
                <FontAwesomeIcon icon={icon} />
              </div>
              <p>{text}</p>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
