const http = require("http")
const zlib = require("zlib")
const url = require("url")
const fs = require("fs")

http.createServer((req,res)=>{
	let {pathname} = url.parse(req.url,true);
	let filepath = "www"+pathname;

	//监听文件状态
	fs.stat(filepath,(err,state)=>{
		console.log(err)
		//如果文件不存在或者异常则返回状态码404，弹出not found，并结束服务
		if(err){
			//res.setHeaber("content-encoding","")
			res.writeHeader(404);
			res.write("not found");
			res.end();
		}else{
			//如果文件状态正常，则读取filepath的数据
			let rs = fs.createReadStream(filepath);
			//捕捉文件读取的报错信息
			rs.on("error",(err)=>{
				console.log("读取时出错",err);
			});
			//将文件请求头改为gzip格式
			res.setHeader("content-encoding","gzip");
			//创建压缩管道
			let gz = zlib.createGzip();
			//将rs读取的文件灌输到gz中压缩，并将压缩结果灌输到respons
			rs.pipe(gz).pipe(res);
		}

	})
}).listen(8888)