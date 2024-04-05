const sidebar = document.getElementById("sidebar");
const menuIcon = document.getElementById("menu-icon");
const closeSideBar = document.querySelector("h1");
const body = document.querySelector("body");

menuIcon.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

closeSideBar.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});


window.addEventListener('click', (e) => {
    if(!sidebar.contains(e.target)&& e.target !== menuIcon) {
        sidebar.classList.remove('active');
    }
})


