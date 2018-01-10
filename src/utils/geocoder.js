const rp = require('request-promise');

const BASE_URL = 'http://maps.googleapis.com/maps/api/geocode/json';
const key = process.env.GOOGLE_API_KEY;

module.exports.geocode = async (address) => {
    const uri = `${ BASE_URL }`;
    const options = {
        uri,
        qs: {
            address,
            key
        }
    };
    return await rp(options);
};