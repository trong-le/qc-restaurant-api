const pgp = require('pg-promise')();
const { promisify } = require('util');

const connection = {
    host: process.env.HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    database: process.env.DATABASE || 'postgres',
    user: process.env.USERNAME || 'postgres',
    password: process.env.PASSWORD || 'postgres'
};

module.exports = pgp(connection);