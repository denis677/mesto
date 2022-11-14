import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupElement, popupContainer, popTitle) {
    super(popupElement);
    this.popupContainer = popupContainer;
    this.popTitle = popTitle;

  }

  open() {
    this.popupContainer.style = `background-image:url(${this.link})`;
    this.popTitle.textContent = this.name;
    super.open();
    console.log("КЛАСС ПОПУП ИМАГЕ опен Я работаю");
  }
}