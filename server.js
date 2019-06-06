var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))



var Users = require('./routes/Users')
var Dishes = require('./routes/Dishes')
var Organizations = require('./routes/Organizations')

app.use('/users', Users)
app.use('/organizations', Organizations)
app.get('/', (req, res) => ('./client/src/App.js'))
app.use('/api/dishes', Dishes)


if (process.env.TARGET === "now") {
    module.exports = app
} else {
    app.set("port", process.env.PORT || 5000)
    app.listen(app.get("port"), () => console.log(`Listening on port ${app.get("port")}`))
}
