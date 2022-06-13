const buttonEdit = document.querySelector(".profile__edit-button");
const popupEdit = document.querySelector(".profile-popup");
const buttonClose = popupEdit.querySelector(".profile-close");

function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener('keydown', closeByEscape); 
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener('keydown', closeByEscape);
}

const formEditElement = document.querySelector(".profile-form");
const buttonEditSave = document.querySelector(".profile-submit-button");
const divElementTitle = document.querySelector(".profile__title");
const divElementSubtitle = document.querySelector(".profile__subtitle");
const authorInput = document.querySelector(".profile-field-auhtor");
const nameInput = document.querySelector(".profile-field-name");

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  divElementTitle.textContent = authorInput.value;
  divElementSubtitle.textContent = nameInput.value;
}

formEditElement.addEventListener("submit", handleProfileFormSubmit);
buttonEdit.addEventListener("click", () => {
  openPopup(popupEdit);
  authorInput.value = divElementTitle.textContent;
  nameInput.value = divElementSubtitle.textContent;
});
buttonClose.addEventListener("click", () => {
  closePopup(popupEdit);
});

buttonEditSave.addEventListener("click", () => {
  closePopup(popupEdit);
});
// sdad

const profileButton = document.querySelector(".profile__button");
const popupForm = document.querySelector(".card-popup");
const buttonCloseForm = document.querySelector(".card-close");
const popupButtonSaveForm = document.querySelector(
  ".card-submit-button"
);

profileButton.addEventListener("click", () => {
  openPopup(popupForm);
});
buttonCloseForm.addEventListener("click", () => {
  closePopup(popupForm);
});


const itemListWrapper = document.querySelector(".elements");
const template = document.getElementById("form-elements");
const formCreate = document.querySelector(".card-form");
const theNameInput = document.querySelector(".card-field-auhtor");
const linkInput = document.querySelector(".card-field-name");

const popupImage = document.querySelector(".image-popup");
const popupImageClose = document.querySelector(".image-close");
const popupImageContainer = document.querySelector(".image-container");
const popupTitle = document.querySelector(".image-edit-popup");

popupImageClose.addEventListener("click", () => {
  closePopup(popupImage);
});


import { initialCards, validationConfig } from './CardsArray.js';
import { Card } from './classes/card.js';
import { FormValidator } from './FormValidator.js';

initialCards.forEach((item) =>{
  const card = new Card(item.name, item.link);
  const cardElement = card.generateCard();

  document.querySelector('.elements').append(cardElement);
});


formCreate.addEventListener("submit", () => {
  const card = new Card({
    name: theNameInput.value,
    link: linkInput.value,
  });
  const cardElement = card.generateCard();
  document.querySelector('.elements').append(cardElement);
});

popupEdit.addEventListener('click', (e) => {
  if (e.target === popupEdit) {
    closePopup(popupEdit);
  }
});

popupForm.addEventListener('click', (e) => {
  if (e.target === popupForm) {
    closePopup(popupForm);
  }
});

function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(popupEdit);
    closePopup(popupForm);
  }
}

Array.from(document.forms).forEach((formElement) => {
  FormValidator[formElement.name] = new FormValidator(validationConfig, formElement);
  FormValidator[formElement.name].enableValidation();
});
