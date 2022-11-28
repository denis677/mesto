import { initialCards,
        validationConfig,
        buttonEdit,
        popupEdit,
        buttonClose,
        formEditElement,
        buttonEditSave,
        divElementTitle,
        divElementSubtitle,
        authorInput,
        nameInput,
        profileButton,
        popupForm,
        buttonCloseForm,
        popupButtonSaveForm,
        itemListWrapper,
        template,
        formCreate,
        theNameInput,
        linkInput,
        popupImage,
        popupImageClose,
        popupImageContainer,
        popupTitle,
        formValidators,
        containerConfig,
        userInfoConfig,
        popupSelectors,
        popupDeleteSelector,
        popupDeleteButton
      } from '../scripts/utils/CardsArray.js';
import { Card } from '../scripts/components/Сard.js';
import { FormValidator } from '../scripts/components/FormValidator.js';
import Section from '../scripts/components/Section.js';
import Popup from '../scripts/components/Popup.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import UserUnfo from '../scripts/components/UserUnfo.js';
import './index.css';
import Api from '../scripts/components/Api.js';
import PopupWithDelete from '../scripts/components/PopupWithDelete.js';
import { apiConfig } from '../scripts/utils/CardsArray.js';
import { apiConfigUser } from '../scripts/utils/CardsArray.js';

const cardApi = new Api(apiConfig);
const userApi = new Api(apiConfigUser);

//! Функция создания карточек

function handleCardClick(name, link) {
  cardPopup.open(name, link);
};

function handleDeleteClick() {
  popupDelete.open()
  popupDeleteButton.onclick = () => {
    this.deleteCard();
    popupDelete.close();
  }
}

function createCard(data) {
  const card = new Card(data, '#form-elements', handleCardClick, handleDeleteClick);
  const cardElement = card.generateCard();
  return cardElement;
}

const getCard = new Section({
  renderer: (items) => {
    const card = createCard(items);
    getCard.addItem(card);
  }
}, containerConfig);

cardApi.getInitialCards()
  .then((items) => {
    console.log("sdad", items);
    getCard.renderItem(items);
  })
  .catch((error) => console.log(error))

  const popupDelete = new PopupWithDelete(popupSelectors.popupDelete);
  popupDelete.setEventListeners();

  const cardPopup = new PopupWithImage(popupSelectors.popupImage);
  cardPopup.setEventListeners();

const userInfo = new UserUnfo(userInfoConfig);


const popupProfile = new PopupWithForm(
    popupSelectors.popupEdit,
    validationConfig,
    {callbackSubmit: (ProfileinputValue) => {
      // userApi.getDataUser();
      userInfo.setUserInfo(ProfileinputValue);
    }
  }
);

popupProfile.setEventListeners();

buttonEdit.addEventListener("click", () => {
  const currentUserInfo = userInfo.getUserInfo();
  authorInput.value = currentUserInfo.name;
  nameInput.value = currentUserInfo.about;
  formClean(popupEdit);
  popupProfile.open();
})

  // ! попуп форм

const popupAddCard = new PopupWithForm(
  popupSelectors.popupForm,
  validationConfig,
  {callbackSubmit: (obj) => {
    console.log(obj);
    cardApi.addCard(obj)
      .then((newItemData) => {
        console.log(newItemData);
        // const cardItem = createCard(newItemData);
        // getCard.addItemPrepend(createCard(cardItem));
      })
      .catch((error) => console.log(`Ошибка при добавлении карточки: ${error}`))
  }
});
popupAddCard.setEventListeners();
profileButton.addEventListener("click", () => {
  formClean(popupForm);
  popupAddCard.open();
});

//! Включение валидации
const enableValidation = (validationConfig) => {
  const formList = Array.from(document.querySelectorAll(validationConfig.formSelector))
  formList.forEach((formElement) => {
    const validator = new FormValidator(validationConfig, formElement)
//! получаем данные из атрибута `name` у формы
    const formName = formElement.getAttribute('name')
    popupButtonSaveForm.setAttribute('disabled', true);
   //! вот тут в объект записываем под именем формы
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};

enableValidation(validationConfig);

const formClean = (popup) => {
  const form = popup.querySelector(validationConfig.formSelector);
  formValidators[form.name].checkValid();
};
