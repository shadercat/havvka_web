const express = require('express')
const router = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
var db = require('../database/db')

const Orgs = require("../models/Organization")
router.use(cors())

process.env.SECRET_KEY = 'secret'

router.post('/register', (req, res) => {
    // const today = new Date()
    const orgData = {
        organization_email: req.body.organization_email,
        organization_password: req.body.organization_password,
        organization_name: '',
        organization_location: ''
    }

    Orgs.findOne({
        where: {
            organization_email: req.body.organization_email
        }
    })
    .then(user => {
        if(!user) {
            bcrypt.hash(req.body.organization_password, 10, (err, hash) => {
                orgData.organization_password = hash
                User.create(orgData)
                .then(organization => {
                    res.json({status: organization.organization_email + ' registered'})
                })
                .catch(err =>
                    res.send("error: " + err)
                )
            })
        }else{
            res.json({error: "Organization already exists"})
        }
    })
    .catch(err =>{
        res.send('error: ' + err)
    })
})

router.get('/dish-av-org:dish_id', (req, res) => {
  db.sequelize.query('SELECT `organizations`.* FROM (`organizations` LEFT JOIN `availability` ON `availability`.`organization_id` = `organizations`.`organization_id`) LEFT JOIN `dishes` ON `dishes`.`dish_id` = `availability`.`dish_id` ' +
  'WHERE `dishes`.`dish_id` = ' + req.params.dish_id + ';', Orgs)
  .then(results => {
    res.json(results[0]);
  })
  .catch(err => {
    res.send("error: " + err)
  })
})

router.post('/login', (req, res) => {
    Orgs.findOne({
        where: {
            organization_email: req.body.organization_email
        }
    })
    .then(user => {
        if(user){
            if(bcrypt.compareSync(req.body.organization_password, user.organization_password)){
                let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
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
