import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as Auth from './Auth';

function Login(props) {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  // const history = useHistory();

  function changeToggle() {
    props.changeAuth();
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onSignIn(email, password);
    // Auth.login(email, password)
    //   .then((data) => {
    //     if (data.token) {
    //       setEmail('');
    //       setPassword('');
    //       props.onLogin();
    //       props.isAuth('');
    //       history.push('/');
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(`Упс, произошла ошибка: ${err}`);
    //     props.isAuth(err.message);
    //   })
  }

  return (
      <section className="register">
        <form className="register__form" onSubmit={handleSubmit}>
          <h2 className="register__text">Вход</h2>
          <fieldset className="register__auth">
            <input className="register__input" id="login" placeholder="Email" type="email" onChange={(e) => setEmail(e.target.value)}></input>
            <span className="register__input-error" id="login-input-error">123</span>
            <input className="register__input" id="password" placeholder="Пароль" type="password" onChange={(e) => setPassword(e.target.value)}></input>
            <span className="register__input-error" id="password-input-error">123</span>
          </fieldset>
          <button className="register__btn-submit" type="submit">Войти</button>
          <p className="register__have-auth">Ещё не зарегистрированы? <Link className="register__enter" to="/signup" onClick={changeToggle}>Регистрация</Link></p>
        </form>
      </section>
  )
}

export default Login;
