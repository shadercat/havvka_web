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
            allowNull: false
        },
        organization_email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        organization_password:{
          type: Sequelize.STRING,
          allowNull: false
        }
    },
    {
        timestamps: false
    }
)
