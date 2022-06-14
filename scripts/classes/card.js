import {openPopup} from '../index.js';
const popupImage = document.querySelector(".image-popup");
const popupImageContainer = document.querySelector(".image-container");
const popupImageClose = document.querySelector(".image-close");
const popupTitle = document.querySelector(".image-edit-popup");

export class Card {
  constructor(data, cardSelector, handleCardClick) {
    this.name = data.name;
    this.link = data.link;
    // this._handleCardClick = handleCardClick;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._cardSelector).content.querySelector('.elements__element').cloneNode(true);
    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector('.elements__mask-group').src = `${this.link}`;
    this._element.querySelector('.elements__mask-group').alt = `${this.name}`;
    this._element.querySelector('.elements__title').textContent = this.name;

    return this._element;
  }

    _handleOpenPopup() {
      popupImageContainer.style = `background-image:url(${this.link})`;;
      popupTitle.textContent = this.name;
      openPopup(popupImage);
  }

  _deleteCard() {
    this._element.closest(".elements__element").remove();
  }
  
  _setEventListeners() {
    // this._cardImage.querySelector('.elements__mask-group').addEventListener('click', () => {
    //   this._handleCardClick(this.name, this.link)
    // });
    
    this._like = this._element.querySelector('.elements__like');
    this._like.addEventListener('click', () => {
      this._giveClickLike();
    });

    this._element.querySelector('.elements__mask-group').addEventListener('click', () => {
      this._handleOpenPopup();
    });

    this._element.querySelector('.elements__delete').addEventListener('click', () => {
      this._deleteCard();
    });

  }

  _giveClickLike() {
    this._like.classList.toggle('elements__like_active');
  }
}
