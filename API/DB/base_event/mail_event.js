async function fly_mail(event_id, title, description, start, end, email) {
    // const nodemailer = require('nodemailer')
    
    // let testEmailAccount = await nodemailer.createTestAccount()
    
    // let transporter = nodemailer.createTransport({
    //     service: 'gmail',
    //     auth: {
    //       user: 'stackoverflow.brykov@gmail.com',
    //       pass: 'Vladislav555Vladislav'
    //     },
    //   })
    
    // let Message = "Здравствуйте! Вы приглашены на Ивент " + title + " суть которого: " + description + "Начало " + start + " Конец " + end
    // let link = Message.toString();
    
    // let result = await transporter.sendMail({
    //   from: '<stackoverflow.brykov@gmail.com>',
    //   to: email,
    //   subject: 'Complete your account registration',
    //   text: link
    // })
    
    //console.log(result)

    // let transporter = nodemailer.createTransport({
    //   host: 'smtp.email.ua',
    //   port: '465',
    //   secure: 'true',
    //   auth: {
    //     user: 'vlad5brykov@email.ua',
    //     pass: 'Vladislav5'
    //   }
    // });


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
  subject: 'Sending Email using Node.js',
  text: "Здравствуйте! Вы приглашены на Ивент " + title + " суть которого: " + description + "Начало " + start + " Конец " + end
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
        fly_mail: fly_mail
    }