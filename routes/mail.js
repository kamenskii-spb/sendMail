const express = require('express')
const controller = require('../controllers/mail');
const router = express.Router()


router.post('/send', controller.send)

module.exports = router