const { promisify } = require('util');
const db = require('../utils/db');

const one = promisify(db.one);

module.exports = {
    create: async ({ name, happy_hour, happy_hour_deals, location, menu, phone_number }) => {
        try {
            const { name } = await one('INSERT INTO restaurants (name, happy_hour, happy_hour_deals, location, menu, phone_number, rating) ' +
                'VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING name', [name, happy_hour, happy_hour_deals, location, menu, phone_number, rating]);
            return name;
        } catch (err) {
            throw new Error(err);
        }
    },
    get: async({ name }) => {
        try {
            const result = await one('SELECT * FROM restaurants WHERE name = $1', [name]);
            return result;
        } catch (err) {
            throw new Error(err);
        }
    }
};