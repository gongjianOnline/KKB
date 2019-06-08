/**
 * 时间:2019-6-6
 * 内容:1.路由嵌套demo
 *      2.单独建立routers文件夹建立路由嵌套
 *  */

 const Koa = require("koa")
 const Router = require("koa-Router")

 let server = new Koa();
 server.listen(8081);

 let router = new Router();
 router.use("/user",require("./routers/user/index"));
 server.use(router.routes())

