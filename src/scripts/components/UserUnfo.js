

export default class UserUnfo {
  constructor(userInfoConfig){
    this._name = document.querySelector(userInfoConfig.nameSelector);
    this._about = document.querySelector(userInfoConfig.aboutSelector);
    this._avatar = document.querySelector(userInfoConfig.avatarSelector);
  }

  setUserInfo(result) {
    this._name.textContent = result.name;
    this._about.textContent = result.about;
    this._avatar.src = result.avatar;
    this.userId = result._id;
  }
  
  setAvatar(result) {
    this._avatar.src = result.link;
    this._avatar.alt = result.name;
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      about: this._about.textContent,
      avatar: this._avatar.src,
      userId: this.userId
    };
  }


}