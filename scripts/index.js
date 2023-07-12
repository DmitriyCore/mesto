/* Попап Edit и форма содержащая поля ввода */

const popupEdit = document.querySelector('.popup_type_edit');
const form = document.querySelector('.popup__info');

/* Переменные для полей ввода формы */

let nameInput = form.querySelector('.popup__input_type_name');
let jobInput = form.querySelector('.popup__input_type_job');

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

form.addEventListener('submit', popupSubmit);

/* Функция открытия формы */

function popupOpen () {
  popupEdit.classList.add('popup_opened');
  nameInput.value = nameField.textContent;
  jobInput.value = jobField.textContent;
}

/* Функция закрытия формы */

function popupClose () {
  popupEdit.classList.remove('popup_opened');
}

/* Функция отправки формы */

function popupSubmit (event) {
  event.preventDefault()
  popupClose ();
  nameField.textContent = nameInput.value;
  jobField.textContent = jobInput.value;
};