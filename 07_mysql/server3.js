/*
	1.参考server2.js的简化版
	2.引入了co-mysql异步封装的插件
	3.code码说明：
		注册：
			103 用户已存在
			102 用户名/密码为空
			500 node报错
		登录:
			101 成功
			102 用户名/密码为空
			103 用户不存在
			500 node错误
*/
const http = require("http")
const mysql = require("mysql")
const co = require("co-mysql")
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
	res.setHeader("Access-Control-Allow-Origin", "*"); //解决node跨域问题
	let {pathname,query} = url.parse(req.url,true);
	if(pathname == "/register"){
			if(query.user_name == '' || query.password == '' || query.length == 0){
				res.write(JSON.stringify({code:102}));
				res.end()
			}
			//检查用户名是不是存在
			try{
				let datas = await db.query(`SELECT user_name FROM user_table WHERE user_name='${query.user_name}'`);
				if(datas.length>0){
					res.write(JSON.stringify({code:103}));
				}else{
					db.query(`INSERT INTO user_table (user_name,password) VALUES ('${query.user_name}','${query.password}')`);
					res.write(JSON.stringify({code:101}))
				}
			}catch(e){
				console.log("err",e)
				res.write(JSON.stringify({code:500}))
			}
			res.end() 
			// db.query(`SELECT user_name FROM user_table WHERE user_name='${query.user_name}'`,(err,data)=>{
			// 	if(err){
			// 		res.write(JSON.stringify({code:500}))
			// 	}else if(data.length>0){
			// 			res.write(JSON.stringify({code:103}))
			// 	}else{
			// 		db.query(`INSERT INTO user_table (user_name,password) VALUES ('${query.user_name}','${query.password}')`,(err,data)=>{
			// 			if(err){
			// 				res.write(JSON.stringify({code:500}))
			// 			}else{
			// 				res.write(JSON.stringify({code:101}))
			// 			}
			// 		})
			// 	}
			// })
	}else if(pathname == "/login"){
		console.log("post")
		let arr = [];
		req.on("data",(buffer)=>{
			arr.push(buffer)
		});
		req.on("end",async ()=>{ //异步回调
			let buffer = Buffer.concat(arr)
			let {user_name,password} = querystring.parse(buffer.toString())
			if(user_name == '' ||password == ''){
				res.write(JSON.stringify({code:102}))
				res.end()
			}else{
				let data = await db.query(`SELECT user_name FROM user_table WHERE user_name='${user_name}' AND password='${password}'`)
				try{
					console.log(data)
					if(data.length > 0){
						res.write(JSON.stringify({code:200}))
					}else{
						res.write(JSON.stringify({code:103}))
					}
				}catch(err){
					res.write(JSON.stringify({code:500}))
				}
				res.end();

				// db.query(`SELECT user_name FROM user_table WHERE user_name='${user_name}' AND password='${password}'`,(err,data)=>{
				// 	if(err){
				// 		res.write(JSON.stringify({code:500}))
				// 	}else{
				// 		if(data.length > 0){
				// 			console.log("登录成功")
				// 			res.write(JSON.stringify({code:200}))
				// 		}else{
				// 			res.write(JSON.stringify({code:103}))
				// 		}
				// 	}
				// 	res.end()
				// })
			}
		})
	}
}).listen(8081)

