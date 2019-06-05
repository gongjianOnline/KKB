const express = require("express");
// 引入post中间件
const body = require("body-parser");

let server = express();
server.listen(8888);
  server.use(body.urlencoded({
        extended:false
    }));
server.post("/a",(req,res,next)=>{
    res.header("Access-Control-Allow-Credentials","true")
    console.log("测试post接口")
    console.log(req.body)
})