const express = require('express');
const dotenv = require('dotenv');
const chats = require("./data/data")
const userRoutes = require('./routes/userRoutes');
const connectDB = require('./config/db');


// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
connectDB();
const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

app.get('/', (req, res)=>{
    res.send("API is running successfully...");
});

app.use("/api/user", userRoutes); 


const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server is running on PORT ${PORT}`));