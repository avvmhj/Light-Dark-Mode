const slides = document.querySelectorAll(".slide");
let counter = 0;
const totalSlides = slides.length;

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

const goPrev = () => {
  if (counter >0)
  counter--;
  slideImage();
}

const goNext = () => {
  if (counter<totalSlides-1)
  counter++;
  slideImage();
}

const slideImage = () => {
  slides.forEach(slide => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}


function toggleTheme() {
  const body = document.body;
  body.classList.toggle('dark-mode');
  
  const nav = document.querySelector('nav');
  const footer = document.querySelector('footer');
  const cards = document.querySelectorAll('.card');
  const themeToggleButton = document.querySelector('.theme-toggle');
  
  nav.classList.toggle('dark-mode');
  footer.classList.toggle('dark-mode');
  cards.forEach(card => card.classList.toggle('dark-mode'));
  themeToggleButton.classList.toggle('dark-mode');
}

