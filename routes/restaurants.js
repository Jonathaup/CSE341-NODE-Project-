const express = require('express');
const router = express.Router();

const restaurantsController = require('../controllers/cars_restaurants');

router.get('/', restaurantsController.getAllrestaurants);
router.get('/:id', restaurantsController.getSinglerestaurant);
router.post('/', restaurantsController.createRestaurant);
router.put('/:id', restaurantsController.updateRestaurant);
router.delete('/:id', restaurantsController.deleteRestaurant);

module.exports = router;
