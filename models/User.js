const Sequelize = require("sequelize")
const db = require("../database/db")

module.exports = db.sequelize.define(
    'user',
    {
        user_id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        user_email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        user_password: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: 123456
        }
    },
    {
        timestamps: false
    }
)
