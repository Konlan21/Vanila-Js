const foods = [
  {
    id: 1,
    title: "Eggs Benedict",
    category: "breakfast",
    price: "$12",
    img: "images/eggs-benedict.jpg",
    description:
      "Classic breakfast dish consisting of two halves of an English muffin, each topped with Canadian bacon, poached eggs, and hollandaise sauce.",
  },
  {
    id: 2,
    title: "Avocado Toast",
    category: "breakfast",
    price: "$8",
    img: "images/avocado-toast.jpg",
    description:
      "Sliced avocado served atop toasted bread, seasoned with salt, pepper, and other toppings such as cherry tomatoes or poached eggs.",
  },
  {
    id: 3,
    title: "Grilled Chicken Salad",
    category: "lunch",
    price: "$10",
    img: "images/grilled-chik-salad.jpg",
    description:
      "Healthy salad with grilled chicken breast, mixed greens, cherry tomatoes, cucumber slices, and balsamic vinaigrette dressing.",
  },
  {
    id: 4,
    title: "Margherita Pizza",
    category: "lunch",
    price: "$14",
    img: "images/Margherita-Pizza.jpg",
    description:
      "Traditional Italian pizza topped with tomato sauce, fresh mozzarella cheese, basil leaves, and a drizzle of olive oil.",
  },
  {
    id: 5,
    title: "Chocolate Milkshake",
    category: "shakes",
    price: "$6",
    img: "images/Chocolate-Milkshake.jpg",
    description:
      "Indulgent milkshake made with creamy vanilla ice cream, rich chocolate syrup, and topped with whipped cream and chocolate shavings.",
  },
  {
    id: 6,
    title: "Strawberry Smoothie",
    category: "shakes",
    price: "$5",
    img: "images/Strawberry-Smoothie.jpg",
    description:
      "Refreshing smoothie blended with fresh strawberries, banana, yogurt, and a splash of orange juice.",
  },
  {
    id: 7,
    title: "Grilled Salmon",
    category: "dinner",
    price: "$18",
    img: "images/Grilled-Salmon.jpg",
    description:
      "Healthy and flavorful grilled salmon fillet served with roasted vegetables and a lemon wedge.",
  },
  {
    id: 8,
    title: "Spaghetti Bolognese",
    category: "dinner",
    price: "$16",
    img: "images/Spaghetti-Bolognese.jpg",
    description:
      "Classic Italian pasta dish featuring spaghetti noodles topped with a rich meat sauce made from ground beef, tomatoes, onions, and herbs.",
  },
  {
    id: 9,
    title: "Pancakes",
    category: "breakfast",
    price: "$9",
    img: "images/pancakes.jpg",
    description:
      "Fluffy pancakes served with butter and maple syrup, a classic breakfast favorite.",
  },
  {
    id: 10,
    title: "Caesar Salad",
    category: "lunch",
    price: "$12",
    img: "images/Caesar-Salad.jpg",
    description:
      "Fresh romaine lettuce tossed with Caesar dressing, croutons, and Parmesan cheese, a timeless salad option.",
  },
];


const body = document.querySelector('body');
const menuItemContainer = document.querySelector('.menu-items')



// document.addEventListener('DOMContentLoaded', () => {
//   displayMenuItems();
//   const tabs = document.querySelectorAll('.tab');
//   tabs.forEach(tab => {
//     tab.addEventListener('click', () => {
//       const category = tab.getAttribute('data-category');
//       filterMenuItems(category);
//       // console.log(category)
//     });
//   });
// });



// function filterMenuItems(category) {
//   const menuItems = document.querySelectorAll('.menu-item');
//   menuItems.forEach(menuItem => {
//     const menuItemCategory = menuItem.getAttribute('data-category');
//     if (category === 'all' || menuItemCategory === category) {
//       menuItem.style.display = 'block'; // Show the menu item
//     } else {
//       menuItem.style.display = 'none'; // Hide the menu item
//     }
//   });
// }


const categoryTabs = document.querySelectorAll('.tab');





function displayMenuItems() {
  
const foodContent = foods.map((food) => {
  return `
  <div class="menu-item active" data-category=${food.category}>
  <img class="menu-img" src=${food.img} alt="Caesar Salad">
  <div class="menu-item-details">
    <h3 id="menu-title" class="menu-title">${food.title}</h3>
    <p class="menu-price">${food.price}</p>
    <p class="menu-desc">${food.description}</p>
  </div>
  </div>
`
}).join('')


// foodContent.join('');
menuItemContainer.innerHTML = foodContent;
}

// window.addEventListener('DOMContentLoaded', loadMenuItems)

// filterTabs = document.querySelectorAll('.tab');

// filterTabs.forEach((filterTab) => {
//   // console.log(tab.dataset.category)
//   filterTab.addEventListener('click', () => {
//     // filterTab.dataset.category)
//     filterTabCategory = filterTab.dataset.category;
//     filterMenuItems(filterTabCategory);
//   })
// });


// function filterMenuItems(category) {
//   menuItems = document.querySelectorAll('.menu-item');
  
//   menuItems.forEach(menuItem => {
//     menuItemCategory = menuItem.getAttribute('data-category');
//     alert(menuItemCategory)
//   })
// }

// filterMenuItems()const menuItemContainer = document.querySelector('.menu-items');

window.addEventListener('DOMContentLoaded', () => {
  displayMenuItems()
  categoryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const tabCategory = tab.getAttribute('data-category');
      // console.log(tabCategory)``
      filterMenuItems(tabCategory);
    })
  })
})



function filterMenuItems(tabCategory) {
  const menuItems = document.querySelectorAll('.menu-item');
  menuItems.forEach(menuItem => {
    menuItemCategory = menuItem.getAttribute('data-category');
    if(tabCategory === 'all'|| menuItemCategory === tabCategory) {
      menuItem.style.display = 'block';
    } else {
      menuItem.style.display = 'none'
    }
  })
}


// Search functionality


let searchBar = document.querySelector('#search-bar');

searchBar.addEventListener('keyup', () => {
  let menuItems = document.querySelectorAll('.menu-item');
  
  menuItems.forEach(menuItem => {
    let searchValue = searchBar.value;
    let itemName = menuItem.querySelector('#menu-title').innerText;
    if(itemName.toLowerCase().includes(searchValue.toLowerCase())) {
      menuItem.style.display = "block";
    } else {
      menuItem.style.display = "none";
    }
  })

  })

  let clearBtn = document.querySelector('#close-icon');

  clearBtn.addEventListener('click', () => {
    searchBar.value = "";
    displayMenuItems()
  })
