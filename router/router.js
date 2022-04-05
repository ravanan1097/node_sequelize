const express = require("express");
const route = express.Router();
const user_controller = require("../controller/user_controller");
const task_controller=require("../controller/task_controller");
const countryAndCity=require("../controller/countryAndCapital");

//User

route.get("/createUser", user_controller.createUser);
route.get("/findAll", user_controller.findAll);
route.post("/find/:email", user_controller.findUser);
route.get("/update/:name", user_controller.updateUser);
route.get("/delete/:name", user_controller.deleteUser);


//Task

route.post("/createTask",task_controller.createTask);
route.get("/getUserTasks",task_controller.getUserTasks);

//Country and City

route.post("/createCountry",countryAndCity.createCountry);
route.post("/createCity",countryAndCity.createCity);
route.get("/getCountryAndCity",countryAndCity.getCountryAndCity);
 

module.exports = route;