var http = require("http");
var fs = require("fs");

var e = function(ee){
	res.end(ee);
}

var server = http.createServer(function(req,res){
	var filepath ="."+ req.url;
	if(filepath == "./"){
		filepath = "./index.html";
	}
	fs.readFile(filepath,function(e,content){
		res.end(content);
	});

});

server.listen(1111);