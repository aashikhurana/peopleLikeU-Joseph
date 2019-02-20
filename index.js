var path = require('path');
var express = require('express');
var os = require("os");
var app = express();
console.log("express created");
app.use(express.static(path.join(__dirname, 'web')));
console.log("getting index.html");

app.get('/', function(req, res){
	console.log("rendering index.html");
    res.render('index.html');
});

var port = process.env.PORT || 3000; 
var host = os.hostname();
console.log('Listening on port ' +port);

app.listen(port);

console.log('Listening at host ' +host);
