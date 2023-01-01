const button = document.querySelector('.submit');
const content = document.querySelector('#contenido');
const ratingValues = document.querySelectorAll('.rating-value span');

// Añade un manejador de evento para el evento click del botón
button.addEventListener('click', (event) => {
  // Evita que el botón tenga un comportamiento por defecto
  event.preventDefault();

  // Reemplaza el contenido del elemento con el nuevo mensaje de agradecimiento
  content.innerHTML = '<img src="./images/unica.png" alt="gracias" width="346px" height="253px"> <h1>Gracias por tu apoyo</h1> <p>Trabajaremos en conjunto para mejorar cada día gracias a tu apoyo.</p>';

  content.style.display = 'block';
  content.style.inlineSize = '21.62rem';
  content.style.blockSize = '23.8rem';
  content.style.padding = '2.5rem';
  content.style.fontFamily = 'Inter';
  content.style.color = '#0E172C';
});

ratingValues.forEach((ratingValue) => {
    ratingValue.addEventListener('click', (event) => {
      // Remueve la clase unselected de todos los elementos span
      ratingValues.forEach((value) => value.classList.remove('unselected'));
      // Añade la clase selected al elemento span que se ha presionado
      event.target.classList.add('selected');
    });
  });