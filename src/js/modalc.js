// Отримати модальне вікно A з DOM
const modalA = document.querySelector('.backdrop');

// Отримати кнопку "Submit" з DOM
const submitButton = document.querySelector('.form-submit-button');
// Додати обробник події для кнопки "Submit"
submitButton.addEventListener('click', () => {
  closeModal(modalA);
});

// Функція для закриття модального вікна
function closeModal(modal) {
  modal.classList.add('is-hidden');
}