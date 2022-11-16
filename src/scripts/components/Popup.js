
export default class Popup {
  constructor(popupSelector) {
    this.popupSelector = popupSelector;
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this.popupSelector.classList.add("popup_opened");
    document.addEventListener('keydown', this._handleEscClose);
    console.log("КЛАСС ПОПУП Функиця открытия Я работаю");
  }

  close() {
    this.popupSelector.classList.remove("popup_opened");
    document.removeEventListener('keydown', this._handleEscClose);
    console.log("КЛАСС ПОПУП Функиця закрытия Я работаю");
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  _handleOverlayAndButtonClose = (evt) => {
    if (evt.target === evt.currentTarget || evt.target.classList.contains("card-close") || evt.target.classList.contains("profile-close") || evt.target.classList.contains("image-close")) {
      this.close();
      console.log("ЭТО Я ТУТ РАБОТАЮ!!!!!!!!!!!!!!!!!")
    };
  }

  setEventListeners() {
    this.popupSelector.addEventListener('mousedown', this._handleOverlayAndButtonClose);
  }
}