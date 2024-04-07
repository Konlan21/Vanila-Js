const menuIcon = document.getElementById('menu-icon');
const navList = document.getElementById('nav-list');
const closeNavBtn = document.querySelector('.bx-x');


menuIcon.addEventListener('click', () => {
    navList.classList.toggle('active');
    if(navList.classList.contains('active')) {
        closeNavBtn.style.display = 'block';
        menuIcon.style.display = 'none'
    }
})

closeNavBtn.addEventListener('click', () => {
    navList.classList.toggle('active')
    if(!navList.classList.contains('active')) {
        menuIcon.style.display = 'block';
        closeNavBtn.style.display = 'none';
    }
})

console.log(closeNavBtn)

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