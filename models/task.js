const { Sequelize } = require("sequelize");
const sequelize = require("../config/dbconfig");


const Tasks = sequelize.define(
    "task", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    taskDesc: {
        type: Sequelize.STRING
    },
    taskArea: {
        type: Sequelize.STRING
    }
},
    {
        timestamps: true
    }

);
module.exports = Tasks;