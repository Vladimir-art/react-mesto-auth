import React from 'react';
import { Link } from 'react-router-dom';
import * as Auth from './Auth';

function Register(props) {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault()
    Auth.register(email, password);
  }

  return (
    <>
      <section className="register">
        <form className="register__form" onSubmit={handleSubmit}>
          <h2 className="register__text">Регистрация</h2>
          <fieldset className="register__auth">
            <input className="register__input" id="login" placeholder="Email" type="email" name="email" onChange={(e) => setEmail(e.target.value)}></input>
            <span className="register__input-error" id="login-input-error">123</span>
            <input className="register__input" id="password" placeholder="Пароль" type="password" name="password" onChange={(e) => setPassword(e.target.value)}></input>
            <span className="register__input-error" id="password-input-error">123</span>
          </fieldset>
          <button className="register__btn-submit" type="submit">Зарегистрироваться</button>
          <p className="register__have-auth">Уже зарегистрированы? <Link className="register__enter" to="/signin">Войти</Link></p>
        </form>
      </section>
    </>
  )
}

export default Register;
