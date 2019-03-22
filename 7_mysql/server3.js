/*
	1.参考server2.js的简化版
	2.引入了co-mysql异步封装的插件
*/

const http = require("http")
const mysql = require("mysql")
const co = require("co-mysql'")
const url = require("url")
const querystring = require("querystring")

//连接池
let conn = mysql.createPool({
	// connectionLimit:10 //最大连接数，默认为10
	host:"localhost",	
	user:"root",
	password:"",
	database:'2019-3-21'
})
let db = co(conn)

//2.http请求
http.createServer(async (req,res)=>{
	res.setHeader("Access-Control-Allow-Origin", "*");
	let {pathname,query} = url.parse(req.url,true);
	if(query.user_name == '' || query.password == '' || query.length == 0){
		res.write(JSON.stringify({code:102}))
		res.end()
	}else if(pathname == "/register"){
		db.query(`SELECT user_name FROM user_table WHERE user_name='${query.user_name}'`,(err,data)=>{
			if(err){
				res.write(JSON.stringify({code:500}))
				res.end()
			}else if(data.length>0){
					res.write(JSON.stringify({code:103}))
					res.end()
			}else{
				db.query(`INSERT INTO user_table (user_name,password) VALUES ('${query.user_name}','${query.password}')`,(err,data)=>{
					if(err){
						res.write(JSON.stringify({code:500}))
						res.end()
					}else{
						res.write(JSON.stringify({code:101}))
						res.end()
					}
				})
			}
			
		})
	}else if(pathname == "/login"){
		let arr = [];
		req.on("data",(buffer)=>{
			arr.push(buffer)
		});
		req.on("end",()=>{
			let buffer = Buffer.concat(arr)
			let {user_name,password} = querystring.parse(buffer.toString())
			console.log(user_name,password)
			if(user_name == '' ||password == ''){
				res.write(JSON.stringify({code:102}))
				res.end()
			}else{
				db.query(`SELECT user_name FROM user_table WHERE user_name='${user_name}' AND password='${password}'`,(err,data)=>{
					if(err){
						res.write(JSON.stringify({code:500}))
						res.end()
					}else{
						if(data.length > 0){
							console.log(data.length)
							console.log(data)
							res.write(JSON.stringify({code:200}))
							res.end()
						}else{
							res.write(JSON.stringify({code:103}))
							res.end()
						}
					}
				})
			}
		})
	}
}).listen(8081)

