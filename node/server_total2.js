/*
	node后台 练习登录注册
*/
const http = require("http");
const url = require("url");
const querystring = require("querystring");

let users = {
	"zhangsan":"123456"
}

let server = http.createServer((req,res)=>{
	let path = '';
	let get = null;
	let post = null;
	if(req.method == "GET"){
		let {pathname,query} = url.parse(req.url,true);
		path = pathname;
		get = query;
		complete(path,get)
	}else if(req.method == "POST"){
		let arr = [];
		req.on("data",(buffer)=>{
			arr.push(buffer)
		});
		req.on("end",()=>{
			let buffer = Buffer.concat(arr);
			let post = querystring.parse(buffer.toString());
			complete();
		})
	};
	//回调函数
	function complete(path,method){
		if(path == "/reg"){
			let {username,password} = method;
			if(users[username]){
				console.log("进入if")
				res.write(JSON.stringify({code:102,msg:'用户已存在'})),
				res.end();
			}else{
				console.log("进入else")
				users[username] = password;
				res.write(JSON.stringify({code:101,msg:'注册成功'}));
				res.end()
			}
		}else if(path == "./login"){
			
		}
	}
}).listen(8081);