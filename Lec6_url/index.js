const http = require("http");
const fs = require("fs");


//creating web server
const myServer = http.createServer((req,res) => {
    if(req.url == '/favicon.ico') return res.end();
    const log = `${Date.now()} : New Req Receivs  on ${req.url}\n `;
    fs.appendFile('log.txt',log,(err,data) =>{
        console.log("req rec");
        console.log('log added');
    });
    
    res.end('hello from server');
}); 

myServer.listen(3999,() => console.log("Server Started"));




// for url path seperation from url parameters....
// npm i url
// url.parse(req.url) 