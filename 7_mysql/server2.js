/*
	使用http请求node接口操作数据库;
	createPool 建立连接池
*/ 
const http = require("http")
const mysql = require("mysql")
const url = require("url")

let db = mysql.createConnection({
	host:"localhost",
	user:"root",
	password:" ",
	database:'2019-3-21'
})
//连接池
// let db = mysql.createConnection({
// 	// connectionLimit:10 //最大连接数，默认为10
// 	host:"localhost",	
// 	user:"root",
// 	password:"",
// 	database:'2019-3-21'
// })
//2.http请求
http.createServer((req,res)=>{
	res.setHeader("Access-Control-Allow-Origin", "*");
	
	let {pathname,query} = url.parse(req.url,true);
	console.log(query.user_name == '')
	if(query.user_name == '' || query.password == ''){
		console.log("数据为空")
		res.write(JSON.stringify({code:102}))
		res.end()
	}
}).listen(8081)

