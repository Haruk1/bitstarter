var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());


// constants
var INDEX_HTML = "index.html";


// request handlers
app.get('/', function(request, response) {
    var buf = fs.readFileSync(INDEX_HTML);
    response.send(buf.toString());
});


// server
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
