const express = require('express')
const { UserControllers } = require('../../controllers')

const router = express.Router()
 
router.post('/',
    UserControllers.signup
)

module.exports = router