async function pass_reset(id, email) {
const nodemailer = require('nodemailer')

let testEmailAccount = await nodemailer.createTestAccount()

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
  subject: 'Password reset',
  text: "Ваш ключ ключ подтверждения для восстановления пароля " + id.toString()
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
    pass_reset: pass_reset
}