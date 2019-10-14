//require
var express = require("express");
var mongoose = require('mongoose');



//inicializar variables
var app = express();

//conexion d ela base de datos
mongoose.connect('mongodb://localhost:27017/catalogoweb', (err, res) => {
    if (err) throw err;

    console.log('Base de datos : \x1b[32m%s\x1b[0m', 'online');


});


app.get('/', (req, res, next) => {
    res.status(403).json({
        ok: true,
        mensaje: 'peticion realiada correctamente'
    });
});

//escuchar peticiones
app.listen(3000, () => {
    console.log('Servidor Express en el puerto 3000 : \x1b[32m%s\x1b[0m', 'online');
});