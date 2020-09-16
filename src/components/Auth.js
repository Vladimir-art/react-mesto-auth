import { baseUrlAuth } from '../utils/utils';

export const register = (email, password) => {
  return fetch(`${baseUrlAuth}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "email": email,
      "password": password,
    })
  })
    .then((res) => {
      try {
        if (res.status === 200) {
          return res.json();
        }
      }
      catch (err) {
        return err;
      }
      return res;
    })
    .then((res) => {
      return res;
    });
}

export const login = (email, password) => {
  return fetch(`${baseUrlAuth}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "email": email,
      "password": password,
    })
  })
    .then((res) => {
      try {
        if (res.status === 200) {
          return res.json();
        }
        if (res.status === 400) {
          return console.log('не передано одно из полей')
        }
        if (res.status === 401) {
          return console.log('пользователь с email не найден')
        }
      }
      catch (err) {
        return err;
      }
    })
    .then((data) => {
      localStorage.setItem('jwt', data.token);
      console.log(localStorage.getItem('jwt')) // показывает токен
      return data;
    });
}

export const getContent = (token) => {
  return fetch(`${baseUrlAuth}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `Bearer ${token}`
    },
  })
    .then((res) => {
      try {
        if (res.status === 200) {
          return res.json();
        }
        if (res.status === 401) {
          return console.log('Токен не передан или передан не в том формате')
        }
      }
      catch (err) {
        return err;
      }
    })
    .then((data) => {
      return data;
    });
}
