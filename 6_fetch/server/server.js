const http = require("http");
const multiparty = require('multiparty')

http.createServer((req,res)=>{
	console.log("进入服务")
	//注意：要提前定义好upload文件夹 否则会报错
	let form = new multiparty.Form({uploadDir:'./upload/'})
	form.parse(req);
	form.on("field",(name,value)=>{
		console.log('field',name,value);
	});
	form.on("file",(name,file)=>{
		console.log("file",name,file);
	});
	form.on('close',()=>{
		console.log("结束");
	});
	form.on("end",()=>{})
}).listen(8085)