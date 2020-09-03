const ErrorResponse = require("../utils/error-response.util")

const errorHandler = (err, req, res, next) => {
    let error = { ...err }
    console.log(err.stack)

    // mongoose ID errors
    if(err.name === 'CastError') {
        const message = `Resource not found with id: ${err.value}`
        error = new ErrorResponse(message, 404)
    }

    // duplicate keys errors
    if(err.code == 11000) {
        const message = `Duplicate field value enterd`
        error = new ErrorResponse(message, 400)
    }

    // validataion errors
    if(err.name === 'ValidationError') {
        const message = Object.values(err.errors).map(val => val.message)
        error = new ErrorResponse(message, 400)
    }

    res.status(error.statusCode || 500).json({ success: false, error: error.message || 'Server Error' })
}

module.exports = errorHandler