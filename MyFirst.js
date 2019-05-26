var http = require('http');
var dt= require('./DateModule.js');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(dt.GetDate());
}).listen(8080);