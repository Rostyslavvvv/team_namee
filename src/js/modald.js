// Отримати кнопку з DOM
const buttonD = document.querySelector('.subscribe-btn');

// Отримати модальне вікно D з DOM
const modalD = document.querySelector('.backdrop-subscribe');

// Додати обробник події для кнопки D
buttonD.addEventListener('click', () => {
  openModal(modalD);
});

// Отримати кнопку закриття модального вікна D з DOM
const closeButtonD = document.querySelector('.modal-close-btn-subscribe');
// Додати обробник події для кнопки закриття модального вікна D
closeButtonD.addEventListener('click', () => {
  closeModal(modalD);
});

// Отримати кнопку "Submit" з форми в модальному вікні
const submitButton = document.querySelector('.form-submit-btn-subscribe');
// Додати обробник події для кнопки "Submit"
submitButton.addEventListener('click', (event) => {
  event.preventDefault(); // Заборонити перезавантаження сторінки при натисканні кнопки "Submit"
  closeModal(modalD);
});

// Функція для відкриття модального вікна
function openModal(modal) {
  modal.classList.remove('is-hidden');
}

// Функція для закриття модального вікна
function closeModal(modal) {
  modal.classList.add('is-hidden');
}