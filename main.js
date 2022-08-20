//nb: un langage compilé = var  fonc   cond 
//declaration en js:

var color = "red";
let name ="anja";
const vitesse ="10km/h";
var color = "bleu"; //var sy let afaka redeclarena: mutable 
                    //const tsy afaka redeclarena :immutable 

/*
 decl fonction = action (return =finalité de la fonction)
 ao am fonction misy argument 
ex declaration fonction
ex1:function preparing() {
   console.log("misakafo");
   return "go" ; 
}
*/

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
} 

//OU
//ex2:

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
/*
if =raha,
while =rehefa,
(switch, case)=raha toa ka

  boucle infinie==> while

  === comparer type et valeur
   ==comparer valeur
*/
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

// do_while

function calculatrice(a, b, signe){
do {
    a / b;
} 
while (a != 0);
}

// switch_case
function calculatrice(a, b, signe){
    switch(signe){
        case "addition" :
        return a + b;
        case "soustraction" :
        return a - b;
    }
}

//console.log(addition(10,10))
//console.log(soustraction(10,10))
//console.log(division(10, 2));
//console.log(multiplication(4 , 4))
//console.log(soustraction(4, 2));
//console.log(addition(2, 2));
//console.log(preparing());
//console.log(vitesse);
//console.log(color, name);     
//____________________________________________________________________________

/*javascript_d2
recherche sur :branche creation & basculement & mis a jour & suppression branche 
creatin d' une branche:1. git branch <nom de la branche>
                         git branch (pour afficher la liste de branche)
                    2.git checkout -b <branch name>
                        git branch
                    3. git checkout -b branche2 branche1 (creation de la branche2 a partir de la branche1)
basculement : git checkout (pour afficher l'ancien commit) 
                            (permet de basculer entre les branches crée au moyen de git branch)                      
mise a jour: merge 
            rebase
suppresion de la branche: git checkout
                          git branch -d<nom de la branche>
 pour comprendre le git->recherche 

 tableau ARRAY_______
def: tableau zvtr afaana mstocker zavatra 
     stucturé kokoa noho ny var
ligne = asina ny valeur / misy col /
nb: -manisa manomboka 0 (consideration 0 comme nb reel )
    -rehefa tab fa msi langage manisa depart 1
     -ny chaine de caractere tsy voteru "" fa afaka ''
++ = pointer+1
pointeur(un var)= un cle :initiateur ny tab= alefa mitety ny tab
 acceder un valeur => bouclena ilay tab
 tab= tsy multidim @ js 
 tab am js dia obj 
 tab uni-dim
 tab 2-dim
 tab multidim: tab dans tab 
*/
// decl tab 
/*
var alphabet = ["a", "b", "c"];
for (let pointer = 0; pointer < alphabet.length; pointer++) {
    console.log(pointer);
    console.log(alphabet[pointer]);
} 


var alphabet = ["a" , "b" , "c"];
for (let pointer = alphabet.length-1; pointer >= 0; pointer--) {                        //.length = taille tab
    console.log(pointer);
    console.log(alphabet[pointer]);
}


var alphabet = ["a" , "b" , "c"];
    alphabet.pop();                      //.pop= manala ny ao arina
    console.log(alphabet)


    var alphabet =  ["a" , "b" , "c"];
    alphabet.shift();                     //.shift=manala ny ao aloha 
    console.log(alphabet);


var alphabet = ["a" , "b" , "c"];
console.log(alphabet.join("/"));     //.join=jointure du tab => chaine de caract + jointure 


var alphabet = ["a" , "b" , "c"];
alphabet.push("Anja");             //mampiditra valeur any arina 
console.log(alphabet);


var alphabet = ["a" , "b" , "c"];
console.table(alphabet);         //afficher tab


var alphabet = ["a" , "b" , "c"];
alphabet.includes("b");
console.log(alphabet.includes("b"));  //misy "b" ve ao? (true / false)
*/

