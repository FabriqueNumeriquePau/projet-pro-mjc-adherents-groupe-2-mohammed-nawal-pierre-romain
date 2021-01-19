let modal = document.getElementById('wrapper-modal');
console.log(modal);
let ajouter = document.getElementById('ajouter');
let annuler = document.getElementById('cancel');

ajouter.addEventListener('click', () =>{
modal.style.visibility = 'visible';
modal.style.opacity = '1';
});
annuler.addEventListener('click', () => {
    modal.style.visibility = 'hidden';
    modal.style.opacity = 'O';
});