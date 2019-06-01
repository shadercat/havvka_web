const Sequelize = require("sequelize")
const db = require("../database/db")

module.exports = db.sequelize.define(
    'order',
    {
        order_id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        order_email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        order_password: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: 123456
        },
        order_did: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 1
        }
    },
    {
        timestamps: false
    }
)
