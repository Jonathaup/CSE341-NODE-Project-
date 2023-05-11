const express = require('express');
const router = express.Router();

const carsController = require('../controllers/cars_restaurants');
const { isAuthenticated } = require('../middleware/authenticated.js');

router.get('/', carsController.getAllcars);
router.get('/:id', carsController.getSinglecars);
router.post('/', isAuthenticated, carsController.createcars);
router.put('/:id', isAuthenticated, carsController.updatecars);
router.delete('/:id', isAuthenticated, carsController.deletecars);

module.exports = router;
