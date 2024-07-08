/**const express=require('express')
const session=require('express-session')
const app=express();
const port =3002;
app.use(express.json());
app.use(session({
    secret:'its secret',
    resave:false,
    saveUninitialized:true,
}))
app.get('/login',(req,res)=>{
    req.session.sessionData={name:'raju',userid:1201,
        email:'raju@gmail.com'};
        
        res.send(`<h1> you logged in</h1> <a href="./profile">profile</a>`)
})
app.get('/profile',(req,res)=>{
    const data=req.session.sessionData || ' no session found '
    res.send(`<h1> Welcome${data.name}<h1>
        <p>E-mail is:${data.email} </p>`);
})
app.listen(port,()=>{
    console.log(`server is live at port ${port}`)
})**/
