const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
const cors = require('cors');
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 7001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(routes);

app.get('/',(req,res) => {

  res.json()
})

// turn on connection to db and server
//sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('===> Listening on port: ', PORT));
//});
