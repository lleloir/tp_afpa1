let pu = parseFloat(prompt("Saisir un prix"))
let qtecom = parseInt(prompt("Saisir une quantité"))
let tot=(pu*qtecom) 
let totrem = 0
let e = 0
let d = 0
let pap = 0
if(tot<100){
    let port = 0.02
    let d = (tot*port)
    if (d<6){
    let pap = (tot+6)
    document.write(pap+" euros")
    }
}
else if(tot>100 && tot<=200){
    let port = 0.02
    let rem = 0.05
   let totrem = (tot*rem)
   let e = (tot-totrem)
   let d = (e*port)
    if(d<6){
    let pap = (e+6)
    document.write(pap+" euros")
   }}
  else if(tot>200 && tot<=500){
    let port = 0.02
    let rem = 0.1
   let totrem = (tot*rem)
   let e = (tot-totrem)
   let d = (e*port)
    if(d<6){
    let pap = (e+6)
    document.write(pap+" euros")
   }
   else (d>6); {
    let pap = (e+d)
    document.write(pap+" euros")
   }  
}
else if(tot>500){
    let port = 0.02
    let rem = 0.1
   let totrem = (tot*rem)
   let e = (tot-totrem)
    if(e>500){
   let pap = (e)
   document.write(pap+" euros") 
   }
   else {
   let d = (e*port)
   if(d<6){
    let pap = (e+6)
    document.write(pap+" euros")
   }
   else if (d>6 && e<500) {
    let pap = (e+d)
    document.write(pap+" euros")
   } } }

  


