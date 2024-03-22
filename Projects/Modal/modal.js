const modalBtn = document.getElementById('modal-btn');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('close-btn');



modalBtn.addEventListener('click', () => {
    modal.style.visibility = 'visible'
})

closeBtn.addEventListener('click', () => {
    modal.style.visibility = "hidden";
})


modal.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        modal.style.visibility = 'hidden';
    }
})