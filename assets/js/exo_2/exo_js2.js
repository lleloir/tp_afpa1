let tablemulti = prompt("qu'elle table de multiplication voulez-vous ?");
document.write("Résultat de votre demande :"+"<br>");
function table(tablemulti){
    for (i=0;i<=10;i++){
    let a =(tablemulti*i);
document.write(tablemulti +"x"+i+"="+a+"<br>");
}
}
table(tablemulti)



