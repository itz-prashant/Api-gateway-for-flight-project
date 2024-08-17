const express = require('express')
const { infoController } = require('../../controllers')
const userRouter = require('./user-routes')

const router = express.Router()

router.use('/signup', userRouter)

router.get('/info', infoController.info)

module.exports = router