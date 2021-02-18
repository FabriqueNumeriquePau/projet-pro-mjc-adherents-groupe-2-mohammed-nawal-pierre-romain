"use strict";

var choixStatut = document.getElementById('choix');
var choixAdherent = document.getElementById('choix_adherent');
var suiteAdherent = document.getElementById('suite_adherent');
var options = document.querySelectorAll('option');
var optionAdherent = options[1];
console.log(optionAdherent.value);
optionAdherent.addEventListener('click', function () {
  choixStatut.style.display = 'none';
  choixAdherent.style.display = 'block';
});