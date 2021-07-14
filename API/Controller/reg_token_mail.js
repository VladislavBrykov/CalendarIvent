async function reg_token_mail(token, email) {
    let nodemailer = require('nodemailer');

    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: '465',
        secure: true,
    
        auth: {
            user: 'chronos5ucode@gmail.com',
            pass: 'Vladislav5'
        }
    });

    let mailOptions = {
        from: 'chronos5ucode@gmail.com',
        to: email,
        subject: 'Complete your account registration',
        text: "Hello! Thank you for creating your Account. To complete your registration, click the link: " + "http://localhost:3001/register/" + token.toString()
    };
    
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });    
}
    
module.exports = {
    reg_token_mail: reg_token_mail
}