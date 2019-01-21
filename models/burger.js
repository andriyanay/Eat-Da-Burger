// Import the ORM to create functions to interact with the database.
var orm = require("../config/orm.js");

var burger = {
  // Display all burgers
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // Cols and vals are arrays.
  // Add new burger
  createOne: function(cols, vals, cb) {
    orm.createOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  // Move the burger to devoured
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller.
module.exports = burger;