const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAllcars = async (req, res) => {
  const result = await mongodb.getDb().db('project').collection('cars').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getSinglecars = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db('project').collection('cars').find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

const createcars = async (req, res) => {
  const car = {
    make: req.body.make,
    model: req.body.model,
    trim: req.body.trim,
    year: req.body.year,
    driveType: req.body.driveType,
    color: req.body.color,
    titleType: req.body.titleType,
    miles: req.body.miles,
    transmissionType: req.body.transmissionType,
    carType: req.body.carType
  };
  const response = await mongodb.getDb().db('project').collection('cars').insertOne(car);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res.status(500).json(response.error || 'Some error occurred while creating the car.');
  }
};

const updatecars = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  // be aware of updateOne if you only want to update specific fields
  const car = {
    make: req.body.make,
    model: req.body.model,
    trim: req.body.trim,
    year: req.body.year,
    driveType: req.body.driveType,
    color: req.body.color,
    titleType: req.body.titleType,
    miles: req.body.miles,
    transmissionType: req.body.transmissionType,
    carType: req.body.carType
  };
  const response = await mongodb
    .getDb()
    .db('project')
    .collection('cars')
    .replaceOne({ _id: userId }, car);
  console.log(response);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while updating the car.');
  }
};

const deletecars = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const response = await mongodb
    .getDb()
    .db('project')
    .collection('cars')
    .deleteMany({ _id: userId }, true);
  console.log(response);
  if (response.deletedCount > 0) {
    res.status(200).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while deleting the car.');
  }
};

// Restaurants Functions

const getAllrestaurants = async (req, res) => {
  const result = await mongodb.getDb().db('project').collection('restaurants').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getSinglerestaurant = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDb()
    .db('project')
    .collection('restaurants')
    .find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

const createRestaurant = async (req, res) => {
  const restaurant = {
    name: req.body.name,
    address: req.body.address,
    phone: req.body.phone,
    email: req.body.email,
    website: req.body.website
  };
  const response = await mongodb
    .getDb()
    .db('project')
    .collection('restaurants')
    .insertOne(restaurant);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res.status(500).json(response.error || 'Some error occurred while creating the restaurant.');
  }
};

const updateRestaurant = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  // be aware of updateOne if you only want to update specific fields
  const restaurant = {
    name: req.body.name,
    address: req.body.address,
    phone: req.body.phone,
    email: req.body.email,
    website: req.body.website
  };
  const response = await mongodb
    .getDb()
    .db('project')
    .collection('restaurants')
    .replaceOne({ _id: userId }, restaurant);
  console.log(response);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while updating the restaurant.');
  }
};

const deleteRestaurant = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const response = await mongodb
    .getDb()
    .db('project')
    .collection('restaurants')
    .deleteMany({ _id: userId }, true);
  console.log(response);
  if (response.deletedCount > 0) {
    res.status(200).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while deleting the restaurant.');
  }
};

module.exports = {
  getAllcars,
  getSinglecars,
  createcars,
  updatecars,
  deletecars,
  getAllrestaurants,
  getSinglerestaurant,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant
};
