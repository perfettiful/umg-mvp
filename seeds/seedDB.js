const sequelize = require('../config/connection');
const { Artist, Track } = require('../models');

const artistSeedData = require('./artistSeedData.json');
//const trackSeedData = require('./trackSeedData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const artists = await Artist.bulkCreate(artistSeedData);

  console.log(artists)
  //const tracks = await track.bulkCreate(trackSeedData);

  process.exit(0);
};

seedDatabase();
