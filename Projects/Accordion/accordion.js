// Select all accordion items
var accordionItems = document.querySelectorAll(".accordion-item");

// Loop through each accordion item
accordionItems.forEach(function (item) {
  // Select the title and content of each item
  // var title = item.querySelector(".accordion-title");
  var content = item.querySelector(".accordion-content");

  // Add click event listener to the entire accordion item
  item.addEventListener("click", function () {
    // Toggle the 'active' class on the content to toggle its visibility
    content.classList.toggle("active");
  });
});
