//routes/home.js---->
const express=require('express')
const router=express.Router();
router.get('/home',(req,res,next)=>{
    res.send(`<h1>this is home page</h1>`)
})
module.exports=router;