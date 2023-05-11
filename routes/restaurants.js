
const express = require('express');
const router = express.Router();

const restaurantsController = require('../controllers/cars_restaurants');
const {requiresAuth} = require('../middleware/authenticated.js')

router.get('/',requiresAuth, restaurantsController.getAllrestaurants);
router.get('/:id', restaurantsController.getSinglerestaurant);
router.post('/',requiresAuth, restaurantsController.createRestaurant);
router.put('/:id', restaurantsController.updateRestaurant);
router.delete('/:id', restaurantsController.deleteRestaurant);

module.exports = router;