'use strict'

//IN STRICT MODE 
//javascript dont allow auto hoisting or auto declaration variables in
//compilation time, in this mode is required explicit declaration 
//of all variables

//THIS IS ERROR IN USE STRICT MODE
/*
pi = 3.1416;
console.log(pi);
*/

var pi = 3.1416
console.log(pi);


//THIS IS ERROR, USE STRICT MODE IS ENABLE FOR ALL FILE
/*
function  greeting(){
    name = 'Juan';
    console.log("Hi, ", name);
}

greeting();
*/


//THIS IS USE STRICT ONLY IN A FUNCTION SCOPE
// USE STRICT MODE NOT CAN DEFINED IN A BLOCK SCOPE BUT IN A FUNCTION SCOPE
// IS ALLOWED

/*
function greeting2(){
    'use strict'
    name = "manuel"
    console.log( "Hi, ", name );
}
*/


//THIS IS CORRECT IN USE STRICT MODE
function greeting2(){
    'use strict'
    let name = "manuel"
    console.log( "Hi, ", name );
}

greeting2();