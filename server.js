require('dotenv').config()
const express = require('express')
const connectDb = require('./db')
// routers
const bootcamps = require('./routes/bootcamp.routes')

const app = express()
const PORT = process.env.PORT || 3000

// database connection
connectDb()

// app configs
app.use(express.json())

// routes
app.use('/api/bootcamps', bootcamps)

const server = app.listen(PORT, console.log(`devcamper live | PORT: ${PORT}`))

process.on('unhandledRejection', err => {
    console.log(`unhandledRejection : ${err.message}`)
    server.close(() => process.exit(1))
})