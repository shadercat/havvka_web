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
var Organizations = require('./routes/Organizations')

app.use('/users', Users)
app.use('/organizations', Organizations)
app.get('/', (req, res) => ('./client/src/App.js'))
app.use('/api', Dishes)
app.get('/orgadm', (req, res) => ('./client/src/OrganizationLogin.js'))

app.listen(port, () => {
    console.log("Server is running on port: " + port)
})
