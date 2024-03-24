const menuIcon = document.getElementById('menu-icon');
const navList = document.getElementById('nav-list');



menuIcon.addEventListener('click', () => {
    navList.classList.toggle('active');
})

// Modal code


const modalBtn = document.getElementById("open-modalBtn");
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content')


modalBtn.addEventListener('click', () => {
    modalContent.classList.toggle('modal-active');
})

modal.addEventListener('click', () => {
    modalContent.classList.toggle('modal-active');
})