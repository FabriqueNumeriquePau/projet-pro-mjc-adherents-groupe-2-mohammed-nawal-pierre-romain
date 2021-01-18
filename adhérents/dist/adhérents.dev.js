"use strict";

var modal = document.getElementById('wrapper-modal');
console.log(modal);
var ajouter = document.getElementById('ajouter');
ajouter.addEventListener('click', function () {
  modal.style.visibility = 'visible';
  modal.style.opacity = '1';
});