const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = q.pathname;

    fs.readFile('../html' + filename, function(err, data){
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.end('400: file not found');
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);

