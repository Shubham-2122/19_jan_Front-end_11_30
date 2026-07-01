const moonges = require("mongoose")

const connectDb = async () => {
    try {
        await moonges.connect(process.env.MONGO_URL)   
                console.log("Database conntect")
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDb