const Sequelize = require("sequelize")
const db = require("../database/db")

module.exports = db.sequelize.define(
    'set',
    {
        set_id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        user_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        set_name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        set_total_price: {
          type: Sequelize.DOUBLE,
          defaultValue: 0.0
        }
    },
    {
        timestamps: false
    }
)
