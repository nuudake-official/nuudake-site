
const slides = document.querySelector(".slides");
const slideSections = document.querySelectorAll(".slide");
let index = 0;

document.getElementById("prev").onclick = () => {
  index = (index > 0) ? index - 1 : slideSections.length - 1;
  updateSlide();
};

document.getElementById("next").onclick = () => {
  index = (index + 1) % slideSections.length;
  updateSlide();
};

function updateSlide() {
  slides.style.transform = `translateX(-${index * 100}vw)`;
}

document.getElementById("hamburger").onclick = () => {
  document.getElementById("menu").classList.toggle("active");
};
