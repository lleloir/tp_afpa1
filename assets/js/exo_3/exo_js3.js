let table=["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];

while(vrai = true){
let prenom= prompt("saisir un prenom");
let index = table.indexOf(prenom)
if(index > -1){
        table.splice(index,1,"")
        
    }
    
else
{   document.write(table+"<br>")
    document.write("Erreur"+"<br>")
    vrai=false
    break
}}