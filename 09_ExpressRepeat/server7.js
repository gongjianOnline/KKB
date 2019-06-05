/**
 * 内容：上传文件加参数
 * 时间：2019-5-20
 * 概述: 使用multer和body-parser中间,接收post方式的文件和数据参数
 */

 const express = require("express");
 const body = require("body-parser");
 const multer = require("multer");
 let server = express();
 server.listen(8888);

server.use(body.urlencoded({
    extended:false
}));
let obj = multer({
    dast:'./static/upload'
});
server.use(obj.any());
server.post("/reg",(req,res)=>{
    res.header("Access-Control-Allow-Credentials","true");
    console.log(req.body);
    console.log(req.files);
    res.send("ok")
})