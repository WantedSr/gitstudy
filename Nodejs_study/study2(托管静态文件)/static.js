const express = require("express");
const app = express();

let server = app.use('/a',express.static('public')).use('/b',express.static('files')).listen(3000,()=>{
    console.log("Listen port to 3000....");
});