const Sequelize = require("sequelize")
const db = require("../database/db")

module.exports = db.sequelize.define(
    'dish',
    {
        dish_id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        dish_name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        dish_price: {
            type: Sequelize.DOUBLE,
            allowNull: false,
            defaultValue: 123456
        },
        dish_popularity: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 1
        },
        organization_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        dish_type: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    },
    {
        timestamps: false
    }
)
