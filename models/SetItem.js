const Sequelize = require("sequelize")
const db = require("../database/db")

module.exports = db.sequelize.define(
    'set_item',
    {
        set_item_id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        set_item_amount: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        dish_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        set_item_price: {
          type: Sequelize.DOUBLE,
          defaultValue: 0.0
        },
        set_id:{
          type: Sequelize.INTEGER,
          allowNull: false
        }
    },
    {
        timestamps: false
    }
)
