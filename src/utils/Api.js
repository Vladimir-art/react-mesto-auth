import { baseUrl } from './utils';
//на данный момент бОльшая часть запросов не функционирует, "работают" только  GET-запросы
class Api {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }
  //приватный фетч запрос
  _fetch(url, params) {
    params.headers = {
      authorization: 'f137b98e-3f11-4f62-a4b2-d83c32e82337',
      'Content-Type': 'application/json'
    };
    return fetch(this._baseUrl + url, params)
      .then((res) => {
        if (!res.ok) {
          return Promise.reject(res.status);
        } else {
          return res.json();
        }
      })
  }
  //получаем карточки с сервера
  getInitialCards(url) {
    return this._fetch(url, {
      method: 'GET'
    })
  }
  //получает имя и деятельность автора с сервера
  getUserInterface(url) {
    return this._fetch(url, {
      method: 'GET'
    })
  }
  //отправить инфооацию об аторе на сервер и обновить ее
  sendUserInfo(url, data) {
    return this._fetch(url, {
      method: 'PATCH',
      body: JSON.stringify({
        name: `${data.name}`,
        about: `${data.about}`
      })
    })
  }
  //отправить карточку на сервер
  sendPlaceCard(url, data) {
    return this._fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        name: `${data.name}`,
        link: `${data.link}`
      })
    })
  }

  changeLikeCardStatus(url, isState) {
    if (!isState) {
      return this._fetch(url, {
        method: 'PUT'
      })
    } else {
      return this._fetch(url, {
        method: 'DELETE'
      })
    }
  }

  //удалить карточку с сервера
  deleteCard(url) {
    return this._fetch(url, {
      method: 'DELETE'
    })
  }

  //поменять аватар
  changeAvatar(url, data) {
    return this._fetch(url, {
      method: 'PATCH',
      body: JSON.stringify({
        avatar: `${data.avatar}`
      })
    })
  }
}

export const api = new Api({ baseUrl });
