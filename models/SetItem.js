const Sequelize = require("sequelize")
const db = require("../database/db")

module.exports = db.sequelize.define(
    'set_item',
    {
        set_items_id:{
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
        set_id:{
          type: Sequelize.INTEGER,
          allowNull: false
        }
    },
    {
        timestamps: false
    }
)
