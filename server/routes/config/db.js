const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false);
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Database connected! ${conn.connection.host}`);
    } catch (error) {
        console.log("here erro comes!",error);
    }
}

module.exports = connectDB;