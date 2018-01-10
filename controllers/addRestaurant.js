const { Router } = require('express');
const { Restaurant } = require('../models');
const { getRatings } = require('../utils/yelp');
const { geocode } = require('../utils/geocoder');

const router = new Router();

router.post('/', async (req, res, next) => {
    try {
        const { result } = geocode(req.address);

        // Need to handle error in case object keys dont exist
        req.body.rating = await getRatings(result.geometry.location.lat, result.geometry.location.lng);
        const restaurant = Restaurant.create(req.body);
        res.status(201).send({ restaurant, success: true});
    } catch (err) {
        res.status(409).send();
    }
});