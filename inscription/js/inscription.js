const poursuivre = document.getElementById('poursuivre');
const derniere = document.getElementById('derniere');
const retour1 = document.getElementById('retour1');
console.log(retour1);
const retour2 = document.getElementById('retour2');
const main1 = document.getElementById('page1');
const main2 = document.getElementById('page2');
const main3 = document.getElementById('page3');

poursuivre.addEventListener('click', () => {
    main2.style.visibility = "visible";
    main1.style.visibility = "hidden";
    main3.style.visibility = "hidden";
});
derniere.addEventListener('click', () => {
    main3.style.visibility = "visible";
    main2.style.visibility = "hidden";
    main1.style.visibility = "hidden";
});
retour1.addEventListener('click', () => {
    main1.style.visibility = "visible";
    main2.style.visibility = "hidden";
    main3.style.visibility = "hidden";
});
retour2.addEventListener('click', () => {
    main2.style.visibility = "visible";
    main1.style.visibility = "hidden";
    main3.style.visibility = "hidden";
});
