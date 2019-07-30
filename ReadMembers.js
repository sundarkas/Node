var http=require('http');
var express=require('express');
var app =express();
var fs=require('fs');
var JSP=require('underscore');

http.get('http://www.pcacricinfo.com/PCAStatsService.svc/PCA/GetMemberDetails',(res)=>
	{
		console.log("ResponseCode ",res.statusCode);
		console.log("Headers ",res.headers);
		res.on('data',d=>{
			console.log("Going to write file!");
			/*fs.open('Membersdata.json',d, function(err) 
			{
   				if (err) {
      						return console.error(err);
   						 }
			}
			)*/
			var Membersdetails =JSON.parse(d);
			JSP.map(Membersdetails,function(content){
				JSP.map(content,function(data){
					console.log("Members Name:",data.Name);
				})
			})	
			//console.log(Membersdetails);
	})
});