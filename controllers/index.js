const { Router } = require('express');
const homepage = require('./homepage');
const addRestaurant = require('./addRestaurant');

const router = new Router();

router.use('/', homepage);
router.use('/submit', addRestaurant);

module.exports = router;