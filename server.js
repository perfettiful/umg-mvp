const express = require('express');
const routes = require('./routes');
const swaggerLoader = require('./swagger');
const sequelize = require('./config/connection');
const cors = require('cors');
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 7001;

const whiteList = process.env.CORS_WHITELIST.split(",")
app.use(cors({
  origin: whiteList
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes)
swaggerLoader(app);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('===> Listening on port: ', PORT));
});
