require("dotenv").config()

module.exports = {
    COOKIE_SECRET_KEY: process.env.COOKIE_SECRET_KEY,
    MONGO_URI: process.env.MONGO_URI,
    JWT_SECRET_KEY: process.env.JWT_SECRET_KEY
}