export default class Api {
  constructor({baseUrl, headers}) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  _checkResponse(res){
    if(res.ok) {
      console.log("Данные получены");
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  getInitialCards(){
    return fetch(`${this.baseUrl}/cards`, {
      headers: this.headers
    })
    .then(res => this._checkResponse(res))
    .catch(err => console.log(err));
  }

  addCard({name, link}) {
    return fetch(`${this.baseUrl}/cards`, {
      headers: this.headers,
      method: "POST",
      body: JSON.stringify({name, link})
    })
    .then(res => this._checkResponse(res))
    .catch(err => console.log(err));
  }

  deleteCard(cardId) {
    console.log(`${this.baseUrl}/cards/${cardId}`)
    return fetch(`${this.baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: this.headers,
    })
    .then(res => this._checkResponse(res))
    .catch(err => console.log(err));
  }

  getDataUser() {
    return fetch(`${this.baseUrl}/users/me`, {
      headers: this.headers
    })
    .then(res => this._checkResponse(res))
    .catch(err => console.log(err));
  }

  editDataUser({name, about}) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({name, about})
    })
    .then(res => this._checkResponse(res))
    .catch(err => console.log(err));
  }

  editAvatar({link}) {
    return fetch(`${this.baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({avatar: link})
    })
    .then(res => this._checkResponse(res))
    .catch(err => console.log(err));
  }

  getLikeCard() {
    return fetch(`${this.baseUrl}/cards/${cardId}/likes`, {
      headers: this.headers,
      method: "PUT",
      body: JSON.stringify()
    })
    .then(res => this._checkResponse(res))
    .catch(err => console.log(err));
  }

  deleteLike(cardId) {
    return fetch(`${this.baseUrl}/cards/${cardId}/likes` , {
      headers: this.headers,
      method: "DELETE",
    })
    .then(res => this._checkResponse(res))
    .catch(err => console.log(err));
  }
}