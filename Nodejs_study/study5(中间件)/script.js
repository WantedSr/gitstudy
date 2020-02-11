// JavaScript Document
/**
 * 中间件: 路由的请求处理过程中的一个过程。
 * 
 * 如 水产->沉淀->吸附->过滤->消毒->水龙头出水
 * 从水产到水龙头的中间的过程，就如同一个个 '中间件'
 * 
 * 中间件分为：9
 *      应用级中间件    ------->    普通的中间件
 *      路由级中间件    ------->    let router = express.Router()
 *      错误处理中间件  ------->    app.use('/',(err,req,res,next)=>{})     -->     多了一个参数(err)
 *      内置中间件      ------->    静态资源(express.static()) 、 JSON(express.json()) 、 URL编码(express.urlencoded)
 *      第三方中间件    ------->    外部插件，用于处理 cookie，body 等资源
 * 
 */

const express = require("express");
const app = express();

let total = 0;

/**
 *        __________该中间件适用的请求方式 (get, post, put, delete, use...);
 *       /     __________该中间件适用的路径（路由）(routing)
 *      /     /
 * app.get('/abc',(req,res,next)=>{
 *                   \   \    \
 *                    \   \    \________________________若该路由还有其他的中间件，则需要添加 next参数 并调用 next回调函数
 *                     \   \____HTTP响应(response)     /
 *                      \_____HTTP请求(required)      /
 *                                                   /
 *    console.log('asdfasdf');                      /
 *    next();                                      / 
 *         \______________________________________/
 * })
 */
app.use('/abc',(req,res,next)=>{
    // 日志时间
    let date = new Date();
    let day = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
    let time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    console.log(day+" "+time);
    // 有next() 则继续调用下一个中间件
    next();
});

app.get('/abc',(req,res,next)=>{
    // 请求方式
    console.log('请求方式为：'+req.method);
    next();
})

app.use('/abc',(req,res,next)=>{
    // 访问次数
    total ++;
    console.log("已被访问过"+total+"次");
    // 生成一道错误
    throw new Error('这是一个错误！');
    next();
});

// 异常处理
app.use('/abc',(err,req,res,next)=>{
    if(err){
        let {message} = err;
        // 访问地址
        console.log(err.stack);
        res.status(500).json({
            message
        });
    }else{
        //
    }
    // 没有next() 则停止调用下一个中间件
});

app.use('/abc',(req,res,next)=>{
    console.log('没有next还能访问到我？');
});

app.use('/cba',(req,res,next)=>{
    console.log('我的地址是cba');
    next();
});
app.use('/cba',(req,res)=>{
    console.log('这是没有带next的中间件！');
});

app.listen(3000,()=>{
    console.log('running...');
});

function no_found_handler(req,res,next){
    res.json({
        'message':'页面不存在',
    });
}
app.use(no_found_handler);
