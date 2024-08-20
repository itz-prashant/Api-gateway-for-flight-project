const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const { serverConfig} = require('../../config')

function checkPassword(plinPassword, encryptedPassword) {
    try {
        return bcrypt.compareSync(plinPassword, encryptedPassword)
    } catch (error) {
        throw error
    }
}
function createToken(input){
    try {
        return jwt.sign(input, serverConfig.JWT_SECRET, {expiresIn: serverConfig.JWT_EXPIRY})
    } catch (error) {
        throw error
    }
}

module.exports = {
    checkPassword,
    createToken
}