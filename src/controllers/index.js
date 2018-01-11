const { Router } = require('express');
const homepage = require('./homepageController');
const addRestaurant = require('./addRestaurantController');

const router = new Router();

router.use('/', homepage);
router.use('/submit', addRestaurant);

module.exports = router;