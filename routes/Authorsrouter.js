//routes->users.js
const express=require('express')
const router=express.Router()
const User2=require('../model/Authors')
//REST API POST METHOD TO HANDLE POST REQUEST
router.post('/',(req,res)=>{
    try{
    const{_id,name,age,total_books,description}=req.body;
    const newUser2=new User2(
        {_id,name,age,total_books,description});
        //after our query is created , we can save it to the database.
    newUser2.save();
    res.status(201).send(
        {message:"author created",newUser2});
    }catch(err){
        res.status(500).send({message:err.message})
    }
})
router.get('/',async(req,res)=>{
    try{
        const data=await User2.find();
        res.status(201).send(data);
    
    }catch(err){
        res.status(500).send({message:err.message})
    }
});
module.exports = router;
