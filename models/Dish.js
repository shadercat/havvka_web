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
        dish_img: {
            type: Sequelize.STRING
        },
        dish_type: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        dish_price: {
            type: Sequelize.DOUBLE,
            allowNull: false,
            defaultValue: 123456
        },
        dish_long_description: {
           type: Sequelize.STRING,
           allowNull: true
        },
        dish_short_description: {
          type: Sequelize.STRING,
          allowNull: true
        },
        dish_popularity: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 1
        }
    },
    {
        timestamps: false
    }
)
