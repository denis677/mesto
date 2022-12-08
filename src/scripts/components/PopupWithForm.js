import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, сonfig, {callbackSubmit}) {
    super(popupSelector);
    this._callBackSubmit = callbackSubmit;
    this._popupForm = this.popup.querySelector(сonfig.formSelector);
    this._inputList = Array.from(this._popupForm.querySelectorAll(сonfig.inputSelector));
    this._buttonSubmit = this._popupForm.querySelector(сonfig.submitButtonSelector);
    this._buttonDefaultText = this._buttonSubmit.textContent;
  }

  _getInputValues = () => {
    const inputValues = {};
    this._inputList.forEach( (input) => {
      inputValues[input.name] = input.value;
    });
    return inputValues;
  }

  _setValues = (evt) => {
    evt.preventDefault();
    this._callBackSubmit(this._getInputValues());
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', this._setValues);
  }

  close() {
    super.close();
    this._popupForm.reset();
  }

  renderLoading(isLoading) {
    if(isLoading) {
      this._buttonSubmit.textContent = 'Загрузка...'
    } else {
      this._buttonSubmit.textContent = this._buttonDefaultText;
    }
  }
}

