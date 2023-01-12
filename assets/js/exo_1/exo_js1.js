let age = prompt("quel est votre âge ?")
let i = 0
let personne1 = 0
let personne2 = 0
let personne3 = 0
while (i<=100){
    let age = prompt("quel est votre âge ?")
if (age<20){ 
    personne1++
    i++
    continue
}
else if (age>20 && age<=40){
personne2++
i++
continue
}
else {
personne3++
i++
continue
}}
document.write("Personne de moins de 20 ans : " +personne1 + "<br>" )
document.write("Personne dont l'âge est compris entre 20 ans et 40 ans : " +personne2 + "<br>")
document.write("Personne dont l'âge est supérieur à 40 ans : " +personne3 + "<br>")