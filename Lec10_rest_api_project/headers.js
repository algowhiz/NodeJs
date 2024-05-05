const express = require('express')
const app = express();

app.get('/headers',(req,res)=>{
    res.setHeader("X-name","mandy");
    console.log(req.header);
    return res.json("sending headers...")
})



app.listen(4000, () => console.log("server started"));


// for custom header add X in start