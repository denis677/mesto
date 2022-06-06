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
    popupImageContainer.style = `background-image:url(${element.link})`;
    popupTitle.textContent = element.name;
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
  popupButtonSaveForm.classList.add('popup-form__submit-button_disabled');
  popupButtonSaveForm.setAttribute('disabled', true);
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
