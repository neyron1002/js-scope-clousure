//ECMA SCRIPT 6
//let const se incluyen en ECMA SCRIPT 6
//Block scope update in ECMA SCRIPT 6

//all code define in handlebars is a block



function fruits(){

    //This is a function Scope

    {

        //This is a block scope

        var f1 = "Apple"; //Function Scope // var allow redeclaration and reasignation
        let f2 = "Kiwi"; //Block Scope // let dont allow redeclaration but allow reasignation
        const f3 = "Orange"; //Block Scope const not allow redeclaration and reasignation

    }

    console.log(f1);
    console.log(f2);
    console.log(f3);

}


fruits();




function fruits2(){
    
    //this is a scope function
    {
        //this is a scope block
        
        var f1 = "Apple"; //Function Scope // var allow redeclaration and reasignation
        let f2 = "Kiwi"; //Block Scope // let dont allow redeclaration but allow reasignation
        const f3 = "Orange"; //Block Scope const not allow redeclaration and reasignation

        console.log(f2);
        console.log(f3);
    
    }

    console.log(f1);
}

fruits2();


var x = 1;
{
    var x = 2;
    console.log(x);
}

console.log(x);


let x = 1;
{
    let x = 2;
    console.log(x);
}

console.log(x);


function exampleFor(){
    for (var i = 0; i < 10; i ++)
    {
        setTimeout(function(){
            console.log(i);
        },1000);
    }
}

exampleFor();





function exampleFor2(){
    for (let i = 0; i < 10; i ++){
        setTimeout(() => {
            console.log(i);
        }, 1000);
    }
}

exampleFor2();