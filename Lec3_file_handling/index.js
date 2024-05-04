const fs = require('fs');

//sync call
// fs.writeFileSync('./test.txt',"hello mandy here ");

//async call 
// fs.writeFile('./test.txt',"hello async call made ",(err) => {err ? console.log(err) : ""});

// reading file 

// const read = fs.readFileSync('./read.txt','utf-8')
// console.log(read);

// fs.readFile('./read.txt','utf-8',(err,res) => {
//     if(err)
//         console.log(err);

//     else
//         console.log(res);    
// })

// apending file 

// fs.appendFileSync("test.txt",new Date().getDate().toLocaleString());

//copying file

// fs.cpSync('test.txt','copy.txt');

// delete 

// fs.unlinkSync('./copy.txt');