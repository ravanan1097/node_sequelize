const { Sequelize } = require("sequelize");
const seq=require("../config/dbconfig");

const city=seq.define(
    "city",
    {
        name:{
            type:Sequelize.STRING
        },
        population:{
            type:Sequelize.STRING
        }
    },{
        timestamps:false
    }
);

module.exports=city;

