const data = require('../data');

exports.signIn = (req, res) => {
    res.render("student");
};

exports.signInsession = (req,res) =>{
    let { student_id, password } = req.body;

    // console.log(student_id, password);
    let num = 0;
    for (let d of data) {
        if (d.SID == student_id) {
            if (d.password == password) {
                //res.render("profile");
                res.render("profile", { info : data[num]});
            }
        }
        num++;
    }
}

exports.signUp = (req,res) => {
    res.render("student");
};

exports.signUp = (req, res) =>{
    let { aadhar_num, phone_num } = req.body;
    console.log(aadhar_num, phone_num);

    let num = 0;
    for (let d of data) {
        if (d.aadharNumber == aadhar_num) {
            //res.render("profile");
            res.render("profile", { info : data[num]});
        }
        num++;
    }

    res.render("profile", { info: data[num] });
}