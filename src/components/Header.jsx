import React from 'react';
import { NavLink } from 'react-router-dom';
import { faFireAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => (
  <div className="header">
    <FontAwesomeIcon icon={faFireAlt} className="header-logo" />
    <ul className="header-nav-bar">
      <li>
        <NavLink
          to="/"
          exact
          activeClassName="header-link-is-active"
          className="header-link"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/comment"
          activeClassName="header-link-is-active"
          className="header-link"
        >
          Comments
        </NavLink>
      </li>
    </ul>
  </div>
);

export default Header;
