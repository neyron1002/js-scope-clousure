
//CONTADOR CON CLOUSURE
//solo haciendo prubas y recordando el tema del prototype de cualquier 
//objeto java, una funcion es un objeto y tiene el prototype, y al usar
//el this, se crean propiedades de contexto tipo clase, lo que convierte
//la función en una clase.
function crearContador(){
    let contador = 0;
    this.a = function incrementar(){
        contador ++;
        return contador;    
    }

    return contador;
}

//console.log(crearContador.a())

let a = new crearContador()
console.log(a.a())



function crearContador(){
    let contador =0;
    function incrementar(){
        contador ++;        
    }

    incrementar();
    console.log(contador);
}

crearContador();



//AHORA SI EL CLOUSURE

function clousureContador(){
    let contador = 0;
    function incrementar(){
        contador ++;
        return contador;
    }

    return incrementar;
}

let clousureC = clousureContador();


//mantiene el valor de la variable y lo va aumentando, en cada ejecución
console.log(clousureC());
console.log(clousureC());
console.log(clousureC());
console.log(clousureC());


//Aqui no se activa el clousure debe ser ejecutado sobre una variable para
//que la variable almacene la funcion incrementar, junto con el vinculo
//al scope lexico de la funcion padre, que contiene la variable 
//contador, y al mantener este vinculo y estar guardado en la variable
//cada ejecución almancenara el valor anterior y realizara el incremente
//para este caso practico.
console.log(clousureContador());

