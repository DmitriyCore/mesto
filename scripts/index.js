const edit = document.querySelector('.profile-info__edit-button');
const popupEdit = document.querySelector('.popup_type_edit');
const popupClose = popupEdit.querySelector('.popup__close');
const popupSubmit = popupEdit.querySelector('.popup__submit');

let formElement = document.querySelector('.popup__container');
let nameInput = formElement.querySelector('.popup__name');
let jobInput = formElement.querySelector('.popup__job');
let nameField = document.querySelector('.profile-info__name');
let jobField = document.querySelector('.profile-info__job');

edit.addEventListener('click', togglePopup);
popupClose.addEventListener('click', togglePopup);
popupSubmit.addEventListener('click', handleFormSubmit);

function togglePopup() {
  popupEdit.classList.toggle('popup_opened');
  nameInput.value = nameField.textContent;
  jobInput.value = jobField.textContent;
  console.log(`Имя: ${nameInput.value} | Работа: ${jobInput.value}.`);
};

function handleFormSubmit (evt) {
  evt.preventDefault('popup__submit');
  popupEdit.classList.toggle('popup_opened');
  nameField.textContent = nameInput.value;
  jobField.textContent = jobInput.value;
  console.log(`Имя: ${nameField.textContent} | Работа: ${jobField.textContent}.`);
};