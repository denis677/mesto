import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, сonfig, {callbackSubmit}) {
    super(popupSelector);
    this.popupSelector = popupSelector;
    this._callBackSubmit = callbackSubmit;
    this._popupForm = this.popupSelector.querySelector(сonfig.formSelector);
    this._inputList = Array.from(this._popupForm.querySelectorAll(сonfig.inputSelector));
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
    this.close();
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', this._setValues);
    console.log("work!")
  }

  close() {
    super.close();
    this._popupForm.reset();
  }
}

