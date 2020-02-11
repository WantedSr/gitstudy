// Router
const express = require('express');
const router = express.Router();

router.use('/list',(req,res)=>[
    res.json({
        name: 'asdf',
        message:'这是调用 express.Router 的路由'
    })
]);

module.exports = router;



