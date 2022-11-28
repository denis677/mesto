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
        console.log("Данные получены в классе апи");
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
        console.log("Данные получены в классе апи");
        return res.json();
      } else {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
    })
  }


  // getAllNeddedData() {
  //   return Promise.all([this.getInitialCards(), this.addCard()])
  // }

  deleteCard() {}

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

  patchDataUser() {}
  patchAvatar() {}
  getLikeCard() {}
  deleteLikeCard() {}
}