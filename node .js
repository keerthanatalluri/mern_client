//node js concepts
//const fs=require("fs")
//const filedata=fs.readFileSync("read.txt")
//console.log(filedata.toString());
//console.log("Execution completed");
//fs.readFile('read.txt,function(ferr,filedata){
      //if(ferr) return console.log(ferr)
      //console.log(filedata.toString());
//})
//console.log("this is first function")
//setTimeout(function() {
  //  console.log("this is second function")
//},1000)
//console.log("this is third function")
//const net=require('net')
//const server=net.createServer((socket) =>
//    {
//socket.on('close',()=>{
  //  console.log("socket closed")
//})
  //  })
//server.listen(8000)
//const add=(a,b)=>{
   // return new Promise((resolve,reject)=>{
     //   setTimeout(()=>{
      //   if(a<0 || b<0){
       //         return reject ("number must be non zero")
         //   }
          //  return resolve (a+b)
        //},3000)
    //})
//}
//add(1,2).then((sum)=>{
  //  console.log(sum)
    //return add(sum,4)
//}).then((sum)=>{
  //  console.log(sum)
//})
//const events={
    //name:'birthday party',
    //guests:['ram','raju'],
    //printGuest(){
     //   console.log('Guest List for '+this.name)
      //  this.guests.forEach((guest)=>{
       //     console.log(guest+' is attending '+this.name)
    //})
//}
//}
//events.printGuest()
/**const http=require('http')
http.createServer((request,response)=>{
    response.writeHead(200,{'Content-Type': 'text/html'})
    response.end("server is live")

}).listen(8000,()=>{console.log("server live ")})**/
//import axios from 'axios';
/**const http = require('http');
const superagent = require('superagent');
(async () => {
    const data = {
        username: 'raju',
        password: '1234',
        userid: 1011
    };
    try {
        const { body } = await superagent
            .post('https://jsonplaceholder.typicode.com/posts')
            .send(data);
        console.log(body);
    } catch (err) {
        console.error('Error occurred:', err.message || err);
    }
})();**/
/***const axios=require('axios')
axios.get("https://jsonplaceholder.typicode.com/posts")
.then((res)=>console.log(res.data)).catch((err)=>
console.log(err.message || err))**/
/**const http = require('http');
const { StringDecoder } = require('string_decoder');
const url = require('url');

// Create the server
const server = http.createServer((request, response) => {
    const parsedUrl = url.parse(request.url, true);
    const path = parsedUrl.pathname;
    const method = request.method.toLowerCase();
    const decoder = new StringDecoder('utf-8');
    let buffer = '';

    request.on('data', (chunk) => {
        buffer += decoder.write(chunk);
    });

    request.on('end', () => {
        buffer += decoder.end();

        if (method === 'post' && path === '/user') {
            const data = JSON.parse(buffer);
            response.writeHead(200, { 'Content-Type': 'application/json' });
            response.end(JSON.stringify({ message: "User data received", data }));
        } else {
            response.writeHead(404, { 'Content-Type': 'application/json' });
            response.end(JSON.stringify({ message: "Not Found" }));
        }
    });
});

// Start the server
server.listen(8000, () => {
    console.log('Server is running on port 8000');

    // Make the axios POST request
    const axios = require('axios');
    const data = {
        username: 'keerthana',
        password: '1234',
        userid: 1002
    };

    axios.post('http://local host:8000/user', data)
        .then(response => {
            console.log(response.data);
        })
        .catch(err => {
            console.log('Error: ' + (err.message || err));
        });
});**/


