let form = document.getElementById("form");
form.addEventListener("submit", function (e){
let nom = document.getElementById("nom");
let prenom = document.getElementById("prenom");
let date = document.getElementById("date");
let postal = document.getElementById("postal");
let adresse = document.getElementById("adresse");
let ville = document.getElementById("ville");
let sujet = document.getElementById("sujet");
let question = document.getElementById("question");
let données = document.getElementById("données");


let regexp =  /^[a-zA-Z-\s]+$/;
let regexp2 = /^[a-z0-9.-]+@[a-z0-9.-]{2,}.[a-z]{2,4}$/;
let regexp3 = /^\d{5}$/;

if (nom.value.trim() == "") {
  let nom1 = document.getElementById("nom1");
  nom1.innerHTML = "* Veuillez indiquer votre nom ";
  nom1.style.color = "#F00020";
  e.preventDefault();
} else if (regexp.test(nom.value) == false) {
  let nom1 = document.getElementById("nom1");
  nom1.innerHTML =
    "* Veuillez indiquer votre nom correctement (seules les lettres en minuscules et majuscules sont accepter) ";
  nom1.style.color = "#F00020";
  e.preventDefault();
}
if (prenom.value.trim() == "") {
  let prenom1 = document.getElementById("prenom1");
  prenom1.innerHTML = "* Veuillez indiquer votre prénom ";
  prenom1.style.color = "#F00020";
  e.preventDefault();
} else if (regexp.test(prenom.value) == false) {
  let prenom1 = document.getElementById("prenom1");
  prenom1.innerHTML =
    "* Veuillez indiquer votre prénom correctement (seules les lettres en minuscules et majuscules sont accepter)";
    prenom1.style.color = "#F00020";
  e.preventDefault();
}
if (date.value == "") {
    let date1 = document.getElementById("date1");
    date1.innerHTML = "* Veuillez indiquer votre date de naissance ";
    date1.style.color = "#F00020";
    e.preventDefault();
  }
if (postal.value.trim() == "") {
  let postal1 = document.getElementById("postal1");
  postal1.innerHTML = "* Veuillez indiquer votre code postal ";
  postal1.style.color = "#F00020";
  e.preventDefault();
} else if (regexp3.test(postal.value) == false) {
  let postal1 = document.getElementById("postal1");
  postal1.innerHTML =
    "* vous devez saisir les chiffre de votre code postal (minimun / maximun 5 chiffre)";
    postal1.style.color = "#F00020";
  e.preventDefault();
}
if (adresse.value.trim() == "") {
  let adresse1 = document.getElementById("adresse1");
  adresse1.innerHTML = "*Veuillez indiquer votre adresse";
  adresse1.style.color = "#F00020";
} else if (regexp.test(adresse.value) == false) {
  let adresse1 = document.getElementById("adresse1");
  adresse1.innerHTML = "*Veuillez indiquer une adresse valide (seules les lettres en minuscules et majuscules sont accepter)";
  adresse1.style.color = "#F00020";
  e.preventDefault();
}
if (ville.value.trim() == "") {
  let ville1 = document.getElementById("ville1");
  ville1.innerHTML = "*Veuillez indiquer votre ville";
  ville1.style.color = "#F00020";
} else if (regexp.test(ville.value) == false) {
  let ville1 = document.getElementById("ville1");
  ville1.innerHTML = "*Veuillez indiquer une ville correcte (seules les lettres en minuscules et majuscules sont accepter)";
  ville1.style.color = "#F00020";
  e.preventDefault();
}
if (email.value.trim() == "") {
  let email1 = document.getElementById("email1");
  email1.innerHTML = "*Veuillez indiquer votre adresse email";
  email1.style.color = "#F00020";
} else if (regexp2.test(email.value) == false) {
  let email1 = document.getElementById("email1");
  email1.innerHTML = "*Veuillez indiquer une adresse email valide ";
  email1.style.color = "#F00020";
  e.preventDefault();
}
if (sujet.value.trim() == "") {
  let sujet1 = document.getElementById("sujet1");
  sujet1.innerHTML = "* Veuillez selectionner un sujet";
  sujet1.style.color = "#F00020";
  e.preventDefault();
}
if(question.value.trim()=="")
{
let question1 = document.getElementById('question1');
question1.innerHTML="Veuillez écrire le sujet de votre demande";
question1.style.color="#F00020"
e.preventDefault();
}
if(données.checked== false) {
    let données1 = document.getElementById("données1");
    données1.innerHTML = "Veuillez accepter le traitement de vos données";
    données1.style.color = "#F00020";
    e.preventDefault();
  }
}
);