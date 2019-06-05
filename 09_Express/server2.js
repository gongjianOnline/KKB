/*
	name:"";
	date:'2019-4-16'
	Explain:"express框架post接口测试,利用body-parser接收参数"
*/
const express = require("express");
const body = require("body-parser");
let server = express();;
server.use(body.urlencoded({ //是否开启加载模式，需要放在post路由外执行；（去除警告）
		extended:false
}));
server.post("/a",(req,res,next)=>{
	res.header('Access-Control-Allow-Origin', '*')
	res.send({code:101,data:{arr:[{label:0,value:"post接口测试"}]}});
	console.log(req.body)
});
server.listen(8888)