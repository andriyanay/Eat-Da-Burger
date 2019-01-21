// Import the ORM to create functions to interact with the database.
var orm = require("../config/orm.js");

var burger = {
  // Display all burgers
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  // Cols and vals are arrays.
  // Add new burger
  create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  // Move the burger to devoured
  update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller.
module.exports = burger;