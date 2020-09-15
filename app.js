const express = require('express')
const bodyParser = require('body-parser')
const expressip = require('express-ip');
const mailRoutes = require('./routes/mail')
const  app = express()
app.use(expressip().getIpInfoMiddleware);

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(require('cors')())


app.use('/api/mail', mailRoutes)

module.exports = app