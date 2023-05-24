const mongoose = require("mongoose")

const DATABASE_URL = process.env.DATABASE_URL

const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(DATABASE_URL, CONFIG)

mongoose.connection
    .on("open", () => console.log("connected to mongoose"))
    .on("close", () => console.log("DISCONNECTED FROM MONGOOSE OMG"))
    .on("error", (error) => console.log(error))

module.exports = mongoose