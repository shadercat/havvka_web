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

// Get all orders for organization
router.get("/orders/:organization_id", (req, res) => {
  Order.findAll(
    where: {
      organization_id: req.params.organization_id
    }
  )
  .then(orders => {
    res.json(orders)
  })
  .catch(err => {
    res.send("error: " + err)
  })
})

// Get all orders for user
router.get("/orders/:user_id", (req, res) => {
  Order.findAll(
    where: {
      user_id: req.params.user_id
    }
  )
  .then(orders => {
    res.json(orders)
  })
  .catch(err => {
    res.send("error: " + err)
  })
})

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

// Add order
router.post("/orders", (req, res) => {
  const orderData = {
    order_total_price: req.body.order_total_price,
    user_id: req.body.user_id,
    organization_id: req.body.organization_id,
    order_time: req.body.order_time
  }

  Order.create(orderData)
  .then(order => {
      res.json({status: order.order_id + ' are processing'})
  })
  .catch(err =>
      res.send("error: " + err)
  )
})
})

//Update Order state by id
router.put("/orders/:id", (req, res) => {
    if (!req.body.order_state) {
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
