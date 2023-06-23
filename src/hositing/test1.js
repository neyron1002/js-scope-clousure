{
    // ¡Las 2 variables siguientes van a ser elevadas al inicio del scope!
	console.log(typeof variableQueNoExiste); // Imprime undefined
	console.log(typeof name); // Devuelve error, no puede acceder a 'name' antes de inicializarla

	let name = "Kealan";
}

let a = f(); // 1
const b = 2;
function f() { return b; } // 2, b está en la TDZ