const buttonEdit = document.querySelector(".profile__edit-button");
const popupEdit = document.querySelector(".popup");
const buttonClose = document.querySelector(".popup__close");

function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener('keydown', closeByEscape); 
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener('keydown', closeByEscape);
}

const formEditElement = document.querySelector(".popup__form");
const buttonEditSave = document.querySelector(".popup__submit-button");
const divElementTitle = document.querySelector(".profile__title");
const divElementSubtitle = document.querySelector(".profile__subtitle");
const authorInput = document.querySelector(".popup__field-author");
const nameInput = document.querySelector(".popup__field-name");

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  divElementTitle.textContent = authorInput.value;
  divElementSubtitle.textContent = nameInput.value;
  authorInput.value = "Жак-Ив Кусто";
  nameInput.value = "Исследователь океана";
}

formEditElement.addEventListener("submit", handleProfileFormSubmit);
buttonEdit.addEventListener("click", () => {
  openPopup(popupEdit);
});
buttonClose.addEventListener("click", () => {
  closePopup(popupEdit);
});

buttonEditSave.addEventListener("click", () => {
  closePopup(popupEdit);
});
// sdad

const profileButton = document.querySelector(".profile__button");
const popupForm = document.querySelector(".popup-form");
const buttonCloseForm = document.querySelector(".popup-form__close");
const popupButtonSaveForm = document.querySelector(
  ".popup-form__submit-button"
);

profileButton.addEventListener("click", () => {
  openPopup(popupForm);
});
buttonCloseForm.addEventListener("click", () => {
  closePopup(popupForm);
});


const itemListWrapper = document.querySelector(".elements");
const template = document.getElementById("form-elements");
const formCreate = document.querySelector(".popup-form__form");
const theNameInput = document.querySelector(".popup-form__field-author");
const linkInput = document.querySelector(".popup-form__field-name");

const popupImage = document.querySelector(".popup-image");
const popupImageClose = document.querySelector(".popup-image__close");

popupImageClose.addEventListener("click", () => {
  closePopup(popupImage);
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
  newItemImage.alt = element.name;
  function likeActive() {
    newItemlike.classList.toggle("elements__like_active");
  }
  newItemlike.addEventListener("click", likeActive);
  function buttonDelete(evt) {
    evt.target.closest(".elements__element").remove();
  }
  newItemDelete.addEventListener("click", buttonDelete);
  newItemImage.addEventListener("click", () => {
    openPopup(popupImage);
    const popupImageContainer = (document.querySelector(
      ".popup-image__container"
    ).style = `background-image:url(${element.link})`);
    const popupTitle = (document.querySelector(
      ".popup-image__edit-popup"
    ).textContent = element.name);
  });
  return newItemElement;
}

initialCards.forEach((element) => {
  const cardCreateMain = createCard(element);
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

popupImage.addEventListener('click', (e) => {
  if (e.target === popupImage) {
    closePopup(popupImage);
  }
});

function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(popupEdit);
    closePopup(popupForm);
    closePopup(popupImage);
  }
}
