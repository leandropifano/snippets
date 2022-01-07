//------------------------------------------------------------------------------------------------------------------------------------------//
//EXPRESIONES REGULARES:
//Secuencias de caracteres que representan un patrón de búsqueda.
//------------------------------------------------------------------------------------------------------------------------------------------//
let parrafo = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

//CREAR expresiones regulares:
//i Case insensitive.
//g Global: busca todas las coincidencias, no se detiene a la primer aparición.
////Con su método constructor
let expReg = new RegExp("lorem","ig");

////Usando el estandar de expresiones regulares en su definicion.
let expReg = /lorem/ig;

//METODOS para expresiones regulares:-------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------------------------------------------//
////Devuelve true o false
let resultado_booleano = expReg.test();

////Devuelve un arreglo de información luego de ejecutar una búsqueda por una coincidencia en una cadena.
let array_resultado = expReg.excec();

////Devuelve un arreglo que contiene todas las coincidencias, incluidos los grupos de captura.
let array_resultado = parrafo.match(expReg);

////Devuelve el índice de la coincidencia, (-1 si la búsqueda falla).
let indice_resultado = parrafo.search(expReg)
//------------------------------------------------------------------------------------------------------------------------------------------//