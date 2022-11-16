
export class Card {
  constructor(data, cardSelector, handleCardClick) {
    this.name = data.name;
    this.link = data.link;
    this.handleCardClick = handleCardClick;
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

  //   handleOpenPopup() {
  //     popupImageContainer.style = `background-image:url(${this.link})`;
  //     popupTitle.textContent = this.name;
  //     popupImage.classList.add("popup_opened");
  // }

  _deleteCard() {
    this._element.closest(".elements__element").remove();
  }
  
  _setEventListeners() {
    this._like = this._element.querySelector('.elements__like');
    this._like.addEventListener('click', () => {
      this._giveClickLike();
    });

    this._element.querySelector('.elements__mask-group').addEventListener('click', () => {
      console.log('sdasd');
      this.handleCardClick(this.name, this.link);
    });

    this._element.querySelector('.elements__delete').addEventListener('click', () => {
      this._deleteCard();
    });

  }

  _giveClickLike() {
    this._like.classList.toggle('elements__like_active');
  }
}
