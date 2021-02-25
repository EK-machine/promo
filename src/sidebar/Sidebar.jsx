import React, { useState } from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { sidebarButtonData } from '../data/data.jsx';

const Sidebar = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const sidebarToggle = () =>
    sidebarIsOpen ? setSidebarIsOpen(false) : setSidebarIsOpen(true);
  return (
    <div className="sidebar">
      <button onClick={sidebarToggle} type="button" className="sidebar-toggle">
        <FontAwesomeIcon icon={faBars} />
      </button>
      <ul className="sidebar-button-data">
        {sidebarButtonData.map((buttonData) => {
          const { id, url, text, icon } = buttonData;
          return (
            <li key={id}>
              <a href={url}>
                {icon}{' '}
                <span
                  className="text"
                  style={{ display: sidebarIsOpen ? 'inline' : 'none' }}
                >
                  {text}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
