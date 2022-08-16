var color = "red";
let name ="anja";
const vitesse ="10km/h";



//var color = "bleu"  afaka redeclarena mutable sy let 
// const tsy afaka redeclarena immutable 

// decl fonction = action (return =finalité an fonction)
// ao am fonction misy argument 
//function preparing() {
   // console.log("misakafo");
   //return "go" ; 


/*
function addition(a, b) {
    return a + b;
}

function soustraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}  OU
*/

var addition = (a, b) => {
    return a + b;
}

var soustraction = (a, b) => {
    return a - b;
}
var multiplication = (a, b) => {
    return a * b;
}
var division = (a, b) => {
    return a / b;
}

//condition:

/*if raha,
while rehefa,
(switch, case)raha toa ka
  */

  //boucle infinie==> while

  //=== comparer type et valeur
  //==comparer valeur
/*
if ("bleu" === "red") {
    console.log("true");
}
else {
    console.log("false");
}
*/

function calculatrice(a, b, signe){
    if (signe === "+"){
        return a + b;
    }
   
    if (signe === "-"){
        return a - b;
    }
   
    if (signe === "/"){
        return a / b;
    }

    if (signe === "*"){
        return a * b;
    }
}



//console.log(division(10, 2));
//console.log(multiplication(4 , 4))
//console.log(soustraction(4, 2));
//preparing();
//console.log(addition(2, 2));
//console.log(preparing());
//console.log(vitesse);
//console.log(color, name);

/*compilé E var
fonc 
cond
*/

