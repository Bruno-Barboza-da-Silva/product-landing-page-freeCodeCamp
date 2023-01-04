const {DataTypes} = require('sequelize')
const sequelize = require("../config/config.js")

const Clients = sequelize.define("Clients", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    product: {
        type: DataTypes.STRING
    },
    createdAt: {
        type: DataTypes.DATE,
        field: "created_at"
    },
    updatedAt:{
        type: DataTypes.DATE,
        field: "updated_at"
    }
}, 
{
    tableName: "clients",
    timestamps: true,
    createdAt: "createdAt",
    updatedAt: "updatedAt"
}
);

module.exports = Clients
