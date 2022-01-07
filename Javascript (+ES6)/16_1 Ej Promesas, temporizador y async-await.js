//----------EJEMPLO USANDO PROMESAS TEMPORIZADORES ASYNC Y AWAIT CON MANEJO DE ERROR------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------

//Defino datos a usar
let usuarios = [
    {idUsuario: 1, nombreUsuario: 'Camilo'},
    {idUsuario: 4, nombreUsuario: 'Leandro'}
  ];

//Función obtener usuario:
const getUsuario = (id) => {
    //Asignar una promesa al retorno:
    return new Promise ((resolve, reject) => {
      if(UsuarioEncontrado = usuarios.find(usuarios => usuarios.idUsuario == id)){
        //Retorno en caso de éxito:
        console.log("Encontrado, imprimiendo...");
        setTimeout( () => {
            resolve(UsuarioEncontrado);
        }, 2000);
      } else {
        //Retorno en caso de error:
        reject("El usuario no existe.");
      }
    });
  };

//Defino la funcion como asíncrona:
  async function showData(){
    //Ejecutar funcion con promesa de retorno:
    ////Manejar el error con catch
    const json = await getUsuario(4)
        .catch(error => {
            console.error("<b>Error: </b>" + error)
    });
    //Si no da error
    if( json != Error.Promise)
        console.log("<b>Nombre: </b>" + json.nombreUsuario);
    }

//Ejecuto la funcion
showData();
