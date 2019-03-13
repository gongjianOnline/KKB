const http = require("http");

//请求
let sever = http.createServer(function(request,response){
	// console.log("请求列表")
	response.write("asd");
	response.end();
});

//监听
sever.listen(8081);