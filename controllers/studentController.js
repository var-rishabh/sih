const data = require('../data');

exports.signIn =(req,res)=>{
    console.log(data);
    res.render("student");
};

exports.signUp =(req,res)=>{
    res.render("student");
};

