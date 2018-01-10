const pgp = require('pg-promise');
const { promisify } = require('util');

const username = process.env.USERNAME;
const password = process.env.PASSWORD;
const host = process.env.HOST;
const port = process.env.PORT || 3000;
const database = process.env.DATABASE || 'public';

module.exports = promisify(pgp(`postgres://${username}:${password}@${host}:${port}/${database}`));