const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    endpoint: process.env.API_URL,
    masterkey: process.env.API_KEY,
    port: process.env.PORT
}