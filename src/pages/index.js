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
        popupDeleteButton,
        avatar,
        apiConfig,
        apiConfigEditUser,
        profileEdit,
        newAvatarInput,
        cardConfig
      } from '../scripts/utils/constants.js';
import { Card } from '../scripts/components/Сard.js';
import { FormValidator } from '../scripts/components/FormValidator.js';
import Section from '../scripts/components/Section.js';
import Popup from '../scripts/components/Popup.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import UserInfo from '../scripts/components/UserInfo.js';
import './index.css';
import Api from '../scripts/components/Api.js';
import PopupWithDelete from '../scripts/components/PopupWithDelete.js';

const cardApi = new Api(apiConfig);

const popupDelete = new PopupWithDelete(popupSelectors.popupDelete, validationConfig);
popupDelete.setEventListeners();

const cardPopup = new PopupWithImage(popupSelectors.popupImage);
cardPopup.setEventListeners();

const userInfo = new UserInfo(userInfoConfig);

function handleCardClick(name, link) {
  cardPopup.open(name, link);
};

function handleDeleteClick(cardId) {
  popupDelete.open()
  console.log(cardId);
  popupDeleteButton.onclick = () => {
    cardApi.deleteCard(cardId)
      .then(() => {
        console.log(cardId);
        this.deleteCard();
        popupDelete.close();
      })
      .catch((error) =>console.log(`Ошибка при удалении карточки: ${error}`))
    }
}

function createCard(data) {
  const card = new Card(data, '#form-elements', cardConfig, handleCardClick, handleDeleteClick, userInfo.getUserInfo().userId, handleLikeClick);
  const cardElement = card.generateCard();
  return cardElement;
}

function handleLikeClick(cardId, isLiked, updateLikes) {
  if(isLiked) {
    cardApi.getLikeCard(cardId)
      .then((arr) => {
        updateLikes(arr.likes);
        console.log("ЛАЙК СТАВЛЮ");
      })
      .catch((error) =>console.log(`Ошибка при удалении карточки: ${error}`))
  } else {
    cardApi.deleteLike(cardId)
      .then((arr) => {
        updateLikes(arr.likes);
        console.log("ЛАЙК Убираю");
      })
      .catch((error) =>console.log(`Ошибка при удалении карточки: ${error}`))
  }
}

Promise.all([cardApi.getDataUser(), cardApi.getInitialCards()])
  .then(([result, items]) => {
        userInfo.setUserInfo(result);
        const currentUserInfo = userInfo.getUserInfo();
        authorInput.value = currentUserInfo.name;
        nameInput.value = currentUserInfo.about;
        avatar.src = currentUserInfo.avatar;
        avatar._id = currentUserInfo.userId;
        getCard.renderItem(items);
  })
  .catch((error) => console.log(error))

const getCard = new Section({
  renderer: (items) => {
    const card = createCard(items);
    getCard.addItem(card);
  }
}, containerConfig);

const popupProfile = new PopupWithForm(
    popupSelectors.popupEdit,
    validationConfig,
    {callbackSubmit: (PopupInput) => {
      popupProfile.renderLoading(true);
      cardApi.editDataUser({name: PopupInput.author, about: PopupInput.title})
        .then((result) => {
          userInfo.setUserInfo(result);
          popupProfile.close();
        })
        .catch((error) => console.log(error))
        .finally(() => {
          popupProfile.renderLoading(false);
        })
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

const popupAddCard = new PopupWithForm(
  popupSelectors.popupForm,
  validationConfig,
  {callbackSubmit: (obj) => {
    popupAddCard.renderLoading(true);
    cardApi.addCard({name: obj.caption, link: obj.link})
      .then((newItemData) => {
        getCard.addItemPrepend(createCard(newItemData));
        popupAddCard.close();
      })
      .catch((error) => console.log(`Ошибка при добавлении карточки: ${error}`))
      .finally(() => {
        popupAddCard.renderLoading(false);
      })
  }
});
popupAddCard.setEventListeners();
profileButton.addEventListener("click", () => {
  formClean(popupForm);
  popupAddCard.open();
});

const popupEditAvatar = new PopupWithForm(
  popupSelectors.popupNewAvatar,
  validationConfig,
  {callbackSubmit: (obj) =>{
    console.log(obj.link);
    popupEditAvatar.renderLoading(true);
    cardApi.editAvatar({link: obj.link})
      .then(() => {
        userInfo.setAvatar({link: obj.link});
        popupEditAvatar.close();
      })
      .catch((error) => console.log(`Ошибка при добавлении карточки: ${error}`))
      .finally(() => {
        popupEditAvatar.renderLoading(false);
      })
  }}
);

popupEditAvatar.setEventListeners();

profileEdit.addEventListener('click', () => {
  popupEditAvatar.open();
})

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