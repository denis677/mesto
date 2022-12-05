export default class Api {
  constructor({baseUrl, headers}) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  getInitialCards(){
    return fetch(this.baseUrl, {
      headers: this.headers
    })
    .then(res => {
      if(res.ok) {
        console.log("Данные получены в классе getInitialCards");
        return res.json();
      } else {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
    })
  }

  addCard({name, link}) {
    return fetch(this.baseUrl, {
      headers: this.headers,
      method: "POST",
      body: JSON.stringify({name, link})
    })
    .then(res => {
      if(res.ok) {
        console.log("Данные получены в классе addCard");
        return res.json();
      } else {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
    })
  }


  // getAllNeddedData() {
  //   return Promise.all([this.getInitialCards(), this.addCard()])
  // }

  deleteCard(cardId) {
    console.log(`${this.baseUrl}/${cardId}`)
    return fetch(`${this.baseUrl}/${cardId}`, {
      method: "DELETE",
      headers: this.headers,
    })
    .then(res => {
      if(res.ok) {
        console.log("Данные получены в классе deleteCard");
        return res.json();
      } else {
        return Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
      }
    })
  }

  getDataUser() {
    return fetch(this.baseUrl, {
      headers: this.headers
    })
    .then(res => {
      if(res.ok) {
        console.log("Данные получены в классе апи");
        return res.json();
      } else {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
    })
  }

  editDataUser({name, about}) {
    return fetch(this.baseUrl, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({name, about})
    })
    .then(res => {
      if(res.ok) {
        console.log("Данные получены в классе editDataUser");
        return res.json();
      } else {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
    })
  }

  editAvatar({link}) {
    return fetch(`${this.baseUrl}/avatar`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({avatar: link})
    })
    .then(res => {
      if(res.ok) {
        console.log("Данные получены в классе editAVATAR");
        return res.json();
      } else {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
    })
  }

  getLikeCard() {
    return fetch(`${this.baseUrl}/${cardId}/likes`, {
      headers: this.headers,
      method: "PUT",
      body: JSON.stringify()
    })
    .then(res => {
      if(res.ok) {
        console.log("Данные получены в классе addCard");
        return res.json();
      } else {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
    })
  }

  deleteLike(cardId) {
    return fetch(`${this.baseUrl}/${cardId}/likes` , {
      headers: this.headers,
      method: "DELETE",
    })
    .then(res => {
      if(res.ok) {
        console.log("Данные получены в классе addCard");
        return res.json();
      } else {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
    })
  }
}