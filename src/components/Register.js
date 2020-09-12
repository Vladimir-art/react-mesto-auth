import React from 'react';

function Register(props) {

  return (
    <>
      <section className="register">
        <form className="register__form">
          <h2 className="register__text">Регистрация</h2>
          <fieldset className="register__auth">
            <input className="register__input" id="login" placeholder="Email" type="url"></input>
            <span className="register__input-error" id="login-input-error">123</span>
            <input className="register__input" id="password" placeholder="Пароль" type="password"></input>
            <span className="register__input-error" id="password-input-error">123</span>
          </fieldset>
          <button className="register__btn-submit" type="submit">Зарегистрироваться</button>
          <p className="register__have-auth">Уже зарегистрированы? <a className="register__enter" href="/">Войти</a></p>
        </form>
      </section>
    </>
  )
}

export default Register;
