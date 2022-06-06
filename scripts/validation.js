const config = {
  formSelector: '.form',
  inputSelector: '.input',
  submitButtonSelector: '.submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup-form__input_type_error',
  errorClass: 'popup-form__input-error-visible'
};

const showInputError = (formElement, inputElement, errorMessage, validConfig) => {
  const errorElement = formElement.querySelector(`.${inputElement.name}-error`);
  inputElement.classList.add(validConfig.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(validConfig.errorClass);
};

const hideInputError = (formElement, inputElement, validConfig) => {
  const errorElement = formElement.querySelector(`.${inputElement.name}-error`);
  inputElement.classList.remove(validConfig.inputErrorClass);
  errorElement.classList.remove(validConfig.errorClass);
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement, validConfig) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, validConfig);
  } else {
    hideInputError(formElement, inputElement, validConfig);
  }
};

const setEventListeners = (formElement, validConfig) => {
  const inputList = Array.from(formElement.querySelectorAll(validConfig.inputSelector));
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(formElement, inputElement, validConfig);
      toggleButtonState(formElement, inputList, validConfig);
    });
  });
};

const enableValidation = (validConfig) => {
  const formList = Array.from(document.querySelectorAll(validConfig.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
      setEventListeners(formElement, validConfig);
    }); 
};


enableValidation(config);



function hasInvalidInput (inputList) {
  return inputList.some((inputElement) => {
  return !inputElement.validity.valid;
}); 
}

const toggleButtonState = (formElement, inputList, validConfig) => {
  const buttonElement = formElement.querySelector(validConfig.submitButtonSelector);
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(validConfig.inactiveButtonClass);
    buttonElement.setAttribute('disabled', true);
    buttonElement.style.pointerEvents = 'none';
  } else {
    buttonElement.classList.remove(validConfig.inactiveButtonClass);
    buttonElement.removeAttribute('disabled');
    buttonElement.style.pointerEvents = 'auto';
  } 
}