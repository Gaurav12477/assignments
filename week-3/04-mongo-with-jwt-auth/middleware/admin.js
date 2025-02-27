// Middleware for handling auth
const jwt = require("jsonwebtoken");
const secret = require("../index");

function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    const words = token.split(" ");
    const jwtToken = word[1];

    const decodeValue = jwt.verify(jwtToken,secret);
    if(decodeValue.username) {
        next();
    } else {
        res.status(403).json({
            msg: "You are not authenticate"
        })
    }

}

module.exports = adminMiddleware;