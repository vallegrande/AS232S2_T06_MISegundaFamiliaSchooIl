var swiper = new Swiper('.swiper-container', {
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev'
	},
	slidesPerView: 1,
	spaceBetween: 10,
	// init: false,
	pagination: {
	  el: '.swiper-pagination',
	  clickable: true,
	},

  
	breakpoints: {
	  620: {
		slidesPerView: 1,
		spaceBetween: 20,
	  },
	  680: {
		slidesPerView: 2,
		spaceBetween: 40,
	  },
	  920: {
		slidesPerView: 3,
		spaceBetween: 40,
	  },
	  1240: {
		slidesPerView: 4,
		spaceBetween: 50,
	  },
	} 
    });




    // BORRA EL TEXTO Y COLOCA OTRO "Bienvenidos"
const welcomeText = document.getElementById("welcome-text");
const words = ["Proposito", "Mision", "Vision", "Valores"]; // Puedes agregar más palabras si deseas

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
