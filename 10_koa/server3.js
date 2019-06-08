/**
 * 时间:2019-6-6
 * 内容:1.路由参数demo
 */
const koa = require("koa");
const Router = require("koa-router");
let server = new koa();
server.listen(8081);
let router = new Router();

/*路由uchuanancan*/
    /**用"/"传参的方式*/
// router.get("/news/:id",async (ctx)=>{
    // let {id} = ctx.params;
//  ctx.body = "路由传参" + id;
// });
// /*支持多参数*/
// router.get("/news/:id1/:id2/:id3",async (ctx)=>{
//     let {id1,id2,id3} = ctx.params;
//     ctx.body = `路由多参${id1}_${id2}_${id3}`;
// });
    /*用"?"传参的方式*/
router.get("/a",async (ctx)=>{
    console.log(ctx.query);
    ctx.body = "hello wrod";
})



/*同名路由设置*/
// router.get("/with",async (ctx,next)=>{
//     ctx.body = "hello wrod"
//     console.log("进入第一个路由")
//     await next()
// });
// router.get("/with",async (ctx)=>{
//     ctx.body = "hello with"
//     console.log("进入第二个路由")
// });
server.use(router.routes())

/**
 * 技术点:
 * 1.如遇同名路由先后调用，需要在第一个接口中加入next参数，并配合aysn/await使用
 * 传参方式：
 * 1.urlencoded    http://aaa.com/home?a=12&b=15
 * 2.params        http://aa.com/home/12/5
 * 对比
 *  urlencoded              params
 *  顺序灵活                 死的
 *  可省略                   死的
 *  不利于SEO                利于seo
 */
