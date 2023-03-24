document.querySelector('.modal__button').addEventListener('click', () => {
    document.querySelector(".modal").classList.add('modal-show');
});
document.querySelector('.modal__close').addEventListener('click', () => {
    document.querySelector(".modal").classList.remove('modal-show');
});