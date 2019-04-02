const fs = require("fs")

let rs = fs.createReadStream("1.txt") //读取数据
let ws = fs.createWriteStream("2.txt") //写入流

rs.pipe(ws); //将读取的rs写入到ws里面 

//弹出读取时的报错信息
rs.on("err",(err)=>{
	console.log("读取的报错信息",err)
})
//弹出写入的报错信息
ws.on("err",(err)=>{
	console.log("写入的报错信息",err)
})
//弹出写入成功的信息
ws.on("finish",()=>{
	console.log("写入成功")
})

