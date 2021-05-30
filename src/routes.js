const express = require('express')
const router = express.Router()
const controller = require('./controller/controller')

router.get('/', controller.renderHomePage)

router.post('/weather', controller.renderPostReq)

module.exports = router