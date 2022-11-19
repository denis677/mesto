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
        popupSelectors
      } from '../scripts/utils/CardsArray.js';
import { Card } from '../scripts/components/Сard.js';
import { FormValidator } from '../scripts/components/FormValidator.js';
import Section from '../scripts/components/Section.js';
import Popup from '../scripts/components/Popup.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import UserUnfo from '../scripts/components/UserUnfo.js';
import './index.css';

//! Функция создания карточек

function handleCardClick(name, link) {
  cardPopup.open(name, link);
};

function createCard(data) {
  const card = new Card(data, '#form-elements', handleCardClick);
  const cardElement = card.generateCard();
  return cardElement;
}

const getCard = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = createCard(item);
    getCard.addItem(card);
  }
  }, containerConfig);
  getCard.renderItem();


  const cardPopup = new PopupWithImage(popupSelectors.popupImage);
  cardPopup.setEventListeners();

const userInfo = new UserUnfo(userInfoConfig);


const popupProfile = new PopupWithForm(
    popupSelectors.popupEdit,
    validationConfig,
    {callbackSubmit: (ProfileinputValue) => {
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
      getCard.addItemPrepend(createCard({obj}));
    }
  }
);
popupAddCard.setEventListeners();

profileButton.addEventListener("click", () => {
  formClean(popupForm);
  popupAddCard.open();
});

// formCreate.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const cardRender = createCard({
//     name: theNameInput.value,
//     link: linkInput.value,
//   });
//   itemListWrapper.prepend(cardRender);
//   theNameInput.value = "";
//   linkInput.value = "";
//   popupButtonSaveForm.setAttribute('disabled', true);
// });


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