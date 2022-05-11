const buttonEdit = document.querySelector(".profile__edit-button");
const popupEdit = document.querySelector(".popup");
const ButtonClose = document.querySelector(".popup__close");

function openAndClosePopup(popup) {
  popup.classList.toggle("popup_opened");
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
buttonEdit.addEventListener("click", () => {
  openAndClosePopup(popupEdit);
});
ButtonClose.addEventListener("click", () => {
  openAndClosePopup(popupEdit);
});

// sdad

const profileButton = document.querySelector(".profile__button");
const popupForm = document.querySelector(".popup-form");
const ButtonCloseForm = document.querySelector(".popup-form__close");
const popupButtonSaveForm = document.querySelector(
  ".popup-form__submit-button"
);

profileButton.addEventListener("click", () => {
  openAndClosePopup(popupForm);
});
ButtonCloseForm.addEventListener("click", () => {
  openAndClosePopup(popupForm);
});
popupButtonSaveForm.addEventListener("click", () => {
  openAndClosePopup(popupForm);
});

const itemListWrapper = document.querySelector(".elements");
const template = document.getElementById("form-elements");
const formCreate = document.querySelector(".popup-form__form");
const theNameInput = document.querySelector(".popup-form__field-author");
const linkInput = document.querySelector(".popup-form__field-name");

const popupImage = document.querySelector(".popup-image");
const popupImageClose = document.querySelector(".popup-image__close");

popupImageClose.addEventListener("click", () => {
  openAndClosePopup(popupImage);
});

function createCard(element) {
  const newItemElement = template.content.cloneNode(true);
  const newItemTitle = newItemElement.querySelector(".elements__title");
  const newItemImage = newItemElement.querySelector(".elements__mask-group");
  const newItemElentss = newItemElement.querySelector(".elements__element");
  const newItemGroup = newItemElement.querySelector(".elements__group");
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
    popupImage.classList.toggle("popup_opened");
    const popupImageContainer = (document.querySelector(
      ".popup-image__container"
    ).style = `background-image:url(${element.link})`);
    const popupTitle = (document.querySelector(
      ".popup-image__edit-popup"
    ).textContent = element.name);
    console.dir(evt.target);
  }
  newItemImage.addEventListener("click", popupImageOpen);
  return newItemElement;
}

initialCards.forEach((element) => {
  const cardCreateMain = createCard(element);
  itemListWrapper.append(cardCreateMain);
});

// function renderCard() {
//   const newItemElement = template.content.cloneNode(true);
//   const newItemTitle = newItemElement.querySelector(".elements__title");
//   const newItemImage = newItemElement.querySelector(".elements__mask-group");
//   const newItemElentss = newItemElement.querySelector(".elements__element");
//   const newItemGroup = newItemElement.querySelector(".elements__group");
//   const newItemlike = newItemElement.querySelector(".elements__like");
//   const newItemDelete = newItemElement.querySelector(".elements__delete");
//   newItemTitle.textContent = theNameInput.value;
//   newItemImage.src = linkInput.value;
//   itemListWrapper.prepend(newItemElement);
//   function likeActive() {
//     newItemlike.classList.toggle("elements__like_active");
//   }
//   newItemlike.addEventListener("click", likeActive);
//   function buttonDelete(evt) {
//     evt.target.closest(".elements__element").remove();
//   }
//   newItemDelete.addEventListener("click", buttonDelete);
//   function popupImageOpen(evt) {
//     popupImage.classList.toggle("popup-image_opened");
//     const popupImageContainer = (document.querySelector(
//       ".popup-image__container"
//     ).style = `background-image:url(${linkInput.value})`);
//     const popupTitle = (document.querySelector(
//       ".popup-image__edit-popup"
//     ).textContent = theNameInput.value);
//     console.dir(evt.target);
//   }
//   newItemImage.addEventListener("click", popupImageOpen);
//   return newItemElement;
// }

formCreate.addEventListener("submit", (e) => {
  e.preventDefault();
  const cardRender = createCard({
    name: theNameInput.value,
    link: linkInput.value,
  });
  itemListWrapper.prepend(cardRender);
  openAndClosePopup(popupForm);
});
