var http=require('http');
var express=require('express');
var app =express();
var fs=require('fs');

// http.createServer(function(request,response){
//     response.writeHead(200,{'Content-type':'text/plain'});
//     response.end(fs.readFileSync('plandef.json'));
//     // fs.readFile('plandef.json',function(err,data){
//     //     response.write('hi');   
//     //     console.log('hello');
//     // });
// }).listen(8082);

app.get('/Resource', function (req, res) {
    console.log(req.query.ResourceName);
    res.writeHead(200,{'Content-type':'text/plain'});
    res.end(fs.readFileSync('plandef.json'));
 })

 app.post('/ValidateResource',function(request,response){
     console.log("ValidationHit");
     response.send('OK');
})

var server=app.listen(8082,function(){
    var host = server.address().address
   var port = server.address().port
   console.log("Server app listening at http://%s:%s", host, port)
})

