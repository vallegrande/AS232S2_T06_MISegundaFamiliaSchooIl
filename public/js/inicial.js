// BORRA EL TEXTO Y COLOCA OTRO "Bienvenidos"
const welcomeText = document.getElementById("welcome-text");
const words = ["Educacion Inicial", "Initial Education"]; // Puedes agregar más palabras si deseas

let wordIndex = 0; // Índice de la palabra actual
let letterIndex = 0; // Índice de la letra actual
let direction = 1; // Dirección del efecto (1 para escribir, -1 para borrar)

function typeEffect() {
  const currentWord = words[wordIndex];
  const textToDisplay = currentWord.slice(0, letterIndex + 1);
  welcomeText.textContent = textToDisplay;

  if (direction === 1) {
    letterIndex++;
    if (letterIndex === currentWord.length) {
      direction = -1;
      setTimeout(typeEffect, 1500); // Tiempo de espera antes de borrar
    } else {
      setTimeout(typeEffect, 200); // Velocidad de escritura
    }
  } else {
    setTimeout(function () {
      welcomeText.textContent = currentWord.slice(0, letterIndex);
      letterIndex--;
      if (letterIndex === -1) {
        direction = 1;
        wordIndex = (wordIndex + 1) % words.length; // Cambia a la siguiente palabra
      }
      setTimeout(typeEffect, 100); // Velocidad de borrado
    }, 500); // Tiempo de espera antes de empezar a borrar
  }
}

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(typeEffect, 200); // Comienza el efecto después de 200ms
});




















function flipCard(card) {
    card.classList.toggle('flip');
}








// JavaScript para manejar la rotación automática del slider
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function rotateSlides() {
    // Ocultar slide actual
    slides.forEach(slide => slide.classList.remove('active'));
    
    // Mostrar siguiente slide
    currentIndex++;
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }
    slides[currentIndex].classList.add('active');
}

setInterval(rotateSlides, 1000);

// Mostrar el primer slide al cargar la página
slides[currentIndex].classList.add('active');





