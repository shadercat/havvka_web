var express = require("express");
var router = express.Router();
const Set = require("../models/Set")
const SetItem = require("../models/SetItem")
const Favourite = require("../models/Favourite")

var db = require('../database/db')

router.get("/byuserid/:user_id",(req, res) => {
  Set.findAll({
    where: {
      user_id: req.params.user_id
    }
  })
  .then(orders => {
    res.json(orders)
  })
  .catch(err => {
    res.send("error: " + err)
  })
})

router.delete("/sets-delete-elem", (req, res) => {
  if(req.query.set_id == -1){
    var userId;
    db.sequelize.query('SELECT user_id FROM `users` WHERE user_email=\'' + req.query.user_email + '\';')
    .then(result => {
      userId = result[0][0].user_id;
      Favourite.destroy({
        where:{
        dish_id: req.query.dish_id, user_id: userId}
      })
      res.json({status: true})
    })
    .catch(err => {
      res.json({status: false})
    })
}else{
  SetItem.destroy({
    where:
    {dish_id: req.query.dish_id, set_id: req.query.set_id}
  }
  )
  .then(result => {
    res.json({status: true})
  })
  .catch(err => {
    res.json({status: false})
  })
}
})

router.post("/sets-add-elem", (req, res) => {
  if(req.query.set_id == -1){
    var userId;
    db.sequelize.query('SELECT user_id FROM `users` WHERE user_email=\'' + req.query.user_email + '\';')
    .then(result => {
      userId = result[0][0].user_id;
      Favourite.create({dish_id: req.query.dish_id, user_id: userId})
      res.json({status: true})
    })
    .catch(err => {
      res.json({status: false})
    })
}else{
  SetItem.create({dish_id: req.query.dish_id, set_item_amount: req.query.set_item_amount, set_id: req.query.set_id})
  .then(result => {
    res.json({status: true})
  })
  .catch(err => {
    res.json({status: false})
  })
}})

router.get("/sets-get", (req, res) => {
  db.sequelize.query('SELECT * FROM `usersets` WHERE user_email=\'' + req.query.user_email + '\';')
  .then(results => {
    if(likesIsHere(results[0])){
    res.json(results[0])
  }else{
    var arr = results[0]
    arr.unshift({user_email: req.query.email, set_id: -1, set_name: "Улюблене", set_total_price: 0})
    res.json(arr);
  }
  })
  .catch(err => {
    res.json({state: err});
  })
})

const likesIsHere = (arr) => {
  for(var i = 0; i < arr.length; i++){
    if(arr[i].set_id == -1){
      return true;
    }
  }
  return false;
}

router.delete("/set_item_delete", (req, res) => {
  SetItem.destroy({
    where: {
      set_items_id: req.query.set_items_id
    }
  })
  .then(result => {
    res.json({status: "deleted"})
  })
  .catch(err => {
    res.send("error: " + err)
  })
})

router.delete("/set_delete", (req, res) => {
  Set.destroy({
    where:{
      set_id: req.query.set_id
    }
  })
  .then(result => {
    res.json({status: "deleted"})
  })
  .catch(err => {
    res.send("error: " + err)
  })
})

router.get("/", (req, res) => {
  SetItem.findAll({
    where: {
      set_id: req.query.set_id
    }
  })
  .then(setItems => {
    res.json(setItems)
  })
  .catch(err => {
    res.send("error: " + err)
  })
})

router.get("/setel/:set_id", (req, res) => {
  db.sequelize.query('SELECT `dishes`.*,`set_items`.* FROM `set_items` LEFT JOIN `dishes` ON `dishes`.`dish_id` = `set_items`.`dish_id` ' +
  'WHERE `set_items`.`set_id` = ' + req.params.set_id + ';')
  .then(results => {
    res.json(results[0]);
  })
  .catch(err => {
    res.send("error: " + err)
  })
})

router.post("/create", (req, res) => {
  const setData = {
    set_name: req.query.name,
    user_id: req.query.user_id
  }

  Set.create(setData)
  .then(set => {
      res.json({status: 'created'})
  })
  .catch(err =>
      res.send("error: " + err)
  )
})

module.exports = router;
