const dotenv = require('dotenv');
dotenv.config();

const {
    ACCESS_TOKEN_SECRET_KEY,
    ACCESS_TOKEN_LIFE,
    REFRESH_TOKEN_SECRET_KEY,
    REFRESH_TOKEN_LIFE,
    SALT_ROUNDS,
} = process.env;

module.exports = {
    ACCESS_TOKEN_SECRET_KEY: ACCESS_TOKEN_LIFE,
    ACCESS_TOKEN_LIFE: ACCESS_TOKEN_LIFE,
    REFRESH_TOKEN_SECRET_KEY: REFRESH_TOKEN_SECRET_KEY,
    REFRESH_TOKEN_LIFE: REFRESH_TOKEN_LIFE,
    SALT_ROUNDS: parseInt(SALT_ROUNDS),
};