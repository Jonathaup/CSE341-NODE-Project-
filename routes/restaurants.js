
const express = require('express');
const router = express.Router();

const restaurantsController = require('../controllers/cars_restaurants');
const {isAuthenticated} = require('../middleware/authenticated.js')

router.get('/',isAuthenticated, restaurantsController.getAllrestaurants);
router.get('/:id', restaurantsController.getSinglerestaurant);
router.post('/',isAuthenticated, restaurantsController.createRestaurant);
router.put('/:id', restaurantsController.updateRestaurant);
router.delete('/:id', restaurantsController.deleteRestaurant);

module.exports = router;