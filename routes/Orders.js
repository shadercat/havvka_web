var express = require("express");
var router = express.Router();
const Order = require("../models/Order")

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

//Update Order
router.put("/order/:id", (req, res) => {
    if (!req.body.task_name) {
        res.status(400)
        res.json({
            error: "Bad Data"
        })
    } else {
        Order.update(
            { order_state: req.body.order_state },
            { where: { id: req.params.id } }
        )
            .then(() => {
                res.send("Order state Updated!")
            })
            .error(err => res.send(err))
    }
})
