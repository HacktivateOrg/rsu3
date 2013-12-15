var http = require('http');
var static = require('node-static');
var file = new(static.Server)('.');
var net = require('net');
var tcpClients = [];

// Create HTTP server
var port = 8081;
var serv = http.createServer(function (req, res) {
  console.log('HTTP Connection');
  req.addListener('end', function () {
    // Serve files!
    file.serve(req, res);
  }).resume();
}).listen(port);
console.log('HTTP Server running on port: ' + port);
