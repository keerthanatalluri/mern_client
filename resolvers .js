//resolvers.js 
//to pre process the queries 
//query -> to retrive the data (Exactly WHat data we want)
//mutation -> to update the data
/**const User = require('./model/UserSchema');//parent
const resolvers ={
    Query:{
        getUser: async(_,{id})=>{return await User.findById(id);},
        getUsers: async()=>{return await User.find();},
        searchUsers: async(_,{name})=>{return await User.find(
            {name:new RegExp(name,'i')})
        },
        getLimitedUsers: async(_,{limit,offset})=>{
            return await User.find().skip(offset).limit(limit);
        }
    },
    Mutation:{
        createUser: async (_,{input})=>{
            const {name,email,password}= input;
            newUser = new User({name,email,password});
            return await newUser.save();
        },
        changePass:async(_,{id,password})=>{
            
            try{
               
                const usernew= await User.findByIdAndUpdate(id,{password:password},{new:true});
                if(!usernew){
                    throw new Error("User not found");
                }
                console.log(usernew);
                return usernew;
            }catch(err){throw Error(`Error Occured :${err}`)}
       
        },
        updateUser: async(_,{id,input})=>{
            return await User.findByIdAndUpdate(id,input);
        },
        deleteUser: async(_,{id})=>{
            return await User.findByIdAndDelete(id);
        }
    },
    User:{
        email:(parent)=> parent.email || '',
        name:(parent)=> parent.name || '',
        password:(parent)=> parent.password || ''
    },
};module.exports=resolvers;//export resolvers**/
//http://localhost:3001/graphql

/*
mutation{
    createUser(input:{name:"Rani",
    email:"rani@gmail.com",
    password:"123456"})
}
*/
//resolvers.js 
//to pre process the queries 
//query -> to retrive the data (Exactly WHat data we want)
//mutation -> to update the data
const User = require('./model/userSchema');//parent
const resolvers ={
    Query:{
        getUser: async(_,{id})=>{return await User.findById(id);}
    },
    Mutation:{
        createUser: async (_,{input})=>{
            const {name,email,password}= input;
            try{
                if(!name || !email || !password){
                    throw new Error("Please enter all the fields");
                }
                const newUser = new User({name,email,password});
                return await newUser.save();
            }catch(err){ throw Error(`Error Creating User: ${err}`)}
        },
        changePass:async(_,{id,password})=>{
            
            try{
               
                const usernew= await User.findByIdAndUpdate(id,{password:password},{new:true});
                if(!usernew){
                    throw new Error("User not found");
                }
                console.log(usernew);
                return usernew;
            }catch(err){throw Error(`Error Occured :${err}`)}
        },
        
    },
    User:{
        email:(parent)=> parent.email || '',
        name:(parent)=> parent.name || '',
        password:(parent)=> parent.password || ''
    },
};module.exports=resolvers;//export resolvers

