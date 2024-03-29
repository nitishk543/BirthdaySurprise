refreshPage = () => {
  setTimeout(() => {
    surprisePage();
  }, 10000); //change to 10000
};

refreshPage();

surprisePage = () => {
  document.querySelector(".currentTime").remove();
  document.querySelector(".waiting-timer").remove();
  document.querySelector("progress").remove();
  document.querySelector(".gift-box").classList.add("jump");
};

var slideIndex = 0;
var slideshow = showSlides(); // call showslide method

function showSlides() {
  var i;

  // get the array of divs' with classname image-sliderfade
  var slides = document.getElementsByClassName("image-sliderfade");

  // get the array of divs' with classname dot
  var dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
    // initially set the display to
    // none for every image.
    slides[i].style.display = "none";
  }

  // increase by 1, Global variable
  slideIndex++;

  // check for boundary
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  // Change image every 2 seconds
  setTimeout(showSlides, 2000);
}

var gift = document.querySelector(".gift-box");
var audio = new Audio("https://drive.google.com/file/d/1ArqAVRQlRUpRsTGwgwNlYoSwMUinDwDc/view?usp=sharing");
var audio1 = new Audio("https://drive.google.com/file/d/1L92qk7Oxin3CaZsFoOsBspCKxLUDJ9-K/view?usp=sharing");
var audio2 = new Audio("https://drive.google.com/file/d/1ZNFkXqhb31pdnIAx1qTV_oPlL-Wcs11o/view?usp=sharing");

gift.addEventListener("click", () => {
  audio.play();
  gift.classList.remove("giftBoxRemove");

  setTimeout(() => {
    audio1.play();
  }, 1000);

  setTimeout(() => {
    audio2.play();
    gift.innerHTML = "Happy Birthday Bestie";
    gift.classList.add("insideGiftText");
    document.querySelector(".heart-container").classList.add("heart");
    document.querySelector(".one").classList.add("balloonAnimation");
    document.querySelector(".two").classList.add("balloonAnimation");
    document.querySelector(".three").classList.add("balloonAnimation");
    document.querySelector(".four").classList.add("balloonAnimation");
    document.querySelector(".five").classList.add("balloonAnimation");
    document.querySelector(".six").classList.add("balloonAnimation");
    document.querySelector(".seven").classList.add("balloonAnimation");
    document.querySelector(".plate1").classList.add("plate");
    document.querySelector(".cream1").classList.add("cream");
    document.querySelector(".candle1").classList.add("candle");
    document.querySelector(".one1").classList.add("onef");
    document.querySelector(".two1").classList.add("twof");
    document.querySelector(".three1").classList.add("threef");
  }, 7000); //change to 7000

  setTimeout(() => {
    document.querySelector(".container1").remove();
    document
      .querySelector(".container2")
      .classList.add("container2-visibility");
  }, 21000); //change to 21000

  setTimeout(() => {
    document.querySelector(".container2").remove();
    document
      .querySelector(".container3")
      .classList.add("container3-visibility");
    document.querySelector(".cnt1").classList.add("inner-container");
    document.querySelector(".video").classList.add("video1");
  }, 47000);
});
