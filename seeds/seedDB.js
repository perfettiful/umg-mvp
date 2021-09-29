const sequelize = require('../config/connection');
const { Artist, Track } = require('../models');

const artistSeedData = require('./artistSeedData.json');
const trackSeedData = require('./artistSeedData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Artist.bulkCreate(artistSeedData);
   //await Track.bulkCreate(trackSeedData);

  process.exit(0);
};

seedDatabase();
