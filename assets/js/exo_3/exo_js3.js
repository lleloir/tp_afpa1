function exo_3(){
let table=["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];

while(vrai = true){
let prenom= prompt("saisir un prenom");
let index = table.indexOf(prenom)
if(index > -1){
        table.splice(index,1,"")
        document.write("Félicitation un prénom trouvé")
        vrai=false
        break  
    }
    
else
{   continue
    
}}}