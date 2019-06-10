var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()
var port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))

var Users = require('./routes/Users')
var Dishes = require('./routes/Dishes')
var Sets = require('./routes/Sets')
var Organizations = require('./routes/Organizations')
// var Orders = require('./routes/Orders')

app.use('/users', Users)
// app.use('/orders', Orders)
app.use('/api/organizations', Organizations)
app.use('/api/dishes', Dishes)
app.use('/api/sets', Sets)
app.get('/', (req, res) => ('./client/src/App.js'))

app.listen(port, () => {
    console.log("Server is running on port: " + port)
})
