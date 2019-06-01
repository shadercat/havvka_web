var express = require("express");
var router = express.Router();
const Dish = require("../models/Dish")

// Get All Dishes
router.get("/dishes", (req, res) => {
    Dish.findAll()
        .then(dishes => {
          res.json(dishes)
        })
        .catch(err => {
          res.send("error: " + err)
        })
});

// Add dish
router.post("/dish", (req, res) =>{
  if(!req.body.dish_name){
    res.status(400)
    res.json({error: "bad data"})
  } else {
    dish.create(req.body)
    .then(() => {
      res.send("Dish added")
    })
    .catch(err => {
      res.send("Error: " + err)
    })
  }
})

module.exports = router;
