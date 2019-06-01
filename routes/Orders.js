var express = require("express");
var router = express.Router();
const Order require("../models/Order")

// Get All Orders
router.get("/orders", (req, res) => {
    Order.findAll()
        .then(orders => {
          res.json(orders)
        })
        .catch(err => {
          res.send("error: " + err)
        })
});

// Delete order by id
router.delete("/orders/:id", (req, res) => {
  Order.destroy({
    where: {
        order_id: req.params.id
    }
  })
  .then(() => {
    res.send("Order deleted")
  })
  .catch(err => {
    res.send("error: " + err)
  })
})
