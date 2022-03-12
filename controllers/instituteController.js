const student_data = require('../student_data');
const data = require('../institute_data');

exports.signIn = (req, res) => {
    res.render("institute");
}

exports.signInsession = (req,res)=>{
    let { institute_id, password } = req.body;
    let num = 0;
    for (let d of data) {
        if (d.inst_Id === institute_id) {
            if (d.password === password) {
                // res.render("institute_profile");
                res.render("institute_profile", { info : data[num]});
            }
        }
        num++;
    }
}

exports.signUp = (req,res)=>{
    let { inst_id, email } = req.body;
    let num = 0;
    for (let d of data) {
        if (d.inst_Id == inst_id) {
            if (d.email === email) {
                // res.render("institute_profile");
                res.render("institute_profile", { info : data[num]});
            }
        }
        num++;
    }
}

exports.pending = (req, res) => {
    let num = 0;
    for (let d of student_data) {
        num++;
    }
    res.render("pending", { info : student_data, num });
}