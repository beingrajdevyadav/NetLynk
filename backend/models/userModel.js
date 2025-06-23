const mongoose = require("mongoose");

const userModel = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    pic: {
        type: String,
        default: "https://static.thenounproject.com/png/1743563-200.png"
    }
}, { timestamps: true });


const User = mongoose.model("User", userModel);
module.exports = User;