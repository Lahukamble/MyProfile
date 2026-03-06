// CTA Button popup

document.getElementById("ctaBtn").addEventListener("click", function(){

alert("Thank you for your interest! Please contact Lahu Mahadev Kamble for investment advice.");

});


// Contact form submit

document.getElementById("contactForm").addEventListener("submit", function(e){

e.preventDefault();

alert("Your message has been sent successfully!");

});


// Reveal animation on scroll

function reveal(){

let reveals = document.querySelectorAll(".reveal");

for(let i = 0; i < reveals.length; i++){

let windowHeight = window.innerHeight;

let elementTop = reveals[i].getBoundingClientRect().top;

let elementVisible = 100;

if(elementTop < windowHeight - elementVisible){

reveals[i].classList.add("active");

}

}

}

window.addEventListener("scroll", reveal);