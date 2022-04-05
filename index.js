const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv').config();
const route = require("./router/router");

const sequelize = require("./config/dbconfig");
require("./config/model_exports");

app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use("/", route);

const port = process.env.PORT;
app.listen(port, () => console.log("Listening on", port))

sequelize.authenticate().then(() => console.log("Connected to DB Successfully ")).catch(err => console.log("DB Connection Failed", err.message));
sequelize.sync({alter:true});
