const Sequelize = require("sequelize")
const db = {}
const sequelize = new Sequelize("heroku_ffbd34e23c042e6", "b7da4d001ebacf", "62cf7465", {
    host: 'us-cdbr-iron-east-02.cleardb.net',
    dialect: 'mysql',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})
// const sequelize = new Sequelize("havvka", "root", "4723", {
//     host: 'localhost',
//     dialect: 'mysql',
//     operatorsAliases: false,
//
//     pool: {
//         max: 5,
//         min: 0,
//         acquire: 30000,
//         idle: 10000
//     }
// })

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
