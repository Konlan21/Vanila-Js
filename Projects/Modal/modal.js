const modalBtn = document.getElementById("modal-btn");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close-btn");

modalBtn.addEventListener("click", () => {
  modal.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});
