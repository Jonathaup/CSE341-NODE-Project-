const express = require('express');
const router = express.Router();

const carsController = require('../controllers/cars_restaurants');

router.get('/', carsController.getAllcars);
router.get('/:id', carsController.getSinglecars);
router.post('/', carsController.createcars);
// router.put('/:id', carsController.updatecars);
// router.delete('/:id', carsController.deletecars);

module.exports = router;
