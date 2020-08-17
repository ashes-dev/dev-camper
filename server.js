require('dotenv').config()
const express = require('express')
// routers
const bootcamps = require('./routes/bootcamp.routes')

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.use('/api/bootcamps', bootcamps)

app.listen(PORT, console.log(`devcamper live | PORT: ${PORT}`))