const reviews = [
  {
    author: "Alice Smith",
    job: "Graphic Designer",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    body: "Alice is a fantastic graphic designer. She understood my requirements perfectly and delivered outstanding results in a short time. Highly recommended!",
  },
  {
    author: "Bob Johnson",
    job: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    body: "Bob's expertise in software engineering is exceptional. He solved a critical issue in our application and improved its performance significantly. Great job!",
  },
  {
    author: "Eva Brown",
    job: "Marketing Manager",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    body: "Eva's marketing strategies have boosted our sales remarkably. She has a creative approach and knows how to engage our target audience effectively. Truly impressed!",
  },
];


let author =  document.getElementById('author');
let job = document.getElementById('job');
let img = document.getElementById('img');
let body = document.getElementById('body'); 


let nextReview = document.getElementById('next-review');
let previousReview = document.getElementById('previous-review');

// let currentReview = reviews[0+1];

let currentReview = 0;

function showReview() {
    let reviewItem = reviews[currentReview];
      author.innerText =  reviewItem.author
      job.innerText =  reviewItem.job
      body.innerText =  reviews[currentReview].body
      img.src = reviewItem.image
}

window.addEventListener('DOMContentLoaded', showReview )


nextReview.addEventListener('click', () => {
  currentReview++
  if(currentReview > reviews.length-1) {
    currentReview = 0; 
  }
  showReview()
})

previousReview.addEventListener('click', () => {
  currentReview--
  if(currentReview < 0 ) {
    currentReview = reviews.length - 1;
  }
  showReview()
})

console.log(reviews.length-1)
// console.log(currentReview++)
