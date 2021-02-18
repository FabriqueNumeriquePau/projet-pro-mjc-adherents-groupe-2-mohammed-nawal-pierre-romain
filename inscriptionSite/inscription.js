const choixStatut = document.getElementById('choix');
const choixAdherent = document.getElementById('choix_adherent');
const suiteAdherent = document.getElementById('suite_adherent');

const options = document.querySelectorAll('option');

let optionAdherent = options[1];


const inscription = document.getElementById('inscription')

// console.log(inscription.options[1].value);

let value = inscription;
console.log(value);

inscription.addEventListener('change', (Event) => {
    // if (inscription.options[1].value) {
        setTimeout(() => {

            choixStatut.style.display = 'none';
            choixAdherent.style.display = 'block';

        }, 1000);
    // }
    // if (inscription.options[3].value) {
    //     setTimeout(() => {
    //         document.location.href = "/inscription/inscription_enfant.html";

    //     }, 1000);
    // };

    
});


const poursuivre = document.getElementById('btn-poursuivre');


let cancel = poursuivre.children[0];
let suite = poursuivre.children[1];
console.log(suite, cancel)

suite.addEventListener('click', (e) => {
    e.preventDefault;
    setTimeout(() => {

        choixAdherent.style.display = 'none';
        suiteAdherent.style.display = 'block';


    }, 1000);
});

cancel.addEventListener('click', (e) => {
    e.preventDefault;
    setTimeout(() => {

        choixAdherent.style.display = 'none';
        choixStatut.style.display = 'block';

    }, 1000);
});