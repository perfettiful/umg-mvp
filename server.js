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

app.get("/", (req, res) => {
  res.status(200).json({"message":"Welcome to our REST API. For full details on the resources available, please read our documentation : /docs"})
})

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('===> Listening on port: ', PORT));
});
