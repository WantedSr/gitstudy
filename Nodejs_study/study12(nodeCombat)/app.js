const express = require('express');
const app = express();

const path = require("path");

const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const template = require('art-template');
const mysql = require('mysql');

 app.use(bodyParser.urlencoded({ extended: false }));

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "db_study"
});
connection.connect();

app.use(express.static('views'));
app.post('/login',(req,res)=>{
    let result = req.body;
    let username = result.username;
    let password = result.password;
    let sql = "SELECT * FROM tb_user WHERE username = '" + username +"' AND password = '" + password + "'";
    console.log(sql);
    connection.query(sql,(err,result)=>{
        if(err) throw err;
        if(result.length != 0){
            // console.log(result);
            res.setHeader("Content-Type","text/html;charset=utf8");
            if(result[0].state == 1){
                res.send("登录成功！<br><a href='http://localhost:3000/admin'>前往管理员页面</a>");
            }else{
                res.send('登录成功!');
            }
        }else{
            res.send('查询不到此人!!');
        }
    })
});
app.use('/admin',(req,res)=>{
    let sql = "SELECT * FROM tb_user";
    connection.query(sql,(err,result)=>{
        if(err) throw err;
        let obj = {
            list: result
        };
        let connect = template(path.join(__dirname,'views','admin.html'),obj);
        res.setHeader("Content-Type","text/html;charset=utf8");
        res.end(connect);
    })
});
app.post('/register',(req,res)=>{
    let result = req.body;
    let username = result.username;
    let password = result.password;
    let state = 0;
    let sql = "INSERT INTO tb_user VALUE(null,?,?,?)";
    connection.query(sql,[username,password,state],(err,result)=>{
        if(err) throw err;
        if(result){
            res.send("注册成功！<a href='http://localhost:3000/login.html'>前往登录</a>");
        }
    })
});
app.listen(3000,()=>{
    console.log("running...");
})





















