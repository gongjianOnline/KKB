/*
	name:"";
	date:'2019-4-16'
	Explain:"express框架multer上传文件"
*/
const express = require("express");
const body = require("body-parser");
const multer = require("multer");
let server = express();
server.listen(8888)
server.use(body.urlencoded({ //是否开启加载模式，需要放在post路由外执行；（去除警告）
		extended:false
}));
let obj = multer({
	dest:'./upload'
});
server.use(obj.any())

server.post("/reg",(req,res,next)=>{
	res.header('Access-Control-Allow-Origin', '*')
	res.send({code:101,data:{arr:[{label:0,value:"post接口测试"}]}});
	console.log(req.body);
	console.log(req.files);
});


