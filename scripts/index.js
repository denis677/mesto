


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