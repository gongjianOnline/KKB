/** 
 * name:"",
 * date:"",
 * Explain:"配置数据库"
 * 
*/
const mysql = require("mysql");
const co = require("co-mysql");
const {DB_HOST,DB_PORT,DB_USER,DB_PASS,DN_NAME} = require("../config");

let conn = mysql.createPool({
    host:DB_HOST,
    port:DB_PORT,
    user:DB_USER,
    password:DB_PASS,
    database:DN_NAME
});
module.pexport =co(conn)