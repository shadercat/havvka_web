var express = require("express");
var router = express.Router();
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const Organization = require("../models/Organization")

// Get All Organizations
router.get("/organizations", (req, res) => {
    Organization.findAll()
        .then(organizations => {
          res.json(organizations)
        })
        .catch(err => {
          res.send("error: " + err)
        })
});



        router.use(cors())

        process.env.SECRET_KEY = 'secret'
router.post('/login', (req, res) => {
      Organization.findOne({
      where: {
          organization_email: req.body.organization_email
          }
      })
    .then(organization => {
                if(organization){
                    if(bcrypt.compareSync(req.body.organization_password, user.organization_password)){
                        let token = jwt.sign(organizations.dataValues, process.env.SECRET_KEY, {
                            expiresIn: 1440
                        })
                        res.send(token)
                    }
                }else{
                    res.status(400).json({error: 'Organization does not exist'})
                }
            })
            .catch(err => {
                res.status(400).json({error: err})
            })
        })
module.exports = router
