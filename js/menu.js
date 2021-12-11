let burguerButton = document.getElementById('burguer-button');
let menu = document.getElementById('menu');

// burguerButton contiene el span con el icono
// burguerButton.addEventListener('que evento', 'que deseo hacer');
burguerButton.addEventListener('touchstart', function() {
  menu.classList.toggle('active');
});