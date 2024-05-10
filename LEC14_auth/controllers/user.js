const user = require('../models/user');

async function handelUserSignUp(req,res){
    const {name,email,pass}=req.body;
    await user.create({
        name,
        email,
        pass,
    })
    return res.render("home");
}

module.exports = {handelUserSignUp};