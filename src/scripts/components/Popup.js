import { buttonClose, buttonCloseForm, popupImageClose, profileButton } from '../utils/CardsArray.js';

export default class Popup {
  constructor(popupElement) {
    this.popupSelector = popupElement;
    // this._handleEscClose = this._handleEscClose.bind(this)
  }

  open() {
    this._handleEscClose = this._handleEscClose.bind(this)
    this.popupSelector.classList.add("popup_opened");
    document.addEventListener('keydown', this._handleEscClose);
    console.log("КЛАСС ПОПУП Функиця открытия Я работаю");
  }

  close() {
    this._handleEscClose = this._handleEscClose.bind(this)
    this.popupSelector.classList.remove("popup_opened");
    document.removeEventListener('keydown', this._handleEscClose);
    console.log("КЛАСС ПОПУП Функиця закрытия Я работаю");
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      const openedPopup = document.querySelector('.popup_opened');
      this.close();
    }
  }

  setEventListeners() {
    // profileButton.addEventListener("click", () => {
    //   this.popupSelector.classList.add("popup_opened");
    // });
    buttonClose.addEventListener("click", () => {
      this.close();
    });

    buttonCloseForm.addEventListener("click", () => {
      this.close();
      console.log("КЛАСС ПОПУП Функиця СЕТЕВЕНТ Я работаю");
    });

    popupImageClose.addEventListener("click", () => {
      this.close();
      console.log("КЛАСС ПОПУП Функиця СЕТЕВЕНТ Я работаю");
    });
    
    this.popupSelector.addEventListener('click', (e) => {
      if (e.target === this.popupSelector) {
        this.close();
      }
    });
  }
}