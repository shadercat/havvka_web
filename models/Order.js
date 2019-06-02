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
        user_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        organization_id: {
            type: Sequelize.INTEGER,
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
