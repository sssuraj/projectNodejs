const http = require('http');
const fs = require('fs');
const os = require('os');

const hostname = os.hostname;
const port = 8080;

const server = http.createServer( (req,res)=>{
    res.statusCode = 200.
    res.setHeader('Content-Type', 'text/html');
    fs.readFile('../html/demoHtml.html', function(err, data) {
        if (err) {
            res.writeHead("404: Error Occured : Could not load file")
        } else {
            res.write(data);
        }
        res.end();
    });
});

server.listen(port, hostname, ()=> {
    console.log('Server is running on http://${hostname}:{port}');
});

/*
http.createServer(function(req, res){
    fs.readFile('../html/demoHtml.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();      
    });
}).listen(8080);
*/