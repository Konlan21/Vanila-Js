// document.addEventListener("DOMContentLoaded", () => {
//   const menuIcon = document.querySelector(".menu-icon");
//   const navLinks = document.querySelector(".nav-links");

//   menuIcon.addEventListener("click", () => {
//     navLinks.classList.toggle("active");
//   });
// });


// const menuIcon = document.querySelector('#menu-icon');
// const navLinks = document.querySelector('#nav-links');

// menuIcon.addEventListener('click', () => {
//     navLinks.classList.toggle('active');
// })


const menuIcon = document.getElementById('menu-icon');
const navLinkis = document.querySelector('.nav-links');


menuIcon.addEventListener('click', () => {
    navLinkis.classList.toggle('show-nav-links')
})