const buttonEdit = document.querySelector(".profile__edit-button");
const popupEdit = document.querySelector(".popup");
const ButtonClose = document.querySelector(".popup__close");

function openAndClosePopup() {
  popupEdit.classList.toggle("popup_opened");
}

const formEditElement = document.querySelector(".popup__form");
const buttonEditSave = document.querySelector(".popup__submit-button");
const divElementTitle = document.querySelector(".profile__title");
const divElementSubtitle = document.querySelector(".profile__subtitle");
const authorInput = document.querySelector(".popup__field-author");
const nameInput = document.querySelector(".popup__field-name");

function formSubmitEditHandler(evt) {
  evt.preventDefault();
  divElementTitle.textContent = authorInput.value;
  divElementSubtitle.textContent = nameInput.value;
}

formEditElement.addEventListener("submit", formSubmitEditHandler);
buttonEdit.addEventListener("click", openAndClosePopup);
ButtonClose.addEventListener("click", openAndClosePopup);
buttonEditSave.addEventListener("click", openAndClosePopup);

// sdad

let profileButton = document.querySelector(".profile__button");
let popupForm = document.querySelector(".popup-form");
let ButtonCloseForm = document.querySelector(".popup-form__close");
let popupButtonSaveForm = document.querySelector(".popup-form__submit-button");

function popupFormOpen() {
  popupForm.classList.toggle("popup-form_opened");
}

profileButton.addEventListener("click", popupFormOpen);
ButtonCloseForm.addEventListener("click", popupFormOpen);
popupButtonSaveForm.addEventListener("click", popupFormOpen);

const itemListWrapper = document.querySelector(".elements");
const template = document.getElementById("form-elements");
const formCreate = document.querySelector(".popup-form__form");
let theNameInput = document.querySelector(".popup-form__field-author");
let linkInput = document.querySelector(".popup-form__field-name");

let popupImage = document.querySelector(".popup-image");
let popupImageClose = document.querySelector(".popup-image__close");

function popupImageOpen() {
  popupImage.classList.toggle("popup-image_opened");
}

popupImageClose.addEventListener("click", popupImageOpen);

const likeActive = (evt) => {
  evt.target.classList.toggle("elements__like_active");
};

const buttonDelete = (evt) => {
  evt.target.closest(".elements__element").remove();
};

function createCard(element) {
  const newItemElement = template.content.cloneNode(true);
  let newItemTitle = newItemElement.querySelector(".elements__title");
  let newItemImage = newItemElement.querySelector(".elements__mask-group");
  let newItemElentss = newItemElement.querySelector(".elements__element");
  let newItemGroup = newItemElement.querySelector(".elements__group");
  const newItemlike = newItemElement.querySelector(".elements__like");
  const newItemDelete = newItemElement.querySelector(".elements__delete");
  newItemTitle.textContent = element.name;
  newItemImage.src = element.link;
  function likeActive() {
    newItemlike.classList.toggle("elements__like_active");
  }
  newItemlike.addEventListener("click", likeActive);
  function buttonDelete(evt) {
    evt.target.closest(".elements__element").remove();
  }
  newItemDelete.addEventListener("click", buttonDelete);
  function popupImageOpen(evt) {
    popupImage.classList.toggle("popup-image_opened");
    let popupImageContainer = (document.querySelector(
      ".popup-image__container"
    ).style = `background-image:url(${element.link})`);
    let popupTitle = (document.querySelector(
      ".popup-image__edit-popup"
    ).textContent = element.name);
    console.dir(evt.target);
  }
  newItemImage.addEventListener("click", popupImageOpen);
  return newItemElement;
}

initialCards.forEach(function (element) {
  createCard(element);
  itemListWrapper.append(createCard(element));
});

function renderCard() {
  const newItemElement = template.content.cloneNode(true);
  let newItemTitle = newItemElement.querySelector(".elements__title");
  let newItemImage = newItemElement.querySelector(".elements__mask-group");
  let newItemElentss = newItemElement.querySelector(".elements__element");
  let newItemGroup = newItemElement.querySelector(".elements__group");
  const newItemlike = newItemElement.querySelector(".elements__like");
  const newItemDelete = newItemElement.querySelector(".elements__delete");
  newItemTitle.textContent = theNameInput.value;
  newItemImage.src = linkInput.value;
  itemListWrapper.prepend(newItemElement);
  function likeActive() {
    newItemlike.classList.toggle("elements__like_active");
  }
  newItemlike.addEventListener("click", likeActive);
  function buttonDelete(evt) {
    evt.target.closest(".elements__element").remove();
  }
  newItemDelete.addEventListener("click", buttonDelete);
  function popupImageOpen(evt) {
    popupImage.classList.toggle("popup-image_opened");
    let popupImageContainer = (document.querySelector(
      ".popup-image__container"
    ).style = `background-image:url(${linkInput.value})`);
    let popupTitle = (document.querySelector(
      ".popup-image__edit-popup"
    ).textContent = theNameInput.value);
    console.dir(evt.target);
  }
  newItemImage.addEventListener("click", popupImageOpen);
  return newItemElement;
}

formCreate.addEventListener("submit", (e) => {
  e.preventDefault();
  renderCard();
});
