const rp = require('request-promise');
const BASE_URL = 'https://api.yelp.com';
const accessToken = process.env.YELP_ACCESS_TOKEN || 'token';

module.exports.getRatings = async (latitude, longitude) => {
  const uri = `${ BASE_URL }/businesses/search`;
  const options = {
    uri,
    headers: {
      Authorization: `Bearer ${ accessToken }`
    },
    qs: {
      latitude,
      longitude
    }
  }
  return await rp(options);
};
