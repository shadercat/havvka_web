var express = require("express");
var router = express.Router();
const Availability = require("../models/Availability")
const Dish = require("../models/Dish")
const Favourite = require("../models/Favourite")
const Mark = require("../models/Mark")
const Order = require("../models/Order")
const OrderedDish = require("../models/OrderedDish")
const Organization = require("../models/Organization")
const Set = require("../models/Set")
const SetItem = require("../models/SetItem")
var db = require('../database/db')

//login
// ...api...?login=_____&password=______
// return true/false
router.post('/',(req, res) => {
  User.findOne({
      where: {
          user_email: req.query.login
      }
  })
  .then(user => {
    console.log(user);
      if(user){
          if(bcrypt.compareSync(req.query.password, user.user_password)){
              res.json(true)
          } else {
            res.json(false)
          }
      }else{
          res.status(400).json(false,{error: 'User does not exist'})
      }
  })
  .catch(err => {
      res.status(400).json(false,{error: err})
  })
})

//Forgot password
// ...api...?login=_____
//   return true/false ==> send message to login
router.post('/',(req, res) => {

})


// Registration
  // ...api...?login=_____&password=______
  // return true/false
router.post('/',(req, res) => {

})

// Get items
router.get('/dishes-get/',(req, res) => {
  switch (req.query.mode) {
    case 'none':
    db.sequelize.query('SELECT sets.* ' +
    'FROM users LEFT JOIN sets ON sets.user_id = users.user_id ' +
    'WHERE users.user_email = ' + req.query.login + ';', Set)
    .then(results => {
      res.json(results[0]);
    })
    .catch(err => {
      res.send("error: " + err)
    })
      break;
    case 'rating':

      break;
    case 'first':

      break;
    case 'second':

      break;
    case 'third':

      break;
    case 'drinks':

      break;
    default:

  }
})

//Get sets
router.get('/',(req, res) => {
  db.sequelize.query('SELECT sets.* ' +
  'FROM users LEFT JOIN sets ON sets.user_id = users.user_id ' +
  'WHERE users.user_email = ' + req.query.login + ';', Set)
  .then(results => {
    res.json(results[0]);
  })
  .catch(err => {
    res.send("error: " + err)
  })
})

//Get set's items
router.get('/',(req, res) => {
  db.sequelize.query('SELECT set_items.*, dishes.* ' +
  'FROM dishes LEFT JOIN set_items ON set_items.dish_id = dishes.dish_id ' +
  'WHERE set_items.set_id = ' + req.query.setId + ';')
  .then(results => {
    res.json(results[0]);
  })
  .catch(err => {
    res.send("error: " + err)
  })
})

// Get orders
router.get('/',(req, res) => {
  db.sequelize.query('SELECT orders.* ' +
  'FROM orders LEFT JOIN users ON orders.user_id = user.user_id ' +
  'WHERE users.user_email = ' + req.query.login + ';')
  .then(results => {
    res.json(results[0]);
  })
  .catch(err => {
    res.send("error: " + err)
  })
})

//Get order's items
router.post('/',(req, res) => {

})

//Get proposition
router.post('/',(req, res) => {

})

//Get item info
router.post('/',(req, res) => {

})

//Set new set
router.post('/',(req, res) => {
  Set.create({

  })
})

//Set set's item
router.post('/',(req, res) => {

})

//Set order
router.post('/',(req, res) => {

})


module.exports = router;
