


let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let ButtonClose = document.querySelector('.popup__close');



function openPopup() {
  popup.classList.add('popup_opened');
};

function closePopup() {
  popup.classList.remove('popup_opened');
};

let formElement = document.querySelector('.popup__form');
let buttonSave = document.querySelector('.popup__submit-button');
let divElementTitle = document.querySelector('.profile__title');
let divElementSubtitle = document.querySelector('.profile__subtitle');
let authorInput = document.querySelector('.popup__field-author');
let nameInput = document.querySelector('.popup__field-name');

function formSubmitHandler (evt) {
  evt.preventDefault();
  divElementTitle.textContent = authorInput.value;
  divElementSubtitle.textContent = nameInput.value;
};

formElement.addEventListener('submit', formSubmitHandler);
editButton.addEventListener('click', openPopup);
ButtonClose.addEventListener('click', closePopup);

buttonSave.onclick = () => {
  closePopup();
};


const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }];

let profileButton = document.querySelector('.profile__button');
let popupForm = document.querySelector('.popup-form');
let ButtonCloseForm = document.querySelector('.popup-form__close');


function popupFormOpen () {
  popupForm.classList.toggle('popup-form_opened');
};


profileButton.addEventListener('click', popupFormOpen);
ButtonCloseForm.addEventListener('click', popupFormOpen);

