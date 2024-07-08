 /**const express=require('express')
 const app=express();
 const port =3001;
 app.use(express.json())
 const LocalDB={
   "item":"mobilephone",
   "price":12567,
   "model":"xs",
   "color":"black"
 }
 app.get('/product',(req,res)=>{
    respond.json(LocalDB);
    //const  data= req.body;
    //res.json({
        //message:"post request received",
        //receivedData:data
   // })
 })
 app.post('/product',(req,res)=>{
   const data =req.body;
   res.json({
      message:"post data received",
      itemData:data
   });
 })
 app.put('/product',(req,res)=>{
   const data=req.body;
   res.json({
      message:"put data is update",
      itemData:data
   });
 })
 app.options('/product',(req,res)=>{
   res.json({
      message:"options in this method",
      allowedMethods:"GET,PATCH,PUT,POST"
   })
 })
 app.listen(port,()=>{
    console.log(`server is live on port ${port }`)
 });*/
 /**const express=require("express")
 const app =express();
 const port =3001;
 app.use("/abc",(req,res,next)=>{
  if(req.method=='GET'){
    res.send("get method is initiated")
  }else if(req.method=='POST'){
    res.json({
      message:"post initiated",
      data:req.body
    })
  }else{
    res.send("invalid method ")
  }
  })
 app.listen(port,()=>{
  console.log(`server is live at ${port}`)
 });**/
/** const express=require("express")
 const app=express();
 const port =3004;
 app.use(express.json())
 app.use("/",(req,res,next)=>
{
  console.log("middleware 1 is initiated");
  next();
});
(req,res,next)=>{
  res.send(
    `<div>
      <h1>welcome</h1><p>hello user</p>
    </div>`
  );
}
app.listen(port,()=>{
  console.log(`server is live at ${port}`)
});**/
/**const express=require('express');
const app=express();
const port=3001;
app.use(express.json())
app.use(express.urlencoded({extended:true}));
const reqFunction=(req,res,next)=>{

    console.log(`received a ${req.method},requested to api ${req.url}`);
        next();
}
const formDataFun=(req,res,next)=>{
    const {name,pass}=req.body;
    console.log(req.body);
        req.name=name;
        req.pass=pass;
    next();
}
const userShow=(req,res)=>{
  res.send(`<h1>Name:${req.name},pass:${req.pass}</h1>`);
}

app.get('/login',reqFunction,(req,res)=>{
    res.send(
        `<form method="post" action="/login-auth">
            <input type="text" name="name" required/>
            <input type="password" name="pass" required/>
            <button type="submit">Submit</button>
        </form>`
    )
})
app.post('/login-auth',reqFunction,formDataFun,userShow)

app.listen(port,()=>{
    console.log(`server is live at ${port}`);
});**/
/**const express=require('express');
const app=express();
const router=express.Router();
const port=3001;
const homeApi=require('./routes/login')
const loginApi=require('./home')
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const reqFunction=(req,res,next)=>{

    console.log(received a ${req.method},requested to api);
        next();
}
const formDataFun=(req,res,next)=>{
    const {name,pass}=req.body;
    console.log(req.body);
        req.name=name;
        req.pass=pass;
    next();
}

const userShow=(req,res)=>{
    res.send(<h1>Name: ${req.name},pass:${req.pass}</h1>)
}
app.get('/login',reqFunction,(req,res)=>{
    res.send(
        `<form method="post" action="/login-auth">
            <input type="text" name="name" required/>
            <input type="password" name="pass" required/>
            <button type="submit">Submit<button/>
        </form>`
    )
})
app.post('/login-auth',reqFunction,formDataFun,userShow)/

app.use('/',homeApi);
app.use('/',loginApi);
app.listen(port,()=>{
    console.log(server is live at ${port});
});**/
/**const express=require('express');
const app=express();
const router=express.Router();
const port=3001;
const homeApi=require('./routes/home')
const loginApi=require('./routes/Login')
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/',homeApi);
app.use('/',loginApi);
app.listen(port,()=>{
    console.log(`server is live at ${port}`);
});**/