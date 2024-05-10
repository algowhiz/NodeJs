const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.urlencoded({extended:false}));
// model / schema

const LibSchema = new mongoose.Schema({
    bookName:{
        type:String,
        required:true,
        unique:true
    },
    author:{
        type:String,
        required:true
    },
    price:{
        type:Number
    }

},{timestamps:true})

const LibModel = mongoose.model('lib',LibSchema);


mongoose.connect('mongodb://localhost:27017/lib')
.then(() => console.log("connected"))
.catch((err) => console.log("err :", err))

// modules

const search = async (name) =>{
    const result = await LibModel.findOne({bookName:name});
    return result;
}

const insert = async ({name,authname,prices}) =>{
    const insert = await LibModel.create({
        bookName:name,
        author:authname,
        price:prices
    })

    return insert;
}

const del = async (vari) =>{
    const result = await LibModel.findOneAndDelete({_id:vari})
    return result;
}

// routes

app.get('/book/search/:name',(req,res) =>{
    const name = req.params.name;
    const result = search(name);
    return res.status(200).json({"res" : result});
})


app.post('/book/insert',(req,res) =>{
    const body = req.body;
    const result = insert(body);
    // console.log(body);
    return res.status(200).json({"res":"inserted....."});
})

app.delete('/book/del/:var',(req,res) =>{
    const name = req.params.var;
    const result = del(name);
    // console.log(result);
    return res.status(200).json({"res":"deleted....."});
})



app.listen(4000,() => console.log("server started"));