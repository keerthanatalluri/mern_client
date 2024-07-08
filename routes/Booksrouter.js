//routes->users.js
const express=require('express')
const router=express.Router()
const User1=require('../model/Books')
//REST API POST METHOD TO HANDLE POST REQUEST
router.post('/',(req,res)=>{
    try{
    const{_id,name,publisher,description,author_id}=req.body;
    const newUser1=new User1(
        {_id,name,publisher,description,author_id});
        //after our query is created , we can save it to the database.
    newUser1.save();
    res.status(201).send(
        {message:"user created",newUser1});
    }catch(err){
        res.status(500).send({message:err.message})
    }
})
router.get('/',async(req,res)=>{
    try{
        const data=await User1.find();
        res.status(201).send(data);
    
    }catch(err){
        res.status(500).send({message:err.message})
    }
})
//PUT the data (update the data)
router.put('/:id', async (req, res) => {
    try {
        const { name} = req.body;
        const userId = req.params.id;
         const updatedUser = await User.updateOne({_id:userId},{$set:{name:name }});
          //use findByIdAndUpdate instead of UpdateOne
        if (updatedUser.nModified===0) {
            return res.status(404).send({ message: "User not found" }); }
        res.status(200).send({ message: "Password updated successfully", updatedUser });
    } catch (err) {
        res.status(500).send(err);
} });


module.exports = router;
