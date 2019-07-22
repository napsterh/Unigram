var express = require('express');

var app = express();

app.get('/', function(req, res){
    res.send('Hola Mundillo');
})

app.listen(3000, function(err){
    if(err) return console.log('Hubo un error'), process.exit(1);
    console.log('unigram se esta ejecutando en el puerto 3000');
})

