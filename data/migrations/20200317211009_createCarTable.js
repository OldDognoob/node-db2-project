
exports.up = function(knex) {
    return knex.schema.createTable("cars", table => {
      table.increments();
      table
        .text("VIN", 128)
        .unique()
        .notNullable();
      table.text("make").notNullable();
      table.text("model").notNullable();
      table.integer("mileage").notNullable();
      table.text("transmissionType");
      table.boolean("clean");
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists("cars");
  };
