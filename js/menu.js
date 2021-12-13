let burguerButton = document.getElementById('burguer-button');
let menu = document.getElementById('menu');
console.log(menu);

burguerButton.addEventListener('touchstart', function() {
  menu.classList.toggle('active');
});