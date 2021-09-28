const sequelize = require('../config/connection');
const { Artist, Track } = require('../models');

//const artistSeedData = require('./artistSeedData.json');
const trackSeedData = [
  {
    isrc: 'USEE10001992',
    id: '5BIMPccDwShpXq784RJlJp',
    title: 'Enter Sandman',
    artists: [
      {

        id: '2ye2Wgw4gimLv2eAKyk1NB',

      }
    ],
    albumCoverUrl: 'https://i.scdn.co/image/ab67616d0000b273af07dc851962508661bbcfce'
  },
  {
    isrc: 'GBAYE6700149',
    id: '10pNLTLW8QHp0FbhjA0ejS',
    title: 'Lucy In The Sky With Diamonds',
    artists: [
      {
        external_urls: {},
        href: 'https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2',
        id: '3WrFJ7ztbogyGnTHbHJFl2',
        name: 'The Beatles',
        type: 'artist',
        uri: 'spotify:artist:3WrFJ7ztbogyGnTHbHJFl2'
      }
    ],
    albumCoverUrl: 'https://i.scdn.co/image/ab67616d0000b273c92b57b8307e5999ec2fed69'
  },
  {
    isrc: 'GBAYE0601477',
    id: '3BQHpFgAp4l80e1XslIjNI',
    title: 'Yesterday - Remastered 2009',
    artists: [
      {
        external_urls: {},
        href: 'https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2',
        id: '3WrFJ7ztbogyGnTHbHJFl2',
        name: 'The Beatles',
        type: 'artist',
        uri: 'spotify:artist:3WrFJ7ztbogyGnTHbHJFl2'
      }
    ],
    albumCoverUrl: 'https://i.scdn.co/image/ab67616d0000b273e3e3b64cea45265469d4cafa'
  },
  {
    isrc: 'USWB11403680',
    id: '7N3PAbqfTjSEU1edb2tY8j',
    title: 'Jump - 2015 Remaster',
    artists: [
      {
        external_urls: {},
        href: 'https://api.spotify.com/v1/artists/2cnMpRsOVqtPMfq7YiFE6K',
        id: '2cnMpRsOVqtPMfq7YiFE6K',
        name: 'Van Halen',
        type: 'artist',
        uri: 'spotify:artist:2cnMpRsOVqtPMfq7YiFE6K'
      }
    ],
    albumCoverUrl: 'https://i.scdn.co/image/ab67616d0000b273b414c63fb435b622238c15ed'
  },
  {
    isrc: 'USVT10300001',
    id: '3dPQuX8Gs42Y7b454ybpMR',
    title: 'Seven Nation Army',
    artists: [
      {
        external_urls: {},
        href: 'https://api.spotify.com/v1/artists/4F84IBURUo98rz4r61KF70',
        id: '4F84IBURUo98rz4r61KF70',
        name: 'The White Stripes',
        type: 'artist',
        uri: 'spotify:artist:4F84IBURUo98rz4r61KF70'
      }
    ],
    albumCoverUrl: 'https://i.scdn.co/image/ab67616d0000b273a69f71a8794e2d867a52f98f'
  },
  {
    isrc: 'USQX91300108',
    id: '69kOkLUCkxIZYexIgSG8rq',
    title: 'Get Lucky (feat. Pharrell Williams & Nile Rodgers)',
    artists: [
      {
        external_urls: {},
        href: 'https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi',
        id: '4tZwfgrHOc3mvqYlEYSvVi',
        name: 'Daft Punk',
        type: 'artist',
        uri: 'spotify:artist:4tZwfgrHOc3mvqYlEYSvVi'
      },
      {
        external_urls: {},
        href: 'https://api.spotify.com/v1/artists/2RdwBSPQiwcmiDo9kixcl8',
        id: '2RdwBSPQiwcmiDo9kixcl8',
        name: 'Pharrell Williams',
        type: 'artist',
        uri: 'spotify:artist:2RdwBSPQiwcmiDo9kixcl8'
      },
      {
        external_urls: {},
        href: 'https://api.spotify.com/v1/artists/3yDIp0kaq9EFKe07X1X2rz',
        id: '3yDIp0kaq9EFKe07X1X2rz',
        name: 'Nile Rodgers',
        type: 'artist',
        uri: 'spotify:artist:3yDIp0kaq9EFKe07X1X2rz'
      }
    ],
    albumCoverUrl: 'https://i.scdn.co/image/ab67616d0000b2731d97ca7376f835055f828139'
  },
  {
    isrc: 'GBAYE0601498',
    id: '50xwQXPtfNZFKFeZ0XePWc',
    title: 'Yellow Submarine - Remastered 2009',
    artists: [
      {
        external_urls: {},
        href: 'https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2',
        id: '3WrFJ7ztbogyGnTHbHJFl2',
        name: 'The Beatles',
        type: 'artist',
        uri: 'spotify:artist:3WrFJ7ztbogyGnTHbHJFl2'
      }
    ],
    albumCoverUrl: 'https://i.scdn.co/image/ab67616d0000b27328b8b9b46428896e6491e97a'
  }
]

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  //const artists = await Artist.bulkCreate(artistSeedData);
  const tracks = await Track.bulkCreate(trackSeedData);

  process.exit(0);
};

//seedDatabase();
