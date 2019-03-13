const http = require("http");
const url = require("url");
const querystring = require("querystring");
const fs = require("fs");

let sever = http.createServer((req,res)=>{
	let path = "";
	let get = null;
	let post = null;
	if(req.method == "GET"){
		let {pathname,query} = url.parse(req.url,true);
		path = pathname;
		get = query;
		complete(path,get)
	}else if(req.method == "POST"){
		path = req.url
		let arr = [];
		req.on("data",(butter)=>{
			arr.push(butter);
		});
		req.on("end",()=>{
			let buffer = Buffer.concat(arr);
			let post = querystring.parse(buffer.toString()) 
			complete(path,post)
		});
	};

	//回到函数
	function complete(path,method){
		console.log(path,method)
	}
}).listen(8081);