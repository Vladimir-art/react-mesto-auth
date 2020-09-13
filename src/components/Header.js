import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {

  const [isEnter, setIsEnter] = React.useState(true);
  const [link, setLink] = React.useState({name: 'Регистрация', path: '/signup'});

  function changeLink() {
    isEnter ? setLink({name: 'Регистрация', path: '/signup'}) : setLink({name: 'Войти', path: '/signin'});
    setIsEnter(!isEnter);
  }

  const handleHiddenLink = (
    `${!props.loggedIn && 'header__link_hidden'}`
  )

  return (
    <>
      <header className="header">
        <img className="header__logo" src={props.logo} alt="Логотип-Место" />
        <ul className="header__info">
          <li className="header__list"><Link className="header__link" to={link.path} onClick={changeLink}>{link.name}</Link></li>
          <li className="header__list"><Link className={`header__link header__link_gray ${handleHiddenLink}`} to="/signin" onClick={localStorage.removeItem('jwt')}>Выйти</Link></li>
        </ul>
      </header>
    </>
  )
}

export default Header
