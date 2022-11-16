

export default class UserUnfo {
  constructor(userInfoConfig){
    this._name = document.querySelector(userInfoConfig.nameSelector);
    this._about = document.querySelector(userInfoConfig.aboutSelector);
  }

  setUserInfo(NewUser) {
    this._name.textContent = NewUser.name;
    this._about.textContent = NewUser.about;
    console.log(this._name);
  }
  
  getUserInfo() {
    return {
      name: this._name.textContent,
      about: this._about.textContent
    };
  }


}