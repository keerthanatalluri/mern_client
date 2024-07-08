//MongoDB user 
const mongoose = require('mongoose')
const schema={
    _id:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },publisher:{
        type:String,
        required:true,
    },description:{
        type:String,
        required:true,
    },author_id:{
        type:String,
        required:true,
    }
}
//convert to mongoose schema
const Books = new mongoose.Schema(schema);
module.exports=mongoose.model('User1',Books);