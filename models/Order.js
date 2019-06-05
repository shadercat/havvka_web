const Sequelize = require("sequelize")
const db = require("../database/db")

module.exports = db.sequelize.define(
    'order',
    {
        order_id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        user_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        organization_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        order_state: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: 'Processing'
        },
        order_time: {
            tyoe: Sequelize.DATE //?
        },
        order_total_price: {
          type: Sequelize.DOUBLE,
          defaultValue: 0.0
        }
    },
    {
        timestamps: false
    }
)
