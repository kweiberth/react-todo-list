var express = require('express');
var path = require('path');
var port = 3000;
var app = express();

app.use(express.static('./dist'));

app.use('/', function (req, res) {
    res.sendFile(path.resolve('client/index.html'));
});

app.listen(port, function(error) {
  if (error) throw error;
  console.log("Express server listening on port", port);
});
