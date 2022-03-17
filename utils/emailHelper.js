var nodemailer = require('nodemailer');


const mailHelper = async()=>{

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.HOST_EMAIL,
          pass: process.env.HOST_PASSWORD
        }
      });
      
      var mailOptions = {
        from: 'nazimmazumder90@gmail.com',
        to: 'right.rishabh@gmail.com',
        subject: 'Verify the institute',
        html: '<a href="http://localhost:8000/v1/">Click the link to verify your college</a>'
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

}



module.exports = mailHelper;