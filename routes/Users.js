const express = require('express')
const users = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const User = require("../models/User")
users.use(cors())

process.env.SECRET_KEY = 'secret'

users.post('/register', (req, res) => {
    const userData = {
        user_email: req.body.user_email,
        user_password: req.body.user_password
    }

    User.findOne({
        where: {
            user_email: req.body.user_email
        }
    })
    .then(user => {
        if(!user) {
            bcrypt.hash(req.body.user_password, 10, (err, hash) => {
                userData.user_password = hash
                User.create(userData)
                .then(user => {
                    res.json({status: user.user_email + ' registered'})
                })
                .catch(err =>
                    res.send("error: " + err)
                )
            })
        }else{
            res.json({error: "User already exists"})
        }
    })
    .catch(err =>{
        res.send('error: ' + err)
    })
})

users.post('/register/:user_email&:user_password', (req, res) => {
    const userData = {
        user_email: req.params.user_email,
        user_password: req.params.user_password
    }

    User.findOne({
        where: {
            user_email: req.params.user_email
        }
    })
    .then(user => {
        if(!user) {
            bcrypt.hash(req.params.user_password, 10, (err, hash) => {
                userData.user_password = hash
                User.create(userData)
                .then(user => {
                  res.json({checked: true})
                })
                .catch(err =>
                    res.json({checked: false})
                )
            })
        }else{
            res.json({checked: false})
        }
    })
    .catch(err =>{
        res.json({checked: false})
    })
})


users.post('/:user_email&:user_password', (req, res) => {
  User.findOne({
      where: {
          user_email: req.params.user_email
      }
  })
  .then(user => {
    console.log(user);
      if(user){
          if(bcrypt.compareSync(req.params.user_password, user.user_password)){
              res.json({checked: true})
          } else {
            res.json({checked:false})
          }
      }else{
          res.json({checked: false})
      }
  })
  .catch(err => {
      res.json({checked: false})
  })
})

users.post('/login', (req, res) => {
    User.findOne({
        where: {
            user_email: req.body.user_email
        }
    })
    .then(user => {
        if(user){
            if(bcrypt.compareSync(req.body.user_password, user.user_password)){
                let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                    expiresIn: 1440
                })
                res.send(token)
            }
        }else{
            res.status(400).json({error: 'User does not exist'})
        }
    })
    .catch(err => {
        res.status(400).json({error: err})
    })
})

module.exports = users
