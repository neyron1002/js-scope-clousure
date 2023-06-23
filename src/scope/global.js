

var a; //declaracion de una variable
var b = "Juan"; //declaracion y asignación de una variable

b = "Sofia"; //reasignación de una variable

var a = 2; //redeclaración y asignación de una variable.

var company = "Neyron"; //Global scope
console.log(company); 


function nameCompany(){
    console.log(company);
}

nameCompany();



//declaración accidental de una variable global

function testGlobalVar(){

    //Si no declaramos una variable si no que de una vez la asignamos, esta pasa
    //por defecto a ser una varibale global.
    //Ojo con esto variable global accidental.

    greet = 'Hi'; //This case is global scope.
    console.log(greet);
}


testGlobalVar();
console.log(greet);


//personal test accidentally var global declaration

function testGlobalVarJM(){
    var greetJM = "Hi JM"; //This not is global scope, is function scope
    console.log(greetJM);
}

testGlobalVarJM();
console.log(greetJM);