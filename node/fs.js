/*
	说明：fs 是node自身提供对文件目录写入/读取的操作
*/
const fs = require("fs");
//写入
fs.writeFile("./test.txt","测试数据",(err)=>{
	if(err){
		console.log("失败",err)
	}else{
		console.log("成功")
	}
})

//读取
fs.readFile("./test.txt",(err,data)=>{
	if(err){
		console.log("失败",err)
	}else{
		console.log("成功",data.toString())
	}
})