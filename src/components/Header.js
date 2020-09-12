import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {

  return (
    <>
      <header className="header">
        <img className="header__logo" src={props.logo} alt="Логотип-Место" />
        <ul className="header__info">
          <li className="header__list"><Link className="header__link" to="/user">Text 1</Link></li>
          <li className="header__list"><Link className="header__link header__link_gray" to="/">Text 2</Link></li>
        </ul>
      </header>
    </>
  )
}

export default Header
