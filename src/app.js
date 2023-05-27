const express = require('express')
const app = express()
const mysql = require('mysql')

//datos para conectar a la base de datos
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "marvel"
});

//Usar funcion urlencode para poder usar los datos del formulario codificados en JSON
app.use(express.urlencoded())

//rutas
const routes = require('./routes/index.routes')
app.use(routes)
app.post('/marvel', (req, res) => {
    var respuesta = ""

    con.connect(function(err) {
        if(err) throw err;
        con.query("SELECT * FROM marvel", function (err, result, fields) {
            if (err) throw err;
            Object.keys(result).forEach(function(key) {
                var row = result[key];
                console.log(row.Name);
                respuesta = respuesta + row.Name + '<br>'
            });
            res.send(respuesta)
            //console.log(result);
        });
    });    
});