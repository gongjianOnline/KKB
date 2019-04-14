/**
 * name:"",
 * date:"2019-4-13",
 * Explain:"整合node项目-建立开发/生产环境"
 * 
 */

 const process= require("process");
 let mode = (process.env.os == "Windows_NT"?"dev":"prod");
 module.exports = {
    mode,
    ...(mode == "dev"?require("./config.dev"):require("./config.prod"))
 }