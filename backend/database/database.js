const mongoose = require('mongoose');

const ConnectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL || "mongodb+srv://Elyano:root@cluster0.tyizw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useFindAndModify: false,
            useCreateIndex: true
        }).then((con) =>{
            console.log(`MongoDB connected with HOST:${con.connection.host}`)
        })
    } catch (err) {
        console.log(err.message)
    }
}

module.exports = ConnectDB