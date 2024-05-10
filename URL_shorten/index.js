const express = require("express");
const urlRoute = require('./routes/url');
const {connectToMongoDB} = require('./connection');
const URL = require('./models/url');
const app = express();
const path = require('path');
const userRoute = require('./routes/user');
app.set('view engine','ejs');
app.set('views',path.resolve('./views'));
const staticRoute = require('./routes/staticrouter');


connectToMongoDB('mongodb://localhost:27017/short-url')
.then(() => console.log("connected"))
.catch((err) => console.log("err" , err));

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/url',urlRoute);
app.use('/user',userRoute);
app.use('/',staticRoute);

app.get('/url/:shortId', async (req,res)=>{
    const shortID = req.params.shortId;

    const entry = await URL.findOne({shortID});

    if (entry) {
        res.redirect(entry.rediredURL);
    } else {
        // Handle the case where the entry does not exist
        res.status(404).send("URL not found");
    }
})


app.listen(4000,() =>{
    console.log("server started");
})