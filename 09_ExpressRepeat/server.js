/**
 * 内容：入门express
 * 时间：2019-5-17 am11:46
 *  */ 
const express = require("express");
let server = express();
server.listen(8888);

console.log(45645)
server.get('/a',(req,res,next)=>{
    console.log("测试a");
    next()
})
server.get("/a",(req,res,next)=>{
    console.log("测试b")
})