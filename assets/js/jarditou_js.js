let form = document.getElementById(form);
form.addEventListener("submit",function(e){
let nom = document.getElementById(nom);
let prenom = document.getElementById(prenom);
let sexe= document.getElementById(sexe);
let date = document.getElementById(date);
let postal = document.getElementById(postal);
let adresse = document.getElementById(adresse);
let ville = document.getElementById(ville);
let sujet = document.getElementById(sujet);
let question = document.getElementById(question);
let données = document.getElementById(données);


const regex1 = RegExp("^[A-Za-z]+$")
const regex2 = RegExp("^[A-Za-z]+$"+"")
const regex3 = RegExp("^[A-Za-z]+$")
if(regex1.test.value(nom)){

}
else{
    let nom1= document.getElementById(nom1)
    nom1.innerHTML("Veuillez entrer votre nom")
    e.preventDefault()
}
})

