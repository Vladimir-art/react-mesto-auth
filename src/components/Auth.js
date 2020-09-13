export const baseUrl = 'https://auth.nomoreparties.co';

export const register = (email, password) => {
  return fetch(`${baseUrl}/signup`, {
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
    })
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err));
}

export const login = (email, password) => {
  return fetch(`${baseUrl}/signin`, {
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
      return data;
    })
    .catch((err) => console.log(err));
}

export const enter = () => {
  return fetch(`${baseUrl}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `Bearer ${localStorage.getItem('jwt')}`
    }
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
    })
    .catch((err) => console.log(err));
}
