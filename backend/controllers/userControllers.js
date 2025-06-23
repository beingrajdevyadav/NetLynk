const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

const registerUser = asyncHandler(async (req, res) => {
    const {name, email, password, pic} = req.body; 

    // Check if all fields are provided
    if (!name || !email || !password) {
        res.status(400);
        throw new Error("Please Enter all the fields");
    }


    // Check if user already exists
    const userExists = await User.findOne({email});
    if (userExists) {
        res.status(400);
        throw new Error("User already exists");
    }


    // Create a new user
    const user = await User.create({
        name,
        email,
        password,
        pic
    });
    // If user is created successfully, return user details
    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            pic: user.pic,
            token: generateToken(user._id),
        });
    } else {
        res.status(400);
        throw new Error("Failed to create the user");
    }
} );


module.exports = { registerUser };