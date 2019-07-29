const express = require('express');
const THREE = require('three');
const app = express();
const port = process.env.PORT ||  5353;

//const path = __dirname + '/views/';

app.get('/', function(req, res){
        res.sendFile(__dirname + '/index.html');
        })

// Setup the static location for images <- so express knows this is where static files are
app.use(express.static(__dirname + '/public'));


app.listen(port, function(){
           console.log('listening on: ' + port);
           })
