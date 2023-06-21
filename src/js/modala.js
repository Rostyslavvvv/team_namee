// Отримати кнопки з DOM
const buttonA = document.querySelector('.top-sellers-btn');
const buttonB = document.querySelector('.hero-button-one');

// Отримати модальне вікно A з DOM
const modalA = document.querySelector('.backdrop');

// Додати обробник події для кнопки A
buttonA.addEventListener('click', () => {
  openModal(modalA);
});

// Додати обробник події для кнопки B
buttonB.addEventListener('click', () => {
  openModal(modalA);
});

// Отримати кнопку закриття модального вікна A з DOM
const closeButtonA = document.querySelector('.modal-close-btn');
// Додати обробник події для кнопки закриття модального вікна A
closeButtonA.addEventListener('click', () => {
  closeModal(modalA);
});

// Функція для відкриття модального вікна
function openModal(modal) {
  modal.classList.remove('is-hidden');
}

// Функція для закриття модального вікна
function closeModal(modal) {
  modal.classList.add('is-hidden');
}