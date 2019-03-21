const http = require("http");
const mysql = require("mysql");

//1.连接服务器
let db = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'',
	// port:3306 修改端口号
	database:'2019-3-21'
});
// db.query('SELECT * FROM user_table',(err,data)=>{
// 	if(err){
// 		console.log("报错",err)
// 	}else{
// 		console.log(data)
// 	}
// })

//向数据库中增加一条数据
let username = "bule";
let password = "admin";
db.query(`INSERT INTO user_table (user_name,password) VALUES ('${username}','${password}')`,(err,data)=>{
	if(err){
		console.log("错误",err)
	}else{
		console.log(data)
	}
})