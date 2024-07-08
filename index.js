const express=require('express');
const mongoose=require('mongoose');
const {ApolloServer,gql} = require('apollo-server-express');
const typeDefs=require('./Schema');
const resolvers=require('../resolvers');
const app=express();
const cors=require('cors');
const port=3001;
const url='mongodb+srv://nithyaailuri:nithya@cluster0.omdndsw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
app.use(express.json())
app.use(cors())
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log('db connected')
}).catch((err)=>{console.log(err)});
//start my apollo Express server 
const server = new ApolloServer({typeDefs,resolvers});
async function  StartServer(){
    await server.start();
    server.applyMiddleware({app});//run my express code
    app.listen(port,()=>{
        console.log('server live 3001');
    })
}
StartServer();
