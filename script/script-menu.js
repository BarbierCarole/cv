/* Sélection des éléments HTML */
let menuButton = document.getElementById('menuButton');
let ul = document.querySelector('ul');

/* gestionnaire d'événement sur le a#link pour venir changer l'attribution de la classe .open à la ul et au span#burger */
menuButton.addEventListener('click', function(e) {
  e.preventDefault();
  ul.classList.toggle('open');
  
})
