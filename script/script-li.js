/* Sélection des éléments HTML */

let li = ul.querySelectorAll('li');

/* gestionnaire d'événement sur le a#link pour venir changer l'attribution de la classe .open à la ul et au span#burger */
EventTarget.addEventListener('click', function() {
 console.log("plop");
  ul.classList.toggle('open');
  
})
