const nodemailer = require('nodemailer')
const path = require("path");
//const keys = path.resolve(__dirname, "..", "keys/index.js");
//const keys = require("../keys/index");



module.exports.send = async function (req, res) {
    try {

      const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    
      const emailSetting = {
        host: 'smtp.mail.ru',
        port: 465,
        secure: true, // use TLS
        auth: {
          user: process.env.EMAIL,
          pass: process.env.EMAIL_PASSWORD
        },
        tls: {
          // do not fail on invalid certs
          rejectUnauthorized: false
        }
      }
      
      const domen = process.env.BASE_URL


      const transporter = nodemailer.createTransport(emailSetting);

      const mailOptions = {
        from: process.env.EMAIL,
        to: 'bestgift-spb@yandex.ru',
        subject: 'Тест',
        text: `
          Тестовое письмо от сервера ${ip}
          `
      };
    
      transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
          console.log(error);
        }
      });

      return  res.status(200).json({ppppppp: 6666666})
    } catch (error) {
      return  res.status(200).json({error: 55 })
    }
  
  }