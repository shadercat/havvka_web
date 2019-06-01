const Sequelize = require("sequelize")
const db = require("../database/db")

module.exports = db.sequelize.define(
    'mark',
    {
        mark_id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        mark_email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        mark_password: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: 123456
        },
        mark_did: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 1
        }
    },
    {
        timestamps: false
    }
)
