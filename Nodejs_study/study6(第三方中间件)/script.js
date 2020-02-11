// JavaScript Document
/**
 * 第三方中间件：
 *      如：cookie-parser 、 body-parser 等
 */

 const express = require('express');
 const app = express();
 const bodyParser = require("body-parser");
 const cookieParser = require("cookie-parser");

// 解析 application/x-www-form-urlencoded 格式参数 (挂载参数处理中间件（post）)
//  app.use(bodyParser.urlencoded({ extended: false }));
// 解析 JSON 格式的参数
 app.use(bodyParser.json());


// post 提交参数
app.post('/login',(req,res)=>{
    let data = req.body;
    console.log(data);
    if(data.username == 'admin' && data.password == '123456'){
        res.send('WelCome Admin');
    }else{
        res.send('Hello World!');
    }
    // res.send('ok');
});

// get 提交参数
app.get('/login',(req,res)=>{
    let data = req.query;
    console.log(data);
    res.send('Get Data');
});

app.use(express.static('public')).listen(3000,()=>{
    console.log('running...');
})




