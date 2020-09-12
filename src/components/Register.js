import React from 'react';

function Register(props) {

  return (
    <>
      <section className="register">
        <form className="register__form">
          <h2 className="register__text">Регистрация</h2>
          <fieldset className="register__auth">
            <input className="register__input" id="login" defaultValue="Email"></input>
            <span className="register__input-error" id="login-input-error"></span>
            <input className="register__input" id="password" defaultValue="Пароль"></input>
            <span className="register__input-error" id="password-input-error"></span>
            <button className="register__btn-submit" type="submit">Зарегистрироваться</button>
          </fieldset>
        </form>
        <p className="register__have-auth">Уже зарегистрированы? <a className="register__enter" href="/">Войти</a></p>
      </section>
    </>
  )
}

export default Register;
