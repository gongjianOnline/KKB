const process = require("process");
let mode = (process.env.OS == "Windows_NT" ?"dev":"prod");
let dev = require("./config.dev");
let prod = require("./config.prod");

module.exports={
	mode,
	...(mode=="dev"?dev:prod)
}
