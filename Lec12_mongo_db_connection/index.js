const mongoose = require("mongoose");

const URL = 'mongodb://localhost:27017/DummyDB';

mongoose.connect(URL)
.then(() => console.log("connected"))
.catch((err) => console.log("err : ",err));

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },

    salary:{
        type:Number,
    }
})

const userModel = mongoose.model("user",userSchema);


const insert = async (na,sal) => {
    await userModel.create({
        name:na,
        salary:sal,
    })

}

const search = async (na) =>{
   try {
    const res = await userModel.findOne({name : na});
    console.log(res);
   } catch (error) {
        console.log("err :", error);
   }
}

const del = async (id2) =>{
    try {
        const res = await userModel.findByIdAndDelete({_id:id2});
        if(res)
            console.log("del");
    } catch (error) {
        console.log("err" , error);
    }
}

// insert("mandy",10000);
// insert("sandy",2000);
// insert("cany",3000);

// search("mandy");

del("663762adb4acff65e659dcf9");