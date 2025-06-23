const mongoose = require('mongoose');

const connectDB = async ()=>{
    try {
       const conn = await mongoose.connect( "mongodb+srv://ry2not2:OpWJRVSfLJ8ixgrY@mernchatapp.auizwes.mongodb.net/?retryWrites=true&w=majority&appName=MERNChatApp");
        console.log(`MongoDB connected successfully : ${conn.connection.host}`);
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1); // Exit the process with failure
    }
}

module.exports = connectDB;