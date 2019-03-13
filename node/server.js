const http = require("http");
const fs = require("fs")

let server = http.createServer(function(req,res){
	// console.log(req.url)
	// res.write("abc");
	// res.end();

	fs.readFile(`www${req.url}`,function(err,buffer){
		if(err){
			res.writeHeader(404);
			res.write("Not Found");
			res.end();
		}else{
			res.writeHeader(200);
			res.write(buffer);
			res.end();
		}
	})

});

server.listen(8081)