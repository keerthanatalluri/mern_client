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
    },age:{
        type:String,
        required:true,
    },total_books:{
        type:String,
        required:true,
    },description:{
        type:String,
        required:true,
    }
}
//convert to mongoose schema
const Authors = new mongoose.Schema(schema);
module.exports=mongoose.model('User2',Authors);