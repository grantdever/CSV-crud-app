//config.js

const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  db_username: process.env.DB_USERNAME,
  db_password: process.env.DB_PASSWORD,
};