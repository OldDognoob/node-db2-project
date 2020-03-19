//import libraries
const express = require("express");
const db = require("../data/config");
// const knex =require('knex');

const cars =require('./cars-model');
//activate routers
const router = express.Router();

router.get("/", (req, res) => {
    cars.getAllCars()
      .then(cars => {
        res.status(200).json(cars);
      })
      .catch(error => {
        res.status(500).json({
          message: "There was an error retrieving the Cars"
        });
      });
  });
  
  router.get("/:id", (req, res) => {
    const { id } = req.params;
    cars.getCarById(id)
      .then(car => {
        if (car) {
          res.status(200).json(car);
        } else {
          res.status(404).json({
            message: "There is no Car with this id"
          });
        }
      })
      .catch(error => {
        res.status(500).json({
          message: "There was an error retrieving this Car"
        });
      });
  });
  
  router.post("/", (req, res) => {
    const { VIN, make, model, mileage, transmissionType, clean } = req.body;
    if (!VIN || !make || !model || !mileage) {
      res.status(404).json({
        message:
          "You have to insert at least VIN, make, model & mileage to create a new Car"
      });
    } else {
      cars.insertNewCar({ VIN, make, model, mileage, transmissionType, clean })
        .then(cars => {
          res.status(201).json(cars);
        })
        .catch(err => {
          res.status(500).json({
            message: "There was an error creating this new Car"
          });
        });
    }
  });
  
  router.put("/:id", (req, res) => {
    const { id } = req.params;
    const { VIN, make, model, mileage, transmissionType, clean } = req.body;
   cars.updateCar({ id, VIN, make, model, mileage, transmissionType, clean })
      .then(cars => {
        if (cars) {
          res.status(200).json({
            message: "Car has been updated successfull"
          });
        } else {
          res.status(404).json({
            message: "There was an error finding this Car"
          });
        }
      })
      .catch(error => {
        res.status(500).json({
          message: "There was an error updating this Car"
        });
      });
  });
  
  router.delete("/:id", (req, res) => {
    const { id } = req.params;
   cars.deleteCarById(id)
      .then(car => {
        res.status(200).json({
          message: "Car has been deleted successfull"
        });
      })
      .catch(error => {
        res.status(500).json({
          message: "There was an error deleting this Car"
        });
      });
  });
  
  module.exports = router;