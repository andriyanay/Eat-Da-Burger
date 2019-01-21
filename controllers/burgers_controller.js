var express = require("express");
var router = express.Router();

// Import the model to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within them.
// Display all burgers
router.get("/", function(req, res) {
  burger.all(function(data) {
    var object = {
      burgers: data
    };
    // console.log(object);
    res.render("index", object);
  });
});

// Create new burger
router.post("/", function(req, res) {
  burger.create([
    "burger_name", "devoured"
  ], [
    req.body.burger_name, req.body.devoured
  ], function() {
    res.redirect("/");
  });
});

// Update the burger
router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  // console.log("condition", condition);

  burger.update({
    devoured: req.body.devoured
  }, condition, function() {
    res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;