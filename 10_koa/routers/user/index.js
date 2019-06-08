const Router = require("koa-router");

let router = new Router();
router.use("/admin",require('./admin'));
router.use("/company",require("./company"));

module.exports = router.routes()