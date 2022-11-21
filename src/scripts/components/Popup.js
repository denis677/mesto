
export default class Popup {
  constructor(popupSelector) {
    this.popupSelector = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this.popupSelector.classList.add("popup_opened");
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this.popupSelector.classList.remove("popup_opened");
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
    this.popupSelector.addEventListener('mousedown', this._handleOverlayAndButtonClose);
  }
}