"use strict";

var modal = document.getElementById('wrapper-modal');
console.log(modal);
var ajouter = document.getElementById('ajouter');
var annuler = document.getElementById('cancel');
ajouter.addEventListener('click', function () {
  modal.style.visibility = 'visible';
  modal.style.opacity = '1';
});
annuler.addEventListener('click', function () {
  modal.style.visibility = 'hidden';
  modal.style.opacity = 'O';
});