const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // PASTE YOUR FULL URL INSIDE THE QUOTES BELOW:
        const conn = await mongoose.connect(process.env.MONGO_URI);
        
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log("error: ", error);
        process.exit(1);
    }
}

module.exports = connectDB;