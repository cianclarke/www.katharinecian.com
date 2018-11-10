
/**
 * Module dependencies.
 */

var express = require('express');

var app = express(),
port = process.env.PORT || 3000,
host = process.env.HOSTNAME || '0.0.0.0';
app.use(express.static(__dirname + '/'));

app.listen(port, host, function(){
  console.log("Express server listening on port " + port);
});
