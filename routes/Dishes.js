var express = require("express");
var router = express.Router();
const Favourite = require("../models/Favourite")
const Dish = require("../models/Dish")
var db = require('../database/db')

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

router.post('/like:dish_id&:user_id', (req, res) => {
  const favouriteData = {
    dish_id: req.params.dish_id,
    user_id: req.params.user_id
  }
  Favourite.create(favouriteData)
    .then(favourite => {
      res.json({status: 'liked'})
    })
    .catch(err =>{
      res.send("error: " + err)
    })
})

router.post('/like:dish_id&:user_id', (req, res) => {
  const favouriteData = {
    dish_id: req.params.dish_id,
    user_id: req.params.user_id
  }
  Favourite.create(favouriteData)
    .then(favourite => {
      res.json({status: 'liked'})
    })
    .catch(err =>{
      res.send("error: " + err)
    })
})

// Add dish
router.post('/dish', (req, res) => {
    // const today = new Date()
    const dishData = {
        dish_name: req.body.dish_name,
        dish_long_description: req.body.dish_long_description,
        dish_short_description: req.body.dish_short_description,
        dish_type: req.body.dish_type,
        dish_price: req.body.dish_price,
        dish_img: req.body.dish_img
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

router.get("/dish", (req, res) => {
  Dish.findOne({
    where: {
      dish_name: req.query.dish_name
    }
  })
  .then(dish => {
    res.json(dish)
  })
  .catch(err => {
    res.send("error: " + err)
  })
})

// Get all dishes by dish type
router.get("/category-menu", (req, res) => {
var limit = 300;
  if(req.query.limit){
    limit = Number.parseInt(req.query.limit);
  }
  Dish.findAll({
      where: {
          dish_type: req.query.dish_type
        },
      limit: limit
  })
      .then(dishes => {
        res.json(dishes)
      })
      .catch(err => {
        res.send("error: " + err)
      })
})


// Get All Favourite dishes for user
router.get("/favourite-dishes/:user_id", (req, res) => {
  db.sequelize.query('SELECT `dishes`.* FROM (`users` LEFT JOIN `favourites` ON `favourites`.`user_id` = `users`.`user_id`) LEFT JOIN `dishes` ON `dishes`.`dish_id` = `favourites`.`dish_id` ' +
  'WHERE `users`.`user_id` = ' + req.params.user_id + ';', Dish)
  .then(results => {
    res.json(results[0]);
  })
  .catch(err => {
    res.send("error: " + err)
  })
})

module.exports = router;
