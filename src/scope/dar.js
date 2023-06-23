//declaration  D
//assignation  A
//reassignation R

//dar.js DAR.js


var name; //declaration by default undefined assignation
console.log(name) //undefined

var name = 'Juan' //redeclaration and assignation
console.log(name) //Juan


 name = 'Manuel'  //reassignation
 console.log(name);


 var surName = "Pedraza"; //declaration and assignation
 console.log(surName);

 var surName = 1234; //redeclaration and assignation change type
 console.log(surName);



 //var type LET // not redeclaration allowed but allow reassignation
 let letSurName = "Juan";
 //this is not allowed, ERROR!!
 //let letSurName = 123  
 console.log(letSurName);

 letSurName = "Sofia";
 console.log(letSurName) //This is allowed, Let allow reassignation;






 //var type CONST // not redeclaration and reassignation allowed
 //but if is a object or array in this case allow change 
 //the elements of array o the properties the object
 //in case of a function allow execution to the function
 //with differets arguments passed to the function.
 //in case of the function, array or object, the constant save
 //a referente of memory to this elements
 //the var constat with the reference memory not allowed changes, but the 
 //element allow changes.


 //Required declaration and assignation in the same line.
const FIRST_NAME = "JUAN"; // declaration and assignation var CONST
console.log(FIRST_NAME);


// This not allowed, required declaration and assignation in the same 
//line when is var CONST
//const LAST_NAME;
//LAST_NAME = "PEDRAZA";

//This not allowed, CONST not allowed reassignation
//FIRST_NAME = "Juan Manuel";

//This not allowed, CONST not allowed re-declaration
const FIRST_NAME = "MANUEL";


//In this case the obj CONST VAR, save the referente memory to the object, not the object
//the opj VAR CONST not can change to other value, or type, 
//but the object if can change the properties values
const obj = {
    Name: 'Juan'
};

console.log(obj);

obj.Name = "Manuel"
console.log(obj);


//In this case is the same to the object, the arr CONST VAR
//Save the memory referente to the ARRAY
//The array elements can change
//but the arr CONST VAR dont chage type or valye to this 
//memory reference.

const arr = [];

arr.push("Juan");
console.log(arr);

arr.push("Diana");
console.log(arr);

arr.push("Sofia");
console.log(arr);

arr.push("Perry");
console.log(arr);

