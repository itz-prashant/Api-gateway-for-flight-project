const express = require('express')
const { UserControllers } = require('../../controllers')

const router = express.Router()
 
router.post('/signup',
    UserControllers.signup
)

router.post('/signin',
    UserControllers.signin
)

module.exports = router