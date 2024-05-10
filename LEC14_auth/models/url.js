const mongoose = require("mongoose");


const urlSchema = new mongoose.Schema({
    shortID:{
        type:String,
        required:true,
        unique:true,
    },
    rediredURL:{
        type:String,
        required:true,
    },
    totalClickes:{
        type:Number,
    },
    
},{timestamps:true},)



const URL = mongoose.model('url',urlSchema);

module.exports = URL;