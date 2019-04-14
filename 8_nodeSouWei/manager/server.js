/**
 * name:"",
 * date:"2019-4-13",
 * Explain:"整合node项目"
 * 
 */
const config = require("./config");
const db = require("./libs/database");
(async ()=>{
    let data = await db.query('SELECT * FROM item_table');
    console.log(data)
})()

/**原生数据库链接成功 */
// const mysql = require("mysql");
// const connection = mysql.createConnection({
//     host:"localhost",
//     port:"3306",
//     user:'root',
//     passwrod:'',
//     database:'kkbnode'
// })
// connection.connect(function(err){
//     if(err){
//         console.log("数据库报错");
//         console.log(err)
//     }
// })
// connection.query('SELECT * FROM item_table',function(err,row){
//     if(err){
//         console.log("链接时报错")
//     }else{
//         console.log(row)
//     }
// })


    








