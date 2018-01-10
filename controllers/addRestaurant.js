const { Router } = require('express');
const { Restaurant } = require('../models');
const { getRatings } = require('../utils/yelp');

const router = new Router();

router.post('/', async (req, res, next) => {
    req.body.rating = await getRatings();
});