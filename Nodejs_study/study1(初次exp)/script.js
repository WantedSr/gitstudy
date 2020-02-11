/**
 * Node.js 的 Web 开发相关的内容
 * 1. Node.js 不需要依赖第三方应用软件(apache), 可以基于api自己实现
 * 2. 实现静态资源服务器
 * 3. 路由处理
 * 4. 动态网站
 * 5. 模板引擎
 * 6. get和post参数传递和处理
 * 
 * web 开发框架: express
 */

// C:\inetpub\wwwroot\study\Nodejs_study\study1(express)

// 引入 express 模块
const express = require('express');
// 新建 express 实例， 命名为 app
const app = express();

app.get('/', (req, res) => res.send('Hello World!'));

// 设置 app 监听 3000 端口
const server = app.listen(3000, 'localhost', () => {
    // 获取服务器的IP地址
    var host = server.address().address;
    // 获取服务器的端口
    var port = server.address().port;
    console.log('Example app listening on port 3000 at http://%s:%s',host,port)
});


