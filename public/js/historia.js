// BORRA EL TEXTO Y COLOCA OTRO "Bienvenidos"
const welcomeText = document.getElementById("welcome-text");
const words = ["Historia", "History"]; // Puedes agregar más palabras si deseas

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











document.addEventListener('DOMContentLoaded', function() {
  const containers = document.querySelectorAll('.msf-container');
  containers.forEach(container => {
      container.addEventListener('mouseover', () => {
          container.style.transform = 'scale(1.05)';
          container.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
          container.querySelector('.msf-content').style.transform = 'translateY(-10px)';
      });
      container.addEventListener('mouseout', () => {
          container.style.transform = 'scale(1)';
          container.style.boxShadow = 'none';
          container.querySelector('.msf-content').style.transform = 'translateY(0)';
      });
  });
});