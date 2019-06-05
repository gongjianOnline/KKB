/**
 * 内容：get方式接受参数并返回code码
 * 时间：2019-5-17 pm 13:50
 *  */ 

 const express = require("express")
 let server = express();
 server.listen(8888);
 server.get("/a",(req,res,next)=>{
    console.log("测试")
    res.send({code:"101"})
    console.log(req.query)
 })