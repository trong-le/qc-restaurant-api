const { promisify } = require('util');
const db = require('../helpers/db');

module.exports = {
    create: async ({ name, happy_hour, happy_hour_deals, location, menu, phone_number }) => {
        try {
            const { name } = await db.one('INSERT INTO restaurants (name, happy_hour, happy_hour_deals, location, menu, phone_number) ' +
                'VALUES ($1, $2, $3, $4, $5, $6) RETURNING name', [name, happy_hour, happy_hour_deals, location, menu, phone_number]);
            return name;
        } catch (err) {
            throw new Error(err);
        }
    },
    get: async({ name }) => {
        try {
            const result = await db.one('SELECT * FROM restaurants WHERE name = $1', [name]);
            return result;
        } catch (err) {
            throw new Error(err);
        }
    }
};