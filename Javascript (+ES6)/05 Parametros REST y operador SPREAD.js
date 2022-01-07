//------------------------------------------------------------------------------------------------------------------------------------------//
//PARAMETROS REST:
//Permite el manejo dinámico de parámetros:
function sumar (a, b, ...parametros_rest){
  let resultado = a + b;

  //parametros_rest: contendrá todos los parametros infinitos que puedan haber ingresado al invocar la función.
  parametros_rest.forEach(function(actual)){
    resultado += actual;
  });

  return resultado;
}
//------------------------------------------------------------------------------------------------------------------------------------------//

//------------------------------------------------------------------------------------------------------------------------------------------//
//OPERADOR SPREAD:
const arreglo_uno = [1, 2, 3, 4, 5];
const arreglo_dos = [6, 7, 8, 9, 10];

//Merge con el operador de propagación:
const arreglo_tres = [...arreglo_uno, ...arreglo_dos];
//------------------------------------------------------------------------------------------------------------------------------------------//
