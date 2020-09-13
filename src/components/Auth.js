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
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
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
