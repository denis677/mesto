export const initialCards = [
  {
    caption: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    caption: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    caption: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    caption: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    caption: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    caption: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

export const validationConfig = {
  formSelector: '.form',
  inputSelector: '.input',
  submitButtonSelector: '.submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup-form__input_type_error',
  errorClass: 'popup-form__input-error-visible'
};

export const buttonEdit = document.querySelector(".profile__edit-button");
export const popupEdit = document.querySelector(".profile-popup");
export const buttonClose = popupEdit.querySelector(".profile-close");

export const formEditElement = document.querySelector(".profile-form");
export const buttonEditSave = document.querySelector(".profile-submit-button");
export const divElementTitle = document.querySelector(".profile__title");
export const divElementSubtitle = document.querySelector(".profile__subtitle");
export const authorInput = document.querySelector(".profile-field-auhtor");
export const nameInput = document.querySelector(".profile-field-name");

export const profileButton = document.querySelector(".profile__button");
export const popupForm = document.querySelector(".card-popup");
export const buttonCloseForm = document.querySelector(".card-close");
export const popupButtonSaveForm = document.querySelector(
  ".card-submit-button"
);

export const itemListWrapper = document.querySelector(".elements");
export const template = document.getElementById("form-elements");


export const formCreate = document.querySelector(".card-form");
export const theNameInput = document.querySelector(".card-field-auhtor");
export const linkInput = document.querySelector(".card-field-name");


export const popupImage = document.querySelector(".image-popup");
export const popupImageClose = document.querySelector(".image-close");
export const popupImageContainer = document.querySelector(".image-container");
export const popupTitle = document.querySelector(".image-edit-popup");
export const popupDeleteSelector = document.querySelector('.popup-delete');
export const popupDeleteButton = document.querySelector('.popup-delete__button');

export const formValidators = {};


export const containerConfig = {
  container: ".elements"
}

export const userInfoConfig = {
  nameSelector: '.profile__title',
  aboutSelector: '.profile__subtitle'
}

export const popupSelectors = {
  popupImage: ".image-popup",
  popupEdit: ".profile-popup",
  popupForm: ".card-popup",
  popupDelete: ".popup-delete"
}

export const apiConfig = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-54/cards',
  headers: {
    authorization: 'c38f4f24-04a4-4306-9cb4-8e1863b21959',
    'Content-Type': 'application/json'
  }
}

export const apiConfigUser = {
  baseUrl: 'https://nomoreparties.co/v1/cohort-54/users/me',
  headers: {
    authorization: 'c38f4f24-04a4-4306-9cb4-8e1863b21959',
    'Content-Type': 'application/json'
  }
}