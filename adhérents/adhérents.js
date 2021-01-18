let modal = document.getElementById('wrapper-modal');
console.log(modal);
let ajouter = document.getElementById('ajouter');

ajouter.addEventListener('click', () =>{
modal.style.visibility = 'visible';
modal.style.opacity = '1';
});