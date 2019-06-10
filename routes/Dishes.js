var express = require("express");
var router = express.Router();
const Favourite = require("../models/Favourite")
const Dish = require("../models/Dish")
const Mark = require("../models/Mark")
var db = require('../database/db')

// Get All Dishes
router.get("/all-dishes", (req, res) => {
  db.sequelize.query('SELECT * FROM `dishes_top`;')
  .then(results => {
    res.json(results[0]);
  })
  .catch(err => {
    res.send("error: " + err)
  })
});

//Get All Dishes by dish_popularity
router.get("/pall-dishes-by-popularity", (req, res) => {
  db.sequelize.query('SELECT * FROM `dishes_top` ORDER BY dish_popularity DESC;')
  .then(results => {
    res.json(results[0]);
  })
  .catch(err => {
    res.send("error: " + err)
  })
})


// Get All Dishes with marks
router.get("/all-dishes-with-marks", (req, res) => {

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

router.delete('/dislike:dish_id&:user_id', (req, res) => {
  Favourite.destroy({
    where: {
      dish_id: req.params.dish_id,
      user_id: req.params.user_id
    }
  })
  .then(() => {
    res.json({status: 'disliked'})
  })
  .catch(err =>{
    res.send("error: " + err)
  })
})

//like
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
  db.sequelize.query('SELECT * FROM `dishes_top` WHERE dish_type=' + req.query.dish_type + ';')
  .then(results => {
    res.json(results[0]);
  })
  .catch(err => {
    res.send("error: " + err)
  })
})

router.post("/estimate-dish", (req, res) => {
  db.sequelize.query('SELECT user_id FROM `users` WHERE user_email=\'' + req.query.user_email + '\';')
  .then(result => {
    var userId = result[0][0].user_id;
    Mark.create({mark_value: req.query.mark_value, user_id: userId, dish_id: req.query.dish_id})
    .then(sett => {
      res.json({status: true})
    })
    .catch(err =>{
      res.json({status: false})
    })
})
.catch(err => {
  res.json({status: false})
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
