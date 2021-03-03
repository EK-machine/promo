import React from 'react';
import { NavLink } from 'react-router-dom';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => (
  <div className="header">
    <div className="header__logo-container">
      <FontAwesomeIcon icon={faCode} className="header__logo-img" />
      <p className="header__logo-text">promo</p>
    </div>

    <ul className="header__navbar">
      <li>
        <NavLink
          to="/"
          exact
          activeClassName="header-link__is-active"
          className="header__link"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/comment"
          activeClassName="header-link__is-active"
          className="header__link"
        >
          Comments
        </NavLink>
      </li>
    </ul>
  </div>
);

export default Header;
