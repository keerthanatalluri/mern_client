const express=require('express')
const router=express.Router()
const typeDefs=require('./Schema')
const resolvers=require('../resolvers')
const {ApolloServer,gql}=require('apollo-server-express')
const server=new ApolloServer({typeDefs,resolvers})
router.post('/register',async(req,res)=>{
    try{
        const {name,email,password}=req.body;
        const {data,error}=await server.executeOperation({
            query:gql`
            mutation{
            createUser(input:(name:"${name}",
            email:"${email}",
            password:"${password}")
            {
            id
            name
            email
            password}
            }}`
        });
        if(error){
            return res.status(500).send({message:err})
        }



    }catch(err){
        res.status(500).send({message:err});
    }
})
module.exports=router;
