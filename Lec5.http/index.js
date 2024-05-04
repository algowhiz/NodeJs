const http = require("http");
const fs = require("fs");


//creating web server
const myServer = http.createServer((req,res) => {
    const log = `${Date.now()} : New Req Receivs \n `;
    fs.appendFile('log.txt',log,(err,data) =>{
        console.log("req rec");
        console.log('log added');
    });
    
    res.end('hello from server');
}); 

myServer.listen(3999,() => console.log("Server Started"));

