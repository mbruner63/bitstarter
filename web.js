var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var buffy = fs.readFileSync("index.html","utf8");
  response.send(buffy.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
