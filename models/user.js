const {Sequelize} =require("sequelize");
const seq=require("../config/dbconfig");
const Task=require("./task");

const User= seq.define(
    'user',{
        id:{
            type:Sequelize.INTEGER,
            autoIncrement:true,
            allowNull:false,
            primaryKey:true
        },
        name:{
            type:Sequelize.STRING,
            allowNull:false,
        },
        email:{
            type:Sequelize.STRING,
            allowNull:false,
            unique:true
        },
        createdAt:Sequelize.DATE,
        updatedAt:Sequelize.DATE
    }
);

//One to One Mapping
User.hasOne(Task);
Task.belongsTo(User);

module.exports=User;