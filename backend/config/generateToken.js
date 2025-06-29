const jwt = require('jsonwebtoken');

// Function to generate a JWT token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d', // Token will expire in 30 days
    });
}

module.exports = generateToken;