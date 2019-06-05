var express = require("express");
var router = express.Router();
const Dish = require("../models/Dish")

// Get All Dishes
router.get("/all-dishes", (req, res) => {
    Dish.findAll()
        .then(dishes => {
          res.json(dishes)
        })
        .catch(err => {
          res.send("error: " + err)
        })
});

// Add dish
router.post('/dish', (req, res) => {
    // const today = new Date()
    const dishData = {
        dish_name: req.body.dish_name,
        dish_long_description: req.body.dish_long_description,
        dish_short_description: req.body.dish_short_description,
        dish_type: req.body.dish_type,
        dish_price: req.body.dish_price,
        organization_id: req.body.organization_id
    }
    Dish.create(dishData)
                .then(dish => {
                    res.json({status: dish.dish_name + ' added'})
                })
                .catch(err =>
                    res.send("error: " + err)
                )
    .catch(err =>{
        res.send('error: ' + err)
    })
})

module.exports = router;
