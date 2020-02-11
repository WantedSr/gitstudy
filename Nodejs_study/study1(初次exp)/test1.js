const express = require("express");
const app = express();

let server = app.get('/',(req,res)=>{
    res.send("This is a express server!");
}).listen('3000','localhost',()=>{
    let host = server.address().address;
    let port = server.address().port;   
    console.log('Example app listening on port 3000 at http://%s:%s',host,port);
})