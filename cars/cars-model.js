//import database config
const db = require("../data/config");

//DB helpers
function getAllCars() {
  return db("cars");
}
function getCarById(id) {
  return db("cars").where({ id });
}
function insertNewCar({ VIN, make, model, mileage, transmissionType, clean }) {
  return db("cars").insert({
    VIN,
    make,
    model,
    mileage,
    transmissionType,
    clean
  });
}
function updateCar({ id, VIN, make, model, mileage, transmissionType, clean }) {
  return db("cars")
    .where({ id })
    .update({ VIN, make, model, mileage, transmissionType, clean });
}
function deleteCar(id) {
  return db("cars")
    .where({ id })
    .del();
}
module.exports = { getAllCars, getCarById, insertNewCar, updateCar, deleteCar };
