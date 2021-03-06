//---------------------------------------------------------------------------------------------------------------------------//
// PUG:
//---------------------------------------------------------------------------------------------------------------------------//
// Es un view engine minimalista.
//---------------------------------------------------------------------------------------------------------------------------//
//Importar módulos:
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Especifico cual va a ser mi motor de plantillas (View Engine):
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    //Renderizar una vista según el motor especificado:
    res.render('index',{titulo: 'Template PUG', contenido: 'PUG Engine'});
});

app.listen(3000, () => {
    console.log('Servidor web iniciado en puerto 3000.')
});
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// ARCHIVOS DE VISTAS:
//---------------------------------------------------------------------------------------------------------------------------//
// Es necesario crear una carpeta views donde se alojarán las vistas que detectará pug.
//---------------------------------------------------------------------------------------------------------------------------//

//Contenido de archivo views/index.pug:----------------------------------------------//
html
    head
        title=titulo
    body
        div Hola mundo en #{contenido}
//-----------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------------------------------------------------//
