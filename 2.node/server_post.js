const http = require("http");
const querystring = require("querystring")

let server = http.createServer((req,res)=>{
	let arr =[];
	//接收
	req.on('data',(buffer)=>{
		arr.push(buffer);
	});
	//接收结束
	req.on('end',()=>{
		let buffer = Buffer.concat(arr);
		let post = querystring.parse(buffer.toString());
		console.log(post);
	});
});

server.listen(8081);