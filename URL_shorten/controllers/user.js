const user = require('../models/user');

async function handelSignUp(req,res){
    const {name,email,password} = req.body;
    await user.create({
        name,email,password,
    });
    return res.render('home');
}

async function handelLogin(req,res){
    // console.log("hi");
    const {email,password} = req.body;
    // console.log(email);
    const users = await user.findOne({
        email,password,
    });

    if(!users) return res.render("login",{err:"invalid Email or Password"});

    return res.redirect('/');
}


module.exports={handelSignUp,handelLogin};