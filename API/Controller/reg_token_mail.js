async function reg_token_mail(token, email) {
    const nodemailer = require('nodemailer')
    
    let testEmailAccount = await nodemailer.createTestAccount()
    
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'stackoverflow.brykov@gmail.com',
          pass: 'Vladislav5'
        },
      })
    
    let Message = "Hello! Thank you for creating your Account. To complete your registration, click the link: "
    let link = Message.toString() + "http://localhost:3001/register/" + token.toString();
    
    let result = await transporter.sendMail({
      from: '<stackoverflow.brykov@gmail.com>',
      to: email,
      subject: 'Complete your account registration',
      text: link
    })
    
    //console.log(result)
    
    }
    
    module.exports = {
        reg_token_mail: reg_token_mail
    }