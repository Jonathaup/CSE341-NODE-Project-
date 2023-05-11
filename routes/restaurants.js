const express = require('express');
const router = express.Router();

const restaurantsController = require('../controllers/cars_restaurants');
const { isAuthenticated } = require('../middleware/authenticated.js');

router.get('/', restaurantsController.getAllrestaurants);
router.get('/:id', restaurantsController.getSinglerestaurant);
router.post('/', isAuthenticated, restaurantsController.createRestaurant);
router.put('/:id', isAuthenticated, restaurantsController.updateRestaurant);
router.delete('/:id', isAuthenticated, restaurantsController.deleteRestaurant);

module.exports = router;
