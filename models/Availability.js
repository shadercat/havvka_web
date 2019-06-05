const Sequelize = require("sequelize")
const db = require("../database/db")

module.exports = db.sequelize.define(
    'availability',
    {
        availability_id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        dish_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        organization_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        availability_amount:{
          type: Sequelize.INTEGER,
          allowNull: false
        }
    },
    {
        timestamps: false
    }
)
