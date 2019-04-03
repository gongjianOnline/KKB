/*
	文件读写压缩练习
*/
const fs = require("fs");
//引入压缩插件
const zlib = require("zlib");

let rs = fs.createReadStream("1.txt");
//调用压缩api
let gz = zlib.createGzip();
//fs.createWriteStream()里面可以是gz或者zip格式的压缩包，
	//其中demo.txt代表的是写入文件的格式，x.x.zip表示压缩后的文件格式
let ws = fs.createWriteStream("demo.txt.zip");

//先将rs读取的文件接通到gz压缩打包，在接通ws写入文件
rs.pipe(gz).pipe(ws)

