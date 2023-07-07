/* Попап Edit и форма содержащая поля ввода */

const popupEdit = document.querySelector('.popup_type_edit');
const formElement = document.querySelector('form');

/* Проверка на наличие класса "popup_opened" */

let isHidden = popupEdit.classList.contains('popup_opened');

/* Переменные для полей ввода формы */

let nameInput = formElement.querySelector('.popup__input_type_name');
let jobInput = formElement.querySelector('.popup__input_type_job');

/* Переменные для полей профиля */

let nameField = document.querySelector('.profile__name');
let jobField = document.querySelector('.profile__job');

/* Нажатие на кнопку Edit */

const buttonEdit = document.querySelector('.profile__edit');
buttonEdit.addEventListener('click', popupOpen);

/* Нажатие на кнопку Close */

const buttonClose = popupEdit.querySelector('.popup__close');
buttonClose.addEventListener('click', popupClose);

/* Нажатие на кнопку Submit */

const buttonSubmit = popupEdit.querySelector('.popup__submit');
buttonSubmit.addEventListener('click', handleFormSubmit);

/* Функция открытия формы */

function popupOpen () {
  if (isHidden == false) {
    popupEdit.classList.toggle('popup_opened');
    nameInput.value = nameField.textContent;
    jobInput.value = jobField.textContent;
  }
}

/* Функция закрытия формы */

function popupClose () {
  popupEdit.classList.toggle('popup_opened');
}

/* Функция отправки формы */

function handleFormSubmit (evt) {
  evt.preventDefault();
  popupClose ();
  nameField.textContent = nameInput.value;
  jobField.textContent = jobInput.value;
};