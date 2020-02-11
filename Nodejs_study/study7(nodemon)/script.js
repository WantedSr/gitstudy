const http = require('http');
const server = http.createServer((req,res)=>{
    res.end("Hello World");
    var a =  10,b=20,c=30;
    ++a;
    a++;
    var e = ++a+(++b)+(c++);
    // console.log(e);
    console.log(a);
}).listen(3000,'localhost',()=>{
    console.log('running...');
});

// 1:
// Nodemon 配置
/**
 * 1. npm 下载 ( npm i nodemon --save-d );
 * 2. 调用，运行文件时不用 node xx.js 而是 nodemon xx.js
 * 3. 配置，新建一个 nodemon.json 配置文件
 * 4. 配置属性：{
 *      watch: ["./..."]
 *     // 设置监听哪些路径的哪些文件
 * }
 */


 // 2:
 // nrm 管理 npm 源
 /**
  * 1. npm 下载 ( npm i nrm -g )(全局安装)
  * 2. 常用命令{
  *     nrm ls : 查看已有的 npm源
  *     nrm -h : 帮助，查看命令
  *     nrm -V : 查看版本号
  *     nrm current : 查看当前的 npm源
  *     nrm use : 打开/切换 npm源
  *     nrm 
  * }
  */



