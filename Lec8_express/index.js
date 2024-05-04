const express = require('express');
const app = express();

app.get('/',(req,res) => {
    return res.send('hello .... mandy here');
});

app.get('/greet',(req,res) => {
    return res.send(`hello .... ${req.query.name}`);
});


app.listen(3333);