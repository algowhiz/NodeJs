const fs = require('fs');
const os = require("os")

console.log(os.cpus().length);

//sync call Bloacking...
// console.log("1");
// const res = fs.readFileSync('./test.txt',"utf-8");
// console.log(res);
// console.log("2");


//async call Non - Bloacking...
console.log("1");
fs.readFile('./test.txt',"utf-8",(err,res) => {console.log(res) });
console.log("2");
