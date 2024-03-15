let count = document.querySelector(".count");
let buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // console.log(e.target)
    if (e.target.classList.contains("btn-increase")) {
      count.innerText++;
    }

    if (e.target.classList.contains("btn-decrease")) {
      count.innerText--;
    }

    if (e.target.classList.contains("btn-reset")) {
      count.innerText = 0;
    }

    if (count.innerText < 0) {
      count.style.color = "red";
    }

    if (count.innerText > 0) {
      count.style.color = "green";
    }
    if (count.innerText == 0) {
      count.style.color = "black";
    }
  });
});
