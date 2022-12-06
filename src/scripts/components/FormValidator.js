export class FormValidator {
  constructor(config, form) {
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._form = form;
    this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
    this.buttonElement = this._form.querySelector(this._submitButtonSelector);
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._form.querySelector(`.${inputElement.name}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  };

  _hideInputError(inputElement) {
    const errorElement = this._form.querySelector(`.${inputElement.name}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  };

  _checkInputValidity(inputElement) {
  if (!inputElement.validity.valid) {
    const errorMessage = inputElement.validationMessage;
    this._showInputError(inputElement, errorMessage);
  } else {
    this._hideInputError(inputElement);
  }
};

  _hasInvalidInput(inputList) {
    return this._inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  }); 
}

  toggleButtonState(inputList) {
    if (this._hasInvalidInput(inputList)) {
      this.buttonElement.classList.add(this._inactiveButtonClass);
      this.buttonElement.setAttribute('disabled', true);
      this.buttonElement.style.pointerEvents = 'none';
    } else {
      this.buttonElement.classList.remove(this._inactiveButtonClass);
      this.buttonElement.removeAttribute('disabled');
      this.buttonElement.style.pointerEvents = 'auto';
    } 
}

resetValidation() {
  this.toggleButtonState();

  this._inputList.forEach((inputElement) => {
    this._hideInputError(inputElement);
  })
}

_setEventListeners(inputList) {
  
  inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this.toggleButtonState(inputList);
      });
    });
}

  enableValidation(){
    this._setEventListeners(this._inputList);
};

checkValid () {
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
      this.toggleButtonState(this._inputList);
    });
  };

}