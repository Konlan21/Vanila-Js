

const accordions = document.querySelectorAll('.accordion');
const panels = document.querySelectorAll('.panel');



function revealPanel() {
    panels.forEach((panel) => {
        panel.classList.toggle('reveal-panel')
    })
}

accordions.forEach((accordion) => {
    accordion.addEventListener('click', revealPanel);
})