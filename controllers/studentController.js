const data = require('../data');

exports.signIn =(req,res)=>{
    console.log(data);
    res.render("student");
};


exports.signInsession =  (req,res)=>{
    console.log(req.body)

    console.log(data[0].firstName);

    res.status(200).json({
        message:"all ok"
    })
}


exports.signUp =(req,res)=>{
    res.render("student");
};

