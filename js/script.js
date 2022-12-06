const images = [
   {
      image: 'img/01.webp',
      title: 'Marvel\'s Spiderman Miles Morale',
      text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
   },
   {
      image: 'img/02.webp',
      title: 'Ratchet & Clank: Rift Apart',
      text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
   },
   {
      image: 'img/03.webp',
      title: 'Fortnite',
      text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
   },
   {
      image: 'img/04.webp',
      title: 'Stray',
      text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
   },
   {
      image: 'img/05.webp',
      title: "Marvel's Avengers",
      text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
   }
];


// <!-- <div class="my_carousel-item">
// <img src="./img/01.webp" alt="First image">
// </div> -->

const carouselElement = document.querySelector("div.carousel-image");

const previousBtn = document.querySelector("div.previous");

const nextBtn = document.querySelector("div.next");

const divCounter = [];

let imgCounter = 0;

previousBtn.addEventListener('click', function(){
   divCounter[imgCounter].classList.remove("active");
   imgCounter = imgCounter - 1;
   divCounter[imgCounter].classList.add("active");
   console.log(imgCounter);
});

nextBtn.addEventListener('click', function(){
   divCounter[imgCounter].classList.remove("active");
   imgCounter += 1;
   divCounter[imgCounter].classList.add("active");
   console.log(imgCounter);
});


images.forEach((img, index)=>{
   const divElement = document.createElement ("div");
   divElement.innerHTML = `<img src="${img.image}">`
   divElement.classList.add("my_carousel-item");
   carouselElement.append(divElement);
   divCounter.push(divElement);
   divCounter[0].classList.add("active");
});
