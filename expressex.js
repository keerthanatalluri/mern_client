const express =require('express')
const authorsApi=require('./routes/Authorsrouter')
const booksApi=require('./routes/Booksrouter')
 const app =express()
 const port =3004;
 const session=require('express-session')
 const mongoose=require('mongoose')
 app.use(express.json())//data will be display in express
 const url="mongodb+srv://nithyaailuri:nithya@cluster0.omdndsw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
 mongoose.connect(url).then(()=>{
    console.log("db connected")
 })
 .catch((err)=>{console.log(err)});
 app.use('/books',booksApi)
 app.use('/authors',authorsApi)
app.listen(port,()=>{console.log(`server live ${port}`)})