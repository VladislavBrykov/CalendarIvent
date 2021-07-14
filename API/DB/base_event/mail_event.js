async function fly_mail(event_id, title, description, start, end, email) {
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