/** 
 * name:"",
 * date:"2019-4-13",
 * Explain:"node收尾，读取写入压缩流操作",
*/

var fs = require("fs")
var zlib = require("zlib")

var rs = fs.createReadStream("1.txt")
var gz = zlib.createGzip()
var ws = fs.createWriteStream("2.txt.zip")

rs.pipe(gz).pipe(ws)

rs.on("error",(err)=>{
    console.log("读取时出错")
})
ws.on("error",(err)=>{
    console.log("写入时报错")
})
ws.on("finish",()=>{
    console.log("写入成功")
})