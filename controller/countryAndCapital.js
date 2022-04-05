const City = require("../models/city");
const Country = require("../models/country");



exports.createCountry = async (req, res) => {

    try {
        const { name, population,president } = req.body;
        let existingCountry = await Country.findOne({ where: { name: name } })
        if (existingCountry) {
            console.log(existingCountry);
            return res.json("Country Already Exists");
        }
        let country = await Country.create({ name, population,president });
        res.json("Country Created Successfully")
    }
    catch (err) {
        console.log(err)
        return res.json(err);

    }
};

exports.createCity = async (req, res) => {
    try {
        let { population, cityName ,countryName} = req.body;
        let country = await Country.findOne({ where: { name: countryName } });
        let city = await City.create({
            name:cityName,population: population
        });

        country.addCities(city);
       //city.setCountry(country)
        return res.json("City Created Successfully");
    }

    catch (e) {
        console.log(e);
        res.json(e.message);
    }

};


exports.getCountryAndCity = async (req, res) => {
    try {
        let { name } = req.body;

        //Eager Loading
        let countryAndCity = await Country.findOne({ where: { name: name }, include: [{ model: City, as: "cities" }] });
        return res.json(countryAndCity);

    }
    catch (e) {
        console.log(e);
        res.json(e.message);
    }
}
