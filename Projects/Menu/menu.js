const foods = [
  {
    id: 1,
    title: "Eggs Benedict",
    category: "breakfast",
    price: "$12",
    img: "https://source.unsplash.com/400x300/?eggs",
    description:
      "Classic breakfast dish consisting of two halves of an English muffin, each topped with Canadian bacon, poached eggs, and hollandaise sauce.",
  },
  {
    id: 2,
    title: "Avocado Toast",
    category: "breakfast",
    price: "$8",
    img: "https://source.unsplash.com/400x300/?avocado",
    description:
      "Sliced avocado served atop toasted bread, seasoned with salt, pepper, and other toppings such as cherry tomatoes or poached eggs.",
  },
  {
    id: 3,
    title: "Grilled Chicken Salad",
    category: "lunch",
    price: "$10",
    img: "https://source.unsplash.com/400x300/?chicken,salad",
    description:
      "Healthy salad with grilled chicken breast, mixed greens, cherry tomatoes, cucumber slices, and balsamic vinaigrette dressing.",
  },
  {
    id: 4,
    title: "Margherita Pizza",
    category: "lunch",
    price: "$14",
    img: "https://source.unsplash.com/400x300/?pizza",
    description:
      "Traditional Italian pizza topped with tomato sauce, fresh mozzarella cheese, basil leaves, and a drizzle of olive oil.",
  },
  {
    id: 5,
    title: "Chocolate Milkshake",
    category: "shakes",
    price: "$6",
    img: "https://source.unsplash.com/400x300/?milkshake,chocolate",
    description:
      "Indulgent milkshake made with creamy vanilla ice cream, rich chocolate syrup, and topped with whipped cream and chocolate shavings.",
  },
  {
    id: 6,
    title: "Strawberry Smoothie",
    category: "shakes",
    price: "$5",
    img: "https://source.unsplash.com/400x300/?smoothie,strawberry",
    description:
      "Refreshing smoothie blended with fresh strawberries, banana, yogurt, and a splash of orange juice.",
  },
  {
    id: 7,
    title: "Grilled Salmon",
    category: "dinner",
    price: "$18",
    img: "https://source.unsplash.com/400x300/?salmon",
    description:
      "Healthy and flavorful grilled salmon fillet served with roasted vegetables and a lemon wedge.",
  },
  {
    id: 8,
    title: "Spaghetti Bolognese",
    category: "dinner",
    price: "$16",
    img: "https://source.unsplash.com/400x300/?spaghetti,bolognese",
    description:
      "Classic Italian pasta dish featuring spaghetti noodles topped with a rich meat sauce made from ground beef, tomatoes, onions, and herbs.",
  },
  {
    id: 9,
    title: "Pancakes",
    category: "breakfast",
    price: "$9",
    img: "https://source.unsplash.com/400x300/?pancakes",
    description:
      "Fluffy pancakes served with butter and maple syrup, a classic breakfast favorite.",
  },
  {
    id: 10,
    title: "Caesar Salad",
    category: "lunch",
    price: "$12",
    img: "https://source.unsplash.com/400x300/?salad,caesar",
    description:
      "Fresh romaine lettuce tossed with Caesar dressing, croutons, and Parmesan cheese, a timeless salad option.",
  },
];


const body = document.querySelector('body');
// const menuDiv = document.querySelector('.menu-item');
// const menuImage = document.querySelector('.menu-img');
// const menuTitle = document.querySelector('.menu-title');
// const menuPrice = document.querySelector('.menu-price');
// const menuDesc = document.querySelector('.menu-desc');



function showMenuItems() {
  const menuIitems = document.querySelector('.menu-items');
  console.log(menuIitems)

    foods.forEach((food) => {
        let div = document.createElement('div');
        div.classList = "menu-item active";

        let img = document.createElement('img');
        img.src = food.img;
        div.appendChild(img);

        let detailsDiv = document.createElement('div');
        detailsDiv.classList = "menu-item-details";

        let h3 = document.createElement('h3');
        h3.innerText = food.title;

        detailsDiv.appendChild(h3)

        let price = document.createElement('p');
        price.innerText = food.price;

        detailsDiv.appendChild(price);

        let desc = document.createElement('p');
        desc.innerText = food.description;

        detailsDiv.appendChild(desc);

        div.appendChild(detailsDiv)
        



        menuIitems.appendChild(div) 
      })


    
}



document.addEventListener('DOMContentLoaded', showMenuItems)
