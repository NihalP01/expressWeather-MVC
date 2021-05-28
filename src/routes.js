const express = require('express')
const router = express.Router()
const controller = require('./controller/controller')

router.get('/login', controller.renderLoginPage)

router.post('/login', controller.renderPostReq)

module.exports = router