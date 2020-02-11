/**
 * app.use('/abcd',express.static('public'));
 * '/abcd' : 路由
 * 'public' : 静态资源
 * 
 * 路由 （根据请求路径和请求方式进行路径分发处理）
 * 
 * http 常用请求方式：
 * post     添加
 * get      查询
 * put      更新
 * delete   删除
 * 
 * restful api (一种 url 的格式) 
 */

const express = require("express");
const app = express();

const result = require("./result.js");  

app.use('/',result).listen(3000,()=>{
    console.log('running...');
})


// 基本路由处理
// 处理单独的路由请求
// app.get('/',(req,res)=>{
//     res.send('get data');
// }).post('/',(req,res)=>{
//     res.send('post data');
// }).put('/',(req,res)=>{
//     res.send('put data');
// }).delete('/',(req,res)=>{
//     res.send('delete data');
// }).listen(3000,()=>{
//     console.log('listen port to 3000 .... ')
// });


// use() 方法可以处理所有的路由请求
// app.use((req,res)=>{
//     res.send('ok');
// }).listen(3000,()=>{
//     console.log('running...');
// })





