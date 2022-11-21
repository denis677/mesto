import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this.popupImageContainer = document.querySelector(".image-container");
    this.popupImag = document.querySelector(".image-popup__image")
    this.popTitle = document.querySelector(".image-edit-popup");


  }

  open(name, link) {
    this.popupImag.src = link;
    this.popTitle.textContent = name;
    super.open();
  }
}