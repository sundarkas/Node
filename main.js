var http=require("http");
var fs=require("fs");

http.createServer(function(request,response){
    response.writeHead(200,{'Content-type':'text/plain'});
    fs.readFile('plandef.json',function(err,data){
        response.write(data);   
    })
    
}).listen(8081);

console.log('Server running in node');