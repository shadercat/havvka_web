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
        mark_date: {
            type: Sequelize.DATE,
            defaultValue: null
        },
        mark_value: {
            type: Sequelize.DOUBLE,
            allowNull: false,
            defaultValue: 1
        },
        user_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        dish_id: {
          type: Sequelize.INTEGER,
          allowNull: false
        }
    },
    {
        timestamps: false
    }
)
