import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {

  const [isEnter, setIsEnter] = React.useState(true); // превоначально попадаем на стр входа
  const [link, setLink] = React.useState({ name: 'Регистрация', path: '/signup' });

  function changeLink() { // меняет текст и ссылке в зависимости от стейта (усли тру (сначала да) - перенаправит на регистрцию, и наоборот)
    isEnter ? setLink({ name: 'Регистрация', path: '/signup' }) : setLink({ name: 'Войти', path: '/signin' });
    setIsEnter(!isEnter); // меняет стейт на противоложный
  }

  const handleHiddenLink = (
    `${!props.loggedIn && 'header__link_hidden'}`
  )

  function signOut() {
    props.close();
    localStorage.removeItem('jwt');
  }

  return (
    <>
      <header className="header">
        <img className="header__logo" src={props.logo} alt="Логотип-Место" />
        <ul className="header__info">
          <li
            className="header__list">
            <Link
              className="header__link"
              to={props.loggedIn ? '/' : link.path}
              onClick={changeLink}
            >
              {props.loggedIn ? props.user : link.name}
            </Link>
          </li>
          <li className="header__list"><Link className={`header__link header__link_gray ${handleHiddenLink}`} to="/signin" onClick={signOut}>Выйти</Link></li>
        </ul>
      </header>
    </>
  )
}

export default Header
