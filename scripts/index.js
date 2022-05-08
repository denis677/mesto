


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



const itemListWrapper = document.querySelector('.elements');
const template = document.getElementById('form-elements');
const form = document.querySelector('.popup-form__form');
let theNameInput = document.querySelector('.popup-form__field-author');
let linkInput = document.querySelector('.popup-form__field-name');

let popupImage = document.querySelector('.popup-image');
let popupImageClose = document.querySelector('.popup-image__close');


popupImageClose.onclick = (evt) => {
  popupImage.classList.remove('popup-image_opened');
}

initialCards.forEach(function (element) {
  const newItemElement = template.content.cloneNode(true);
  let newItemTitle = newItemElement.querySelector('.elements__title');
  let newItemImage = newItemElement.querySelector('.elements__mask-group');
  let newItemElentss = newItemElement.querySelector('.elements__element');
  let newItemGroup = newItemElement.querySelector('.elements__group');
  const newItemlike = newItemElement.querySelector('.elements__like');
  const newItemDelete = newItemElement.querySelector('.elements__delete');
  itemListWrapper.append(newItemElement);
  newItemTitle.textContent = element.name;
  newItemImage.src = element.link;
  newItemlike.onclick = () => {
    newItemlike.classList.toggle('elements__like_active');
  }
  newItemDelete.onclick = (evt) => {
    evt.target.closest('.elements__element').remove();
  };
  newItemImage.onclick = (evt) => {
    popupImage.classList.add('popup-image_opened');
    let popupImageContainer = document.querySelector('.popup-image__container').style = `background-image:url(${element.link})`;
    let popupTitle = document.querySelector('.popup-image__edit-popup').textContent = element.name;
    console.dir(evt.target);
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const newItemElement = template.content.cloneNode(true);
  let newItemTitle = newItemElement.querySelector('.elements__title').textContent = theNameInput.value;
  let newItemImage = newItemElement.querySelector('.elements__mask-group').src = linkInput.value;
  let newItemElentss= newItemElement.querySelector('.elements__element');
  let newItemGroup = newItemElement.querySelector('.elements__group');
  const newItemlike = newItemElement.querySelector('.elements__like');
  const newItemDelete = newItemElement.querySelector('.elements__delete');
  itemListWrapper.prepend(newItemElement);
  newItemlike.onclick = () => {
    newItemlike.classList.toggle('elements__like_active');
  };
  newItemDelete.onclick = (evt) => {
    evt.target.closest('.elements__element').remove();
  };
  newItemImage.onclick = () => {
    popupImage.classList.add('popup-image_opened');
    let popupImageContainer = document.querySelector('.popup-image__container').style = `background-image:url(${element.link})`;
    let popupTitle = document.querySelector('.popup-image__edit-popup').textContent = element.name;
    console.dir(evt.target);
  }
});





