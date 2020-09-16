const nodemailer = require('nodemailer')
const keys = require('./../keys')

module.exports.send = async function (req, res) {
    try {
    
      const emailSetting = {
        host: 'smtp.mail.ru',
        port: 465,
        secure: true, // use TLS
        auth: {
          user: keys.EMAIL,
          pass: keys.EMAIL_PASSWORD
        },
        tls: {
          // do not fail on invalid certs
          rejectUnauthorized: false
        }
      }
      
      const domen = keys.BASE_URL





      const transporter = nodemailer.createTransport(emailSetting);

      const mailOptions = {
        from: keys.EMAIL,
        to: 'gxiv@ya.ru',
        subject: 'Тест',
        text: `
          
          Тестовое письмо от сервера ${keys.BASE_URL}
          `
      };
    
      transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
          console.log(error);
        }
      });

      return  res.status(200).json(keys.EMAIL)
    } catch (error) {
      console.log(error)
    }
  
  }