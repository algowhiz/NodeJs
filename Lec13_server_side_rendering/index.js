const express = require('express');
const path = require('path')
const app = express();

app.set('view engine','ejs');
app.set('views',path.resolve('./views'));

app.get('/',(req,res)=>{
    return res.render('home');
})

app.listen(4000,() => {
    console.log("server Started");
})
