const Router = require("koa-router")
let router = new Router()
router.get("/test", async (ctx)=>{
    ctx.body = "管理员用户"
})
module.exports = router.routes();
