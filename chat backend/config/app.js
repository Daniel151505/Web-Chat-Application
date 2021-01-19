require('dotenv').config()

module.exports = {
    appKey: process.env.APP_KEY,
    appUrl: process.env.APP_URL,
    addPort: process.env.APP_PORT,
}