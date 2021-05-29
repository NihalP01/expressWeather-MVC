const express = require('express')
const router = express.Router()
const controller = require('./controller/controller')

router.get('/login', controller.renderHomePage)

router.post('/login', controller.renderPostReq)

module.exports = router