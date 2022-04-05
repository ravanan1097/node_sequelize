const { Sequelize } = require("sequelize");
const seq = require("../config/dbconfig");
const city = require("./city");

const country = seq.define(
    "country",
    {
        name: {
            type: Sequelize.STRING
        },
        population: {
            type: Sequelize.STRING
        }, 
        president: {
            type: Sequelize.STRING
        }
    }, {
    timestamps: false
}
);

//One to Many and Many to One
country.hasMany(city);
city.belongsTo(country);

module.exports = country;

