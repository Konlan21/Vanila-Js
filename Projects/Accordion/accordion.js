// Select all accordion items
var accordionItems = document.querySelectorAll(".accordion-item");

// Loop through each accordion item
accordionItems.forEach(function (item) {
  // Select the title and content of each item
  var title = item.querySelector(".accordion-title");
  var content = item.querySelector(".accordion-content");

  // Add click event listener to the title
  title.addEventListener("click", function () {
    // Close all other accordion contents
    accordionItems.forEach(function (otherItem) {
      var otherTitle = otherItem.querySelector(".accordion-title");
      var otherContent = otherItem.querySelector(".accordion-content");
      if (otherItem !== item) {
        otherContent.classList.remove("active");
        otherTitle.classList.remove("active");
      }
    });

    // Toggle the 'active' class on the clicked content to toggle its visibility
    content.classList.toggle("active");
    title.classList.toggle("active");
  });
});
