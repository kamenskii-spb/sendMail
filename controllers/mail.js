const nodemailer = require('nodemailer')
const path = require("path");
//const keys = path.resolve(__dirname, "..", "keys/index.js");
//const keys = require("../keys/index");

const host = 'smtp.mail.ru'
const port = 465
const auth = {
  user: process.env.EMAIL,
  pass: process.env.EMAIL_PASSWORD
}
const toEmail = 'bestgift-spb@yandex.ru'

const domen = process.env.BASE_URL

module.exports.send = async function (req, res) {
    try {

      const access = ['188.170.77.177']

      const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
 
      if(!access.includes(ip)){
        res.status(403)
        return
      }

      

      if(!isValidation(req.body)){
        res.status(204)
        return
      }

       const {name, email, subject, message } = req.body
    
      const emailSetting = {
        host,
        port,
        secure: true, // use TLS
        auth,
        tls: {
          rejectUnauthorized: false
        }
      }
  
      const transporter = nodemailer.createTransport(emailSetting);

      const mailOptions = {
        from: process.env.EMAIL,
        to: toEmail,
        subject: subject,
        text: `
          Письмо от ${name} <${email}> : ${message}
          `
      };
    
      transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
          console.log(error);
        }
      });

      return  res.status(200).json({message: 'Спасибо, Ваше письмо отправлено! '})
    } catch (error) {
     res.status(500)
     console.log(error)
     return 
    }
  
  }


  function isValidation(data){
    const val = Object.values(data)
    let validation = true
    for (let index = 0; index < val.length; index++) {
     if(!val[index]){
      validation = false
     }
    }
    return validation ? true : false
  }