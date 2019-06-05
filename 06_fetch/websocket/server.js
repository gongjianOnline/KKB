const http = require("http");
const io = require("socket.io")

//1.建立http
let server = http.createServer((req,res)=>{});
server.listen(8081);


//2.建立ws
let wsServer = io.listen(server);

wsServer.on("connection",(sock)=>{
	//接收
	sock.on("aaa",function(a){
		console.log(a)
	});
	//发送
	sock.emit("res","word")
})


