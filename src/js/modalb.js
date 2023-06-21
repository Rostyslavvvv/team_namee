// Отримати кнопку з DOM
const buttonC = document.querySelector('.reviews-open-btn');

// Отримати модальне вікно B з DOM
const modalB = document.querySelector('.backdrop-reviews');

// Додати обробник події для кнопки C
buttonC.addEventListener('click', () => {
  openModal(modalB);
});

// Отримати кнопку закриття модального вікна B з DOM
const closeButtonB = document.querySelector('.modal-reviews-close-btn');
// Додати обробник події для кнопки закриття модального вікна B
closeButtonB.addEventListener('click', () => {
  closeModal(modalB);
});

// Функція для відкриття модального вікна
function openModal(modal) {
  modal.classList.remove('is-hidden');
}

// Функція для закриття модального вікна
function closeModal(modal) {
  modal.classList.add('is-hidden');
}