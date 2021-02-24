import React from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { sidebarButtonData } from '../data/data.jsx';

const Sidebar = () => {
  return (
    <div className="sidebar show-sidebar">
      <button type="button" className="sidebar-toggle">
        <FontAwesomeIcon icon={faBars} />
      </button>
      <ul className="sidebar-button-data">
        {sidebarButtonData.map((buttonData) => {
          const { id, url, text, icon } = buttonData;
          return (
            <li key={id}>
              <a href={url}>
                {icon} {text}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
