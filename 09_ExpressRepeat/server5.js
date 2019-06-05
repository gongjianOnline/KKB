/** 
 * 内容：服务器cookies
 * 时间：2019-5-20
 * 概述：1.利用中间件cookie-parser获取和设置cookies
*/
const express = require("express");
const cookies = require("cookie-parser");

let server = express();
server.listen(8888);
server.use(cookies());
server.get("/a",(req,res)=>{
    // 获取 
    console.log(req.cookies);
    //设置
    // res.cookie("test",99.8);
    res.send('ok')
})