const mongoose = require('mongoose')

const connectDb = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: true,
        useUnifiedTopology: true
    })
    console.log(`mongoDb : ${conn.connection.host}`)
}

module.exports = connectDb