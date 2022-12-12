export class Card {
  constructor(data, cardSelector, config, handleCardClick, handleDeleteClick, userId, handleLikeClick) {
    this.name = data.name;
    this.link = data.link;
    this._id = data._id;
    this.config = config;
    this.userId = userId;
    this.cardOwnerId = data.owner._id;
    this.likes = data.likes;
    this.handleCardClick = handleCardClick;
    this.handleDeleteClick = handleDeleteClick;
    this.handleLikeClick = handleLikeClick;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._cardSelector).content.querySelector('.elements__element').cloneNode(true);
    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._like = this._element.querySelector('.elements__like');
    this._setEventListeners();
    this._element.querySelector('.elements__mask-group').src = `${this.link}`;
    this._element.querySelector('.elements__mask-group').alt = `${this.name}`;
    this._element.querySelector('.elements__title').textContent = this.name;
    this.trash = this._element.querySelector('.elements__delete');
    this.likeNumber = this._element.querySelector('.elements__numbers');
    this.giveClickLike();
    this.isMine();
    
    return this._element;
  }

  giveClickLike() {
    this.likeNumber.textContent = this.likes.length;
    this._like.classList.toggle(this.config.buttonHeartClassActive, this.isLiked())
  }

  isLiked() {
    return this.likes.some((item) => item._id === this.userId)
  }

  updateLikes = (arr) => {
    this.likes = arr;
    this.giveClickLike()
  }

  isMine() {
    if (!(this.userId === this.cardOwnerId)) {
      this.trash.remove();
    }
  }

  deleteCard() {
    this._element.closest(".elements__element").remove();
    this._element = null;
  }
  
  _setEventListeners() {
    this._like.addEventListener('click', () => {
      this.handleLikeClick(this._id, this.isLiked(), this.updateLikes)
    });

    this._element.querySelector('.elements__mask-group').addEventListener('click', () => {
      this.handleCardClick(this.name, this.link);
    });

    this._element.querySelector('.elements__delete').addEventListener('click', () => {
      this.handleDeleteClick(this._id);
    });
  }
}
