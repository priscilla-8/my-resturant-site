// Example: dynamically toggle stripe direction after 5 seconds
const header = document.getElementById('main-header');

setTimeout(() => {
  header.style.background = `repeating-linear-gradient(
    to right,
    red 0,
    red 33.3%,
    white 33.3%,
    white 66.6%,
    black 66.6%,
    black 100%
  )`;
}, 5000);
// Carousel functionality
let slides = document.querySelectorAll(".slide");
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

// Auto change slides every 3 seconds
setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}, 3000);

// Text-to-Speech 
function speakText(text) {
  let speech = new SpeechSynthesisUtterance(text);
  speech.lang = "en-US";
  window.speechSynthesis.speak(speech);
  
}
// ----------------------talking--------------------------
const text = "Welcome to Teekay Resturant";
let i = 0;

function typewriter () {
  if(i < text.length) {

    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typewriter, 100);
  }
}
typewriter();
// ---------------- Hero Animation ----------------
function revealHero() {
    const heroText = document.querySelector('.hero-text');
    const heroButton = document.getElementById('hero-cta-btn');

    heroText?.classList.add('visible');
    heroButton?.classList.add('visible');
}

window.addEventListener('load', revealHero);

// ---------------- About Scroll Animation ----------------

ocument.addEventListener("DOMContentLoaded", () => {
  const texts = document.querySelectorAll(".about-section-bg show");
  texts.forEach((el, i) => {
    setTimeout(() => {
      el.classList.add("visible");
    }, i * 1000); // delay each by 1 second
  });
});


window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// ---------------- Chefs Scroll Animation ----------------
function revealChefs() {
    const chefSection = document.querySelector('.animate-chefs');
    const windowHeight = window.innerHeight;
    const sectionTop = chefSection?.getBoundingClientRect().top || 0;
    const revealPoint = 150;

    if (chefSection && sectionTop < windowHeight - revealPoint) {
        chefSection.classList.add('visible');
    }
}

window.addEventListener('scroll', revealChefs);
revealChefs();

// ---------------- CTA Buttons ----------------
document.getElementById("cta-btn")?.addEventListener("click", function() {
    window.location.href = "menu.html";
});

document.getElementById("hero-cta-btn")?.addEventListener("click", function() {
    window.location.href = "menu.html";
});
const elements = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {

elements.forEach(el => {

const position = el.getBoundingClientRect().top;
const screenHeight = window.innerHeight;

if(position < screenHeight){
el.classList.add("show");
}

});

});

let cart = [];
let total = 0;

/* ADD TO CART */
function addToCart(item, price){
cart.push({item, price});
total += price

updateCart();
}

/* UPDATE CART */
function updateCart(){

  let cartList =
document.getElementById("cart-items"); let totalDisplay = 
document.getElementById("total");

cartList.innerHTML ="";

cart.forEach((c, index) => {
  cartList.innerHTML += <li>${c.item} -₦${c.price}</li>;
});

totalDisplay.innerText = total;
}

function checkout(){

  if(cart.length === 0){
alert("cart is empty");
return;
  }

  alert("order placed successfully!");

  cart = [];
  total = 0;
updateCart();
}


/* WHATSAPP ORDER */
function orderWhatsApp(name, price){

let phone = "234XXXXXXXXXX";

let msg = `Hello, I want to order:
${name} - ₦${price}`;

let url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;

window.open(url, "_blank");
}

/* CHECKOUT */
function checkout(){

if(cart.length === 0){
alert("Cart is empty");
return;
}

alert("Order placed successfully!");
cart = [];
updateCart();
}

/* SEARCH */
function searchFood(){

let input = document.getElementById("search").value.toLowerCase();
let cards = document.querySelectorAll(".menu-card");

cards.forEach(card => {
card.style.display = card.innerText.toLowerCase().includes(input)
? "block"
: "none";
});
}

/* FILTER */
function filterCategory(category){

let cards = document.querySelectorAll(".menu-card");

cards.forEach(card => {

if(category === "all"){
card.style.display = "block";
}else{
card.style.display = card.classList.contains(category)
? "block"
: "none";
}

});
}
function scrollToTop() {
  window. scrollTo({
    top:0,
    behavior:"smooth"
  });
}
const searchBox =
document.getElementById("searchBox");
const items =
document.querySelectorAll("item-menu");
searchBox.addEventListener("input",
  function(){
    const value =
    this.value.toLowerCase();
    items.forEach(item =>{
      const text =
      item.textContent.toLowerCase();
      if(text.includes(value)){
        item.style.display ="block";
      } else{
        item.style.display ="none";
      }
    });
  }
);