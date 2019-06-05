/**
 * 内容:使用后台签名cookie
 * 时间:2019-5-20
 * 概述:
 */
const express = require("express");
const cookies = require("cookie-parser");
let server = express();
server.listen(8888);

server.use(cookies(
    "lifeissimpebutyoumadeitcomplicated"
));
server.get("/a",(req,res)=>{
    console.log("cookie",req.cookies);
    console.log("signed",req.signedCookies);
    res.cookie("amount",99.8,{
        signed:true
    })
    res.send("ok")
})