//ENTORNO LEXICO
//LEXICAL ENVIRONMENT


//El entorno léxico es un objeto que tiene los contextos de ejecución donde
//se almacenan los nombres de las variables que existen dentro 
//de una función y los valores actuales que tienen.

//clave / valor
//nombres de las variables // valores de las variables

//registro de entorno
//environment record

//CADA VEZ QUE SE EJECUTA UNA FUNCIÓN EN JAVASCRIPT, SE CREA UN NUEVO
//CONTEXTO DE EJECUCIÓN CON UN NUEVO ENTORNO LÉXICO


//API DE UN OBJETO
//La interdaz que tiene un objeto para interacturar con el mismo.
//Qué métodos podemos invocar sobre ese objeto y a qué propiedades
//internas nos permiten acceder


//VENTAJAS DE LAS CLAUSURAS O CLOSURE
//PROTEGER VARIBLES INTERNAS
//FABRICA DE FUNCIONES

//LA CLOUSURE ES UN PATRON DE DISEÑO

//FUNCIONES DE CIERRE


function advanceCounter(){
    let counter = 0;

    return {
        add: function (){
            counter ++;
            return counter;
        },
        less: function (){
            counter --;
            return counter;
        },
        current: function (){
            return counter;
        }
    }

}


let counter1 = advanceCounter();
counter1.add()
counter1.add()
counter1.add()
counter1.add()
counter1.less()
console.log(counter1.current());



function customCounter(count = 0){
    return {
        add : ()=> count ++,
        less : () => count --,
        current: () => count,
    }
}

let customCounter1 = customCounter(100);
customCounter1.add();
customCounter1.add();
console.log(customCounter1.current());


let customCounter2 = customCounter(500);
customCounter2.less();
console.log(customCounter2.current());

