var http = require('http');
var dt = require('./myfirstmodule');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("Current Date Time : " + dt.myDateTime());
  res.end('Hello World!');
}).listen(8080);