const Sequelize = require("sequelize")
const db = require("../database/db")

module.exports = db.sequelize.define(
    'organization',
    {
        organization_id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        organization_name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        organization_location: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: 123456
        },
        organization_email: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 1
        }
        organization_password:{
          type: Sequelize.STRING,
          allowNull: false
        }
    },
    {
        timestamps: false
    }
)
