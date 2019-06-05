const Sequelize = require("sequelize")
const db = require("../database/db")

module.exports = db.sequelize.define(
    'ordered_dish',
    {
        ordered_dish_id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        ordered_dish_amount: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        dish_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        order_id: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        ordered_dish_price: {
          type: Sequelize.DOUBLE,
          defaultValue: 0.0
        }
    },
    {
        timestamps: false
    }
)
