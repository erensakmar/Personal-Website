window.addEventListener('load', function () {
  showSlides(slideIndex);
  window.onload = setInterval(show, 50, "introduction");
  this.setTimeout(() => {setInterval(show, 50, "description")}, 200)
})
let itWorks = "If you see this js works! Greatest Regards, Eren";
console.log(itWorks)

let slideIndex = 1;


// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("section");
  let bars = document.getElementsByClassName("bars");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < bars.length; i++) {
    bars[i].className = bars[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  bars[slideIndex-1].className += " active";
} 

        
function show(x) {
    let opacity = 0;
    let intervalID = 0;
    let idElement = document.getElementById(x);
    opacity = Number(window.getComputedStyle(idElement).getPropertyValue("opacity"));
    if (opacity < 1) {
        opacity = opacity + 0.05;
        idElement.style.opacity = opacity
    } 
    else {
        clearInterval(intervalID);
    }
}
function differentScreen(slides) {
    slides.style.display = "block";
}