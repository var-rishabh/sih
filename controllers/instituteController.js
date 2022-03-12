const data = require('../institute_data');

exports.signIn = (req, res) => {
    res.render("institute");
}

exports.signInsession = (req,res)=>{
    let { institute_id, password } = req.body;
    // let num = 0;
    for (let d of data) {
        if (d.inst_Id === institute_id) {
            if (d.password === password) {
                // res.render("institute_profile", { info : data[num]});
                res.render("institute_profile");
            }
        }
        // num++;
    }
}

exports.signUp = (req,res)=>{
    let { inst_id } = req.body;
    // let num = 0;
    for (let d of data) {
        if (d.inst_Id == inst_id) {
            // res.render("institute_profile", { info : data[num]});
            res.render("institute_profile");
        }
        // num++;
    }
}