const express = require("express");
const app = express();

const template = require('art-template');
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'db_hotel'
});

connection.connect();
// connect
app.use(express.static('view'));
app.get('/abc',(req,res)=>{
    let sql = "SELECT * FROM tb_user";
    connection.query(sql,(err,results)=>{
        if(err) throw err;
        res.json(results);
    });
}).listen(3000,()=>{
    console.log('running...');
})


