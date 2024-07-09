// IMG, MOUSE, EFECTO "QUIENES SOMOS"
var swiper = new Swiper(".mySwiper", {
  effect: "cards",
  grabCursor: true,
  initialSlide: 2,
  rotate: true,
  mousewheel: {
    invert: false,
  },
});

// BORRA EL TEXTO Y COLOCA OTRO "Bienvenidos"
const welcomeText = document.getElementById("welcome-text");
const words = ["Bienvenidos", "Welcome"]; // Puedes agregar más palabras si deseas

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




// PANTALLA DE CARGA"
setTimeout(function() {
  // Oculta el loader y muestra el contenido principal
  document.querySelector('.loader-container').style.display = 'none';
  document.querySelector('.content').style.display = 'block';
}, 1020); // Tiempo de retraso en milisegundos (ej. 3000 = 3 segundos)





// FUNCIOMALIDAD DE HACER APARECER"
document.addEventListener('DOMContentLoaded', function() {
  const texinvIds = ['texinv1', 'texinv2', 'texinv3'];

  // Opciones para el IntersectionObserver
  const options = {
    root: null,
    threshold: 0.5  // Cuando el 50% del elemento es visible
  };

  // Función para manejar la intersección
  const handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible'); // Añadir clase para mostrar
      }
    });
  };

  // Crear un IntersectionObserver
  const observer = new IntersectionObserver(handleIntersection, options);

  // Observar cada texinv por su ID
  texinvIds.forEach(id => {
    const texinv = document.getElementById(id);
    if (texinv) {
      observer.observe(texinv);
    }
  });
});