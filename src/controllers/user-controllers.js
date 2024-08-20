const { UserService} = require('../services')

const {StatusCodes} = require('http-status-codes');
const {ErrorResponse, SucessResponse} = require('../utils/common')

async function signup(req, res) {
    try {
        const user = await UserService.createUser({
            email: req.body.email,
            password: req.body.password
        })
        SucessResponse.data = user
        return res
                .status(StatusCodes.CREATED)
                .json(SucessResponse)
    } catch (error) {
        ErrorResponse.error = error
        return res
                .status(error.statusCode)
                .json(ErrorResponse)
    }
}
async function signin(req, res) {
    try {
        const user = await UserService.signin({
            email: req.body.email,
            password: req.body.password
        })
        SucessResponse.data = user
        return res
                .status(StatusCodes.CREATED)
                .json(SucessResponse)
    } catch (error) {
        ErrorResponse.error = error
        return res
                .status(error.statusCode)
                .json(ErrorResponse)
    }
}

module.exports = {
    signup,
    signin
}