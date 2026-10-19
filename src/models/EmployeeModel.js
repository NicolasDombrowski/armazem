import "server-only";
import { DataTypes } from "sequelize";
import sequelize from "@/lib/db";

const Employee = sequelize.define('employee', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },

    department: {
        type: DataTypes.STRING(20),
        allowNull: false
    },

    access_profile: {
        type: DataTypes.STRING(20),
        allowNull: false
    },

    phone: {
        type: DataTypes.INTEGER
    },

    mail: {
        type: DataTypes.STRING(50)
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

export default Employee