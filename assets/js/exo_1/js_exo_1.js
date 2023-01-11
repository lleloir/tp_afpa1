var i = 0;

console.log("Table de multiplication par 5");
console.log("=============================");

while (i <= 10) 
{   
    // Exécute le calcul et stocke le résultat   
    // dans une variable nommée ‘resultat’  
    resultat = 5 * i;

    // A chaque tour, on affiche le résultat courant à l’utilisateur
    console.log("Le résultat de 5 x "+i+" est : "+resultat);

    // A chaque tour, on ajoute +1 à la variable i  
    i++; 
}

// instructions exécutées après le for (i vaut 10)
console.log("fin de la boucle");