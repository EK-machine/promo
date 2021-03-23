import React from 'react';
import './header.css';

function Header() {
  return (
    <div className="header__container">
      <div className="header__item header__item-img">
        <img
          className="header__avater"
          src="/images/avatar.jpg"
          alt="альтернативный текст"
        />
      </div>
      <div className="header__item header__item-bio">2</div>
      <div className="header__item header__item-contacts">3</div>
      <div className="header__item header__item-languages">ru/en</div>
    </div>
  );
}

export default Header;
