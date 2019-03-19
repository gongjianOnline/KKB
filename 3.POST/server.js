const http = require("http");

http.createServer((req,res)=>{
	let arr = [];
	console.log("进入服务");

	req.on("data",(buffer)=>{
		arr.push(buffer)
	})
	req.on("end",()=>{
		let buffer = Buffer.concat(arr);
		console.log(buffer.toString())
	});
}).listen(8080)