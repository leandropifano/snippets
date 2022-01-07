//------------------------------------------------------------------------------------------------------------------------------------------//
//OPERADORES:
//Matemáticos:
// + - / * %

//Relacionales:
// > < >= <= == !=
//=== (idéntico, compara a su vez el tipo de dato).

//Lógicos:
// && (AND) || (OR)
//------------------------------------------------------------------------------------------------------------------------------------------//

//------------------------------------------------------------------------------------------------------------------------------------------//
//IF (CONDICIONAL - SELECCION SIMPLE):
if (condicion) {
  //...//
} else if (condicion) {
  //...//
} else {
  //...//
}

//OPERADOR TERNARIO (SIMPLIFICACIÓN):
//(condicion) ? verdadero : false ;
console.log((condicion) ? "Condición verdadera" : "Condición falsa");
//------------------------------------------------------------------------------------------------------------------------------------------//

//------------------------------------------------------------------------------------------------------------------------------------------//
//SWITCH (SELECION MULTIPLE):
switch (expresion) {
	case 0:
		//...//
		break;
	case 1:
		//...//
		break;
  case 'palabra':
  		//...//
  	break;
  default:
    //...//
}
//------------------------------------------------------------------------------------------------------------------------------------------//

//------------------------------------------------------------------------------------------------------------------------------------------//
//ITERACION (IMPERATIVA):

//WHILE:
while (condicion_corte) {
	//...//
}

//DO WHILE (Control posterior):
do {
  //...//
} while (condicion_corte);

//FOR (Subrango):
for (let i=0; i<=10; i++){
	//...//
}

/*FOR IN (Recorre un vector hasta NULL):*/
//En ámbitos de arrays:
let arreglo = [2, 4, 6, 8, 10];

for (let actual in arreglo){
	console.log(actual);
}

//En ámbitos de objetos:
const objPersona = {
  nombre: "Camilo",
  apellido: "Pifano"
};

for (const propiedad in objPersona){
	console.log(objPersona[propiedad]);
}
//------------------------------------------------------------------------------------------------------------------------------------------//

//------------------------------------------------------------------------------------------------------------------------------------------//
//FOREACH:
//En ámbitos de arrays:
let arreglo = [2, 4, 6, 8, 10];

//Método del objeto array:
arreglo.forEach(function(actual, clave, array) {
    console.log("En la posición " + clave + " se encuentra el valor: " + actual);
});

//En ámbitos de objetos:
const objPersona = {
  nombre: "Camilo",
  apellido: "Pifano"
};

//ES6:
Object.keys(objPersona).forEach(clave => console.log(clave, objPersona[clave]));

//ES5:
Object.keys(objPersona).forEach(function(clave){
  console.log(clave, objPersona[clave]);
});
//------------------------------------------------------------------------------------------------------------------------------------------//

//------------------------------------------------------------------------------------------------------------------------------------------//
//CONTINUE:
//Es una estructura de corte como break pero a diferencia de break, continue no corta el bucle.
while (condicion_corte){
	//...//
	if (condicion){
		continue; //Continue nos permite saltar una vuelta en el bucle y continuar al siguiente.
	}
	//...//
}
//------------------------------------------------------------------------------------------------------------------------------------------//

//------------------------------------------------------------------------------------------------------------------------------------------//
//TRY CATCH FINALLY (MANEJO DE ERRORES):
try {
  //Código a evaluar:
  if(isNaN(numero)){
    //Lanzar un error personalizado:
    throw new Error("El valor ingresado no es numérico.")
  }
} catch (error) {
  //Si hay error en el código de try, catch captura el error:
  console.log(error);
} finally {
  //Finally se ejecutará siempre al finalizar con o sin error.
}
//------------------------------------------------------------------------------------------------------------------------------------------//
