// JavaScript Document

const fs = require("fs");
const path = require("path");
const http = require("http");
const querystring = require('querystring');
// npm 安装 art-template 模板引擎
// 引入模板引擎
const template = require("art-template");6

const score = require("./score.json");

const server = http.createServer((req,res)=>{
    if(req.url.startsWith('/search') && req.method=='GET'){

        let content = template(path.join(__dirname,'search.html'),{});
        res.end(content);

        // fs.readFile(path.join(__dirname,"search.html"),"utf8",(err,data)=>{
        //     if(err){
        //         res.writeHead(500,{"Content-Type":"text/html;charset=utf8"});
        //         res.write('服务器有误，女生请联系网络管理员,');
        //         res.write("男生请汇款后获取说明书进行操作,");
        //         res.end('12345678901');
        //     }
        //     res.setHeader("Content-Type",'text/html;charset=utf8');
        //     res.end(data);
        // });
    }else if(req.url.startsWith('/score') && req.method == "POST"){
        let pdata;
        req.on('data',(chunk)=>{
            pdata = String(chunk);
        });
        req.on('end',()=>{
            let obj = querystring.parse(pdata);
            let result = score[obj.name];
            if(result){
                // fs.readFile(path.join(__dirname,"score.html"),'utf8',(err,data)=>{
                //     if(err){
                //         res.writeHead(500,{"Content-Type":"text/html;charset=utf8"});
                //         res.write('服务器有误，女生请联系网络管理员,');
                //         res.write("男生请汇款后获取说明书进行操作,");
                //         res.end('12345678901');
                //     }
                //     res.setHeader("Content-Type","text/html;charset=utf8");
    
                //     // 未引入 art-template(模板引擎) 之前，通过原生 JS 来进行内容渲染
                //     // data = data.replace("$$Chinese$$",result.Chinese);
                //     // data = data.replace("$$Math$$",result.Math);
                //     // data = data.replace("$$English$$",result.English);
                //     // data = data.replace("$$Sport$$",result.Sport);
                //     // data = data.replace("$$Move$$",result.Move);
                    
                //     res.end(data);
                // });
    
                // 引入 art-template(模板引擎) 后，可以利用引擎渲染内容
                // 替换规则：替换的内容用: {{ ... }} 标记
                // 如: {{node}}，将会被对象中的 node 属性的值替换
                let content = template(path.join(__dirname,'score.html'),result);
                res.end(content);
            }else{
                res.setHeader("Content-Type","text/html;charset=utf8");
                res.write("<a href='http://localhost:3000/search'>返回搜索</a>");
                res.end('搜索不到考生信息');
            }

        }); 
    }else if(req.url.startsWith('/all') && req.method == "GET"){
        // 全部成绩
        res.setHeader("Content-Type","text/html;charset=utf8");
        let content = template(path.join(__dirname,'all.html'),{
            list : score
        });
        // console.log(score);
        res.end(content);
    }
}).listen(3000,()=>{
    console.log("Listen port to 3000...");
})

function inArray(val, arr) {
    return arr.some(function (v) {
        return val === v;
    })
}


