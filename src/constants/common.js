require('dotenv').config();

const APP_REFERENCE = Object.freeze({
    PORT: process.env.PORT,
})

const DB_REFERENCE = Object.freeze({
    MONGODB_URL: process.env.MONGODB_URL,
})

module.exports = {
    APP_REFERENCE, DB_REFERENCE,
}