
export default class Popup {
  constructor(popupSelector) {
    this.popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this.popup.classList.add("popup_opened");
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this.popup.classList.remove("popup_opened");
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  _handleOverlayAndButtonClose = (evt) => {
    if (evt.target === evt.currentTarget || evt.target.classList.contains("close")) {
      this.close();
    };
  }

  setEventListeners() {
    this.popup.addEventListener('mousedown', this._handleOverlayAndButtonClose);
  }
}