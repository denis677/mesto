const popupImage = document.querySelector(".image-popup");
const popupImageContainer = document.querySelector(".image-container");
const popupImageClose = document.querySelector(".image-close");
const popupTitle = document.querySelector(".image-edit-popup");

export class Card {
  constructor(name, link) {
    this.name = name;
    this.link = link;
  }

  _getTemplate() {
    const cardElement = document.querySelector('#form-elements').content.querySelector('.elements__element').cloneNode(true);
    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector('.elements__mask-group').src = `${this.link}`;
    this._element.querySelector('.elements__title').textContent = this.name;

    return this._element;
  }

    _handleOpenPopup() {
      popupImageContainer.style = `background-image:url(${this.link})`;;
      popupTitle.textContent = this.name;
      popupImage.classList.add('popup_opened');
  }

  _handleClosePopup() {
    popupImage.classList.remove('popup_opened');
  }

  _deleteCard() {
    this._element.closest(".elements__element").remove();
  }
  
  _setEventListeners() {
    this._element.querySelector('.elements__like').addEventListener('click', () => {
      this._giveClickLike();
    });

    this._element.querySelector('.elements__mask-group').addEventListener('click', () => {
      this._handleOpenPopup();
    });

    popupImageClose.addEventListener('click', () => {
      this._handleClosePopup();
    });

    popupImage.addEventListener('click', (e) => {
      if (e.target === popupImage) {
        this._handleClosePopup();
      }
    });

    this._element.querySelector('.elements__delete').addEventListener('click', () => {
      this._deleteCard();
    });

  }

  _giveClickLike() {
    this._element.querySelector('.elements__like').classList.toggle('elements__like_active');
  }
}
