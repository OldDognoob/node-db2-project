
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN: "test123", make: "Audi", model: "A6", mileage: 120000, clean: true},
        {VIN: "test456", make: "Huyndai", model: "Getz 1.4", mileage: 75000, clean: false},
        {VIN: "test789", make: "Ford Mustang", model: "GT500", mileage: 25000, clean: true}
      ]);
    });
};
