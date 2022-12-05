import Popup from "./Popup.js"


export default class PopupWithDelete extends Popup {
  constructor(popupSelector){
    super(popupSelector);
    // this._popupForm = this.popupSelector.querySelector(config.formSelector);
  }
  
  // submitCard(callback) {
  //   this._handleSubmitCallback = callback;
  // }

  // setEventListeners() {
  //   super.setEventListeners();
  //   this._popupForm.addEventListener('submit', (evt) => {
  //     evt.preventDefault();
  //     this._handleSubmitCallback(this);
  //   })
  // }
}

