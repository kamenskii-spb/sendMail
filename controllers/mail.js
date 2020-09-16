const nodemailer = require('nodemailer')
const path = require("path");
//const keys = path.resolve(__dirname, "..", "keys/index.js");
const keys = require("../keys/index");



module.exports.send = async function (req, res) {
    try {



    
      // const emailSetting = {
      //   host: 'smtp.mail.ru',
      //   port: 465,
      //   secure: true, // use TLS
      //   auth: {
      //     user: keys.EMAIL,
      //     pass: keys.EMAIL_PASSWORD
      //   },
      //   tls: {
      //     // do not fail on invalid certs
      //     rejectUnauthorized: false
      //   }
      // }
      
      // const domen = keys.BASE_URL





      // const transporter = nodemailer.createTransport(emailSetting);

      // const mailOptions = {
      //   from: keys.EMAIL,
      //   to: 'bestgift-spb@yandex.ru',
      //   subject: 'Тест',
      //   text: `
      //     Тестовое письмо от сервера ${domen}
      //     `
      // };
    
      // transporter.sendMail(mailOptions, function(error, info) {
      //   if (error) {
      //     console.log(error);
      //   }
      // });

      return  res.status(200).json({ppppppp: keys})
    } catch (error) {
      return  res.status(200).json({error: keys.BASE_URL })
    }
  
  }