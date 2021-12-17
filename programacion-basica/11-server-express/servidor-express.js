const express = require('express'); // llamamos a la libreria express y lo guardamos en una constante como una función
const app = express(); //guardamos la funcion express y la guardamos en una constante app
 
app.get('/', function (req, res) { //get es la url que pedimos y colamos el pedazo de dirección que se vá a pedir 
    //dusoaramos la funcion inicios con req y res
    //req =  es la peticion lo que el navegador le está pidiendo al servidor
    //res = response es el resultado que manda el servidor al navegador
  res.send('Hola pibe') //en resultado mandamos con send un string
})
 
app.listen(3000) // el servidor que escucha en listen