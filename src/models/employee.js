import "server-only";

const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const { type } = require('node:os');
const { access } = require('node:fs');

const Employees = sequelize.define('employees', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },

    phone: {
        type: DataTypes.INTEGER
    },

    mail: {
        type: DataTypes.STRING(50)
    },

    department:{
        type: DataTypes.STRING(20),
        allowNull: false
    },

    access_profile:{
        type: DataTypes.STRING(20),
        allowNull: false
    },

    active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }

},
    {
        tableName: 'employees',
        timestamps: false
    });

module.exports = Employees;