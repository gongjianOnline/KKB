/** 
 * 内容：node接受文件
 * 时间：2019-5-17
 * 概述：1.需要引入multer中间件，来接受文件内容，但不支持post的其他参参数的获取
*/
const express = require("express");
const multer = require("multer")

let server = express();
server.listen(8888);

let obj = multer({dest:'./static/upload'});
server.use(obj.any());
server.post("/reg",(reg,res)=>{
    console.log(reg,res)
})
