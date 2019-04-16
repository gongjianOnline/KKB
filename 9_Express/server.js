/*
	name:"";
	date:'2019-4-16'
	Explain:"express框架get接口测试"
*/
const express = require("express");
let server = express();
server.get('/a',(req,res,next)=>{
	res.header('Access-Control-Allow-Origin', '*')
	res.send({code:101,data:{data:[{lable:1,value:'测试接口'}],obj:{option:1,option2:15}}});
	console.log(req.query)
})
server.listen(8888)


