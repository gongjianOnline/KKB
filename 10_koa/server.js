/*
    时间:2019-6-6
    内容：1.Koa基础
        2.koa没有自带路由，需引入koa-router中间件
        3.所有中间件为构造函数

*/
const Koa = require("koa");
const Router = require("koa-router");

let server = new Koa();
server.listen(8081);
/*基础路由*/
let router = new Router();
router.get("/a",async (ctx)=>{
    ctx.body = "hello word"
});
server.use(router.routes())



