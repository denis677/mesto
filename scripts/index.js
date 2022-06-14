const buttonEdit = document.querySelector(".profile__edit-button");
const popupEdit = document.querySelector(".profile-popup");
const buttonClose = popupEdit.querySelector(".profile-close");

const formEditElement = document.querySelector(".profile-form");
const buttonEditSave = document.querySelector(".profile-submit-button");
const divElementTitle = document.querySelector(".profile__title");
const divElementSubtitle = document.querySelector(".profile__subtitle");
const authorInput = document.querySelector(".profile-field-auhtor");
const nameInput = document.querySelector(".profile-field-name");

const profileButton = document.querySelector(".profile__button");
const popupForm = document.querySelector(".card-popup");
const buttonCloseForm = document.querySelector(".card-close");
const popupButtonSaveForm = document.querySelector(
  ".card-submit-button"
);

const itemListWrapper = document.querySelector(".elements");
const template = document.getElementById("form-elements");
const formCreate = document.querySelector(".card-form");
const theNameInput = document.querySelector(".card-field-auhtor");
const linkInput = document.querySelector(".card-field-name");

const popupImage = document.querySelector(".image-popup");
const popupImageClose = document.querySelector(".image-close");
const popupImageContainer = document.querySelector(".image-container");
const popupTitle = document.querySelector(".image-edit-popup");

//! Функция открытия попапа + еще вещаем обработчик на еск
export function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener('keydown', closeByEscape); 
}

//! Функция закрытия попапа + еще удаляем обработчик на еск
function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener('keydown', closeByEscape);
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  divElementTitle.textContent = authorInput.value;
  divElementSubtitle.textContent = nameInput.value;
}

formEditElement.addEventListener("submit", handleProfileFormSubmit);

//! Открытие формы ЖАКА (редактирования прифиля)
buttonEdit.addEventListener("click", () => {
  openPopup(popupEdit);
  authorInput.value = divElementTitle.textContent;
  nameInput.value = divElementSubtitle.textContent;
  formValidators["edit"].resetValidation();
});

//! Закрытие попапа ЖАКА(редактирования профиля) на крестик
buttonClose.addEventListener("click", () => {
  closePopup(popupEdit);
});

//! Закрытие попапа при нажатии кнопки сохранить в попапе профиля
buttonEditSave.addEventListener("click", () => {
  closePopup(popupEdit);
});

//! Открытие формы добавления карточек
profileButton.addEventListener("click", () => {
  openPopup(popupForm);
  formValidators["new-place"].resetValidation();
});

//! Закрытие попапа новой карточки на крестик
buttonCloseForm.addEventListener("click", () => {
  closePopup(popupForm);
});

//! Закрытие попапа картинки на крестик
popupImageClose.addEventListener("click", () => {
  closePopup(popupImage);
});

import { initialCards, validationConfig } from './CardsArray.js';
import { Card } from './classes/card.js';
import { FormValidator } from './FormValidator.js';

//! Функция создания карточек
function createCard(data) {
  const card = new Card(data, '#form-elements');
  const cardElement = card.generateCard();
  return cardElement;
}

//! Создание карточек из массива
initialCards.forEach((data) =>{
  const cardCreateMain = createCard(data);
  itemListWrapper.append(cardCreateMain);
});

formCreate.addEventListener("submit", (e) => {
  e.preventDefault();
  const cardRender = createCard({
    name: theNameInput.value,
    link: linkInput.value,
  });
  itemListWrapper.prepend(cardRender);
  closePopup(popupForm);
  theNameInput.value = "";
  linkInput.value = "";
  popupButtonSaveForm.setAttribute('disabled', true);
});

//* Закрытие по клику мышки 
//! Закрытие попапа Жака(редактирования профиля) по клику мышкой куда угодно
popupEdit.addEventListener('click', (e) => {
  if (e.target === popupEdit) {
    closePopup(popupEdit);
  }
});

//! Закрытие попапа создания картинки по клику мышкой куда угодно
popupForm.addEventListener('click', (e) => {
  if (e.target === popupForm) {
    closePopup(popupForm);
  }
});

//! Закрытие попапа картинки по клику мышкой куда угодно
popupImage.addEventListener('click', (e) => {
  if (e.target === popupImage) {
    closePopup(popupImage);
  }
});

//* Закрытие по екс
//! Функиця закрытия через екс
function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);

  }
}

const formValidators = {}

//! Включение валидации
const enableValidation = (validationConfig) => {
  const formList = Array.from(document.querySelectorAll(validationConfig.formSelector))
  formList.forEach((formElement) => {
    const validator = new FormValidator(validationConfig, formElement)
//! получаем данные из атрибута `name` у формы
    const formName = formElement.getAttribute('name')

   //! вот тут в объект записываем под именем формы
    formValidators[formName] = validator;
   validator.enableValidation();
  });
};


enableValidation(validationConfig);

// //! Валидация 
// Array.from(document.forms).forEach((formElement) => {
//   FormValidator[formElement.name] = new FormValidator(validationConfig, formElement);
//   FormValidator[formElement.name].enableValidation();
// });

  // export function handleCardClick(name, link) {
  //   popupImageContainer.style = `background-image:url(${this.link})`;;
  //   popupTitle.textContent = this.name;
  //   openPopup(popupImage);
    
  // }


