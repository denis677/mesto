/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";var e={formSelector:".form",inputSelector:".input",submitButtonSelector:".submit-button",inactiveButtonClass:"popup__submit-button_disabled",inputErrorClass:"popup-form__input_type_error",errorClass:"popup-form__input-error-visible"},t=document.querySelector(".profile__edit-button"),n=document.querySelector(".profile-popup"),r=(n.querySelector(".profile-close"),document.querySelector(".profile-form"),document.querySelector(".profile-submit-button"),document.querySelector(".profile__title"),document.querySelector(".profile__subtitle"),document.querySelector(".profile-field-auhtor")),o=document.querySelector(".profile-field-name"),i=(document.querySelector(".popup-new-avatar__field-link"),document.querySelector(".popup-new-avatar")),c=document.querySelector(".profile__button"),u=document.querySelector(".card-popup"),a=(document.querySelector(".card-close"),document.querySelector(".card-submit-button")),l=(document.querySelector(".elements"),document.getElementById("form-elements"),document.querySelector(".card-form"),document.querySelector(".card-field-auhtor"),document.querySelector(".card-field-name"),document.querySelector(".image-popup"),document.querySelector(".image-close"),document.querySelector(".image-container"),document.querySelector(".image-edit-popup"),document.querySelector(".popup-delete"),document.querySelector(".popup-delete__button")),s=(document.querySelector(".profile__avatar"),document.querySelector(".profile__hover-position")),f={},p={buttonHeartClassActive:"elements__like_active"};function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d=function(){function e(t,n,r,o,i,c,u){var a,l,s=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),l=function(e){s.likes=e,s.giveClickLike()},(a="updateLikes")in this?Object.defineProperty(this,a,{value:l,enumerable:!0,configurable:!0,writable:!0}):this[a]=l,this.name=t.name,this.link=t.link,this._id=t._id,this.config=r,this.userId=c,this.cardOwnerId=t.owner._id,this.likes=t.likes,this.handleCardClick=o,this.handleDeleteClick=i,this.handleLikeClick=u,this._cardSelector=n}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".elements__element").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._like=this._element.querySelector(".elements__like"),this._setEventListeners(),this._element.querySelector(".elements__mask-group").src="".concat(this.link),this._element.querySelector(".elements__mask-group").alt="".concat(this.name),this._element.querySelector(".elements__title").textContent=this.name,this.trash=this._element.querySelector(".elements__delete"),this.likeNumber=this._element.querySelector(".elements__numbers"),this.giveClickLike(),this.isMine(),this._element}},{key:"giveClickLike",value:function(){this.likeNumber.textContent=this.likes.length,this._like.classList.toggle(this.config.buttonHeartClassActive,this.isLiked())}},{key:"isLiked",value:function(){var e=this;return this.likes.some((function(t){return t._id===e.userId}))}},{key:"isMine",value:function(){this.userId!==this.cardOwnerId&&this.trash.remove()}},{key:"deleteCard",value:function(){this._element.closest(".elements__element").remove(),this._element=null}},{key:"_setEventListeners",value:function(){var e=this;this._like.addEventListener("click",(function(){e.handleLikeClick(e._id,e.isLiked(),e.updateLikes)})),this._element.querySelector(".elements__mask-group").addEventListener("click",(function(){e.handleCardClick(e.name,e.link)})),this._element.querySelector(".elements__delete").addEventListener("click",(function(){e.handleDeleteClick(e._id)}))}}])&&h(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var m=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._form=n,this._inputList=Array.from(this._form.querySelectorAll(this._inputSelector)),this.buttonElement=this._form.querySelector(this._submitButtonSelector)}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e,t){var n=this._form.querySelector(".".concat(e.name,"-error"));e.classList.add(this._inputErrorClass),n.textContent=t,n.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){var t=this._form.querySelector(".".concat(e.name,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"_checkInputValidity",value:function(e){if(e.validity.valid)this._hideInputError(e);else{var t=e.validationMessage;this._showInputError(e,t)}}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"toggleButtonState",value:function(e){this._hasInvalidInput(e)?(this.buttonElement.classList.add(this._inactiveButtonClass),this.buttonElement.setAttribute("disabled",!0),this.buttonElement.style.pointerEvents="none"):(this.buttonElement.classList.remove(this._inactiveButtonClass),this.buttonElement.removeAttribute("disabled"),this.buttonElement.style.pointerEvents="auto")}},{key:"resetValidation",value:function(){var e=this;this.toggleButtonState(),this._inputList.forEach((function(t){e._hideInputError(t)}))}},{key:"_setEventListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e.toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners(this._inputList)}},{key:"checkValid",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t),e.toggleButtonState(e._inputList)}))}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var v=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.renderer=r,this._container=document.querySelector(n.container)}var t,n;return t=e,(n=[{key:"renderItem",value:function(e){var t=this;e.forEach((function(e){return t.renderer(e)}))}},{key:"addItem",value:function(e){this._container.append(e)}},{key:"addItemPrepend",value:function(e){this._container.prepend(e)}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var k=function(){function e(t){var n,r,o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(e){(e.target===e.currentTarget||e.target.classList.contains("close"))&&o.close()},(n="_handleOverlayAndButtonClose")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this.popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this.popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this.popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){this.popup.addEventListener("mousedown",this._handleOverlayAndButtonClose)}}])&&_(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(){return w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=E(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},w.apply(this,arguments)}function E(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=L(e)););return e}function O(e,t){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},O(e,t)}function C(e,t){if(t&&("object"===g(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function L(e){return L=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},L(e)}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&O(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=L(r);if(o){var n=L(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return C(this,e)});function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=i.call(this,e)).popupImageContainer=document.querySelector(".image-container"),t.popupImag=document.querySelector(".image-popup__image"),t.popTitle=document.querySelector(".image-edit-popup"),t}return t=c,(n=[{key:"open",value:function(e,t){this.popupImag.alt=e,this.popupImag.src=t,this.popTitle.textContent=e,w(L(c.prototype),"open",this).call(this)}}])&&S(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(k);function q(e){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q(e)}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function I(){return I="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=R(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},I.apply(this,arguments)}function R(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=U(e)););return e}function T(e,t){return T=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},T(e,t)}function A(e,t){if(t&&("object"===q(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return B(e)}function B(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function U(e){return U=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},U(e)}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var D=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&T(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=U(r);if(o){var n=U(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return A(this,e)});function c(e,t,n){var r,o=n.callbackSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),x(B(r=i.call(this,e)),"_getInputValues",(function(){var e={};return r._inputList.forEach((function(t){e[t.name.slice(6)]=t.value})),e})),x(B(r),"_setValues",(function(e){e.preventDefault(),r._callBackSubmit(r._getInputValues())})),r._callBackSubmit=o,r._popupForm=r.popup.querySelector(t.formSelector),r._inputList=Array.from(r._popupForm.querySelectorAll(t.inputSelector)),r._buttonSubmit=r._popupForm.querySelector(t.submitButtonSelector),r._buttonDefaultText=r._buttonSubmit.textContent,r}return t=c,(n=[{key:"setEventListeners",value:function(){I(U(c.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",this._setValues)}},{key:"close",value:function(){I(U(c.prototype),"close",this).call(this),this._popupForm.reset()}},{key:"renderLoading",value:function(e){this._buttonSubmit.textContent=e?"Загрузка...":this._buttonDefaultText}}])&&P(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(k);function V(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var N=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(t.nameSelector),this._about=document.querySelector(t.aboutSelector),this._avatar=document.querySelector(t.avatarSelector)}var t,n;return t=e,(n=[{key:"setUserInfo",value:function(e){this._name.textContent=e.name,this._about.textContent=e.about,this._avatar.src=e.avatar,this.userId=e._id}},{key:"setAvatar",value:function(e){this._avatar.src=e.link,this._avatar.alt=e.name}},{key:"getUserInfo",value:function(){return{name:this._name.textContent,about:this._about.textContent,avatar:this._avatar.src,userId:this.userId}}}])&&V(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function F(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var H=function(){function e(t){var n=t.baseUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.baseUrl=n,this.headers=r}var t,n;return t=e,(n=[{key:"_checkResponse",value:function(e){return e.ok?(console.log("Данные получены"),e.json()):Promise.reject("Ошибка: ".concat(e.status))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this.baseUrl,"/cards"),{headers:this.headers}).then((function(t){return e._checkResponse(t)}))}},{key:"addCard",value:function(e){var t=this,n=e.name,r=e.link;return fetch("".concat(this.baseUrl,"/cards"),{headers:this.headers,method:"POST",body:JSON.stringify({name:n,link:r})}).then((function(e){return t._checkResponse(e)}))}},{key:"deleteCard",value:function(e){var t=this;return console.log("".concat(this.baseUrl,"/cards/").concat(e)),fetch("".concat(this.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this.headers}).then((function(e){return t._checkResponse(e)}))}},{key:"getDataUser",value:function(){var e=this;return fetch("".concat(this.baseUrl,"/users/me"),{headers:this.headers}).then((function(t){return e._checkResponse(t)}))}},{key:"editDataUser",value:function(e){var t=this,n=e.name,r=e.about;return fetch("".concat(this.baseUrl,"/users/me"),{method:"PATCH",headers:this.headers,body:JSON.stringify({name:n,about:r})}).then((function(e){return t._checkResponse(e)}))}},{key:"editAvatar",value:function(e){var t=this,n=e.link;return fetch("".concat(this.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this.headers,body:JSON.stringify({avatar:n})}).then((function(e){return t._checkResponse(e)}))}},{key:"getLikeCard",value:function(e){var t=this;return fetch("".concat(this.baseUrl,"/cards/").concat(e,"/likes"),{headers:this.headers,method:"PUT"}).then((function(e){return t._checkResponse(e)}))}},{key:"deleteLike",value:function(e){var t=this;return fetch("".concat(this.baseUrl,"/cards/").concat(e,"/likes"),{headers:this.headers,method:"DELETE"}).then((function(e){return t._checkResponse(e)}))}}])&&F(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function M(e){return M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},M(e)}function J(e,t){return J=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},J(e,t)}function z(e,t){if(t&&("object"===M(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function $(e){return $=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},$(e)}var G=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&J(e,t)}(i,e);var t,n,r,o=(n=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=$(n);if(r){var o=$(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return z(this,e)});function i(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),o.call(this,e)}return t=i,Object.defineProperty(t,"prototype",{writable:!1}),t}(k);function K(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Q=new H({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-54",headers:{authorization:"c38f4f24-04a4-4306-9cb4-8e1863b21959","Content-Type":"application/json"}}),W=new G(".popup-delete",e);W.setEventListeners();var X=new j(".image-popup");X.setEventListeners();var Y=new N({nameSelector:".profile__title",aboutSelector:".profile__subtitle",avatarSelector:".profile__avatar"});function Z(e,t){X.open(e,t)}function ee(e){var t=this;W.open(),l.onclick=function(){Q.deleteCard(e).then((function(){t.deleteCard(),W.close()})).catch((function(e){return console.log("Ошибка при удалении карточки: ".concat(e))}))}}function te(e){return new d(e,"#form-elements",p,Z,ee,Y.getUserInfo().userId,ne).generateCard()}function ne(e,t,n){t?Q.deleteLike(e).then((function(e){n(e.likes)})).catch((function(e){return console.log("Ошибка при удалении карточки: ".concat(e))})):Q.getLikeCard(e).then((function(e){n(e.likes)})).catch((function(e){return console.log("Ошибка при удалении карточки: ".concat(e))}))}Promise.all([Q.getDataUser(),Q.getInitialCards()]).then((function(e){var t,n,i=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],c=!0,u=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);c=!0);}catch(e){u=!0,o=e}finally{try{c||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return K(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?K(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=i[0],u=i[1];Y.setUserInfo(c);var a=Y.getUserInfo();r.value=a.name,o.value=a.about,re.renderItem(u)})).catch((function(e){return console.log(e)}));var re=new v({renderer:function(e){var t=te(e);re.addItem(t)}},{container:".elements"}),oe=new D(".profile-popup",e,{callbackSubmit:function(e){oe.renderLoading(!0),Q.editDataUser({name:e.author,about:e.title}).then((function(e){Y.setUserInfo(e),oe.close()})).catch((function(e){return console.log(e)})).finally((function(){oe.renderLoading(!1)}))}});oe.setEventListeners(),t.addEventListener("click",(function(){var e=Y.getUserInfo();r.value=e.name,o.value=e.about,ue(n),oe.open()}));var ie=new D(".card-popup",e,{callbackSubmit:function(e){ie.renderLoading(!0),Q.addCard({name:e.name,link:e.link}).then((function(e){re.addItemPrepend(te(e)),ie.close()})).catch((function(e){return console.log("Ошибка при добавлении карточки: ".concat(e))})).finally((function(){ie.renderLoading(!1)}))}});ie.setEventListeners(),c.addEventListener("click",(function(){ue(u),ie.open()}));var ce=new D(".popup-new-avatar",e,{callbackSubmit:function(e){console.log(e.link),ce.renderLoading(!0),Q.editAvatar({link:e.link}).then((function(){Y.setAvatar({link:e.link}),ce.close()})).catch((function(e){return console.log("Ошибка при добавлении карточки: ".concat(e))})).finally((function(){ce.renderLoading(!1)}))}});ce.setEventListeners(),s.addEventListener("click",(function(){ue(i),ce.open()})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){var n=new m(e,t),r=t.getAttribute("name");a.setAttribute("disabled",!0),f[r]=n,n.enableValidation()}))}(e);var ue=function(t){var n=t.querySelector(e.formSelector);f[n.name].checkValid()}})();
//# sourceMappingURL=main.js.map