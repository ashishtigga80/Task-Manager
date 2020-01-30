const mongoose = require('mongoose')
const mongo = mongoose.connect( process.env.MONGO_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true 
})