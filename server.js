const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
require("dotenv").config();
console.log(process.env);

const app = express();
const PORT = process.env.PORT || 7001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});