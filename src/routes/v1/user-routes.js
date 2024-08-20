const express = require('express')
const { UserControllers } = require('../../controllers')
const { AuthRequstMiddlwares } = require('../../middlewares')

const router = express.Router()
 
router.post('/signup',
    AuthRequstMiddlwares.validateAuthRequest,
    UserControllers.signup
)

router.post('/signin',
    AuthRequstMiddlwares.validateAuthRequest,
    UserControllers.signin
)

module.exports = router