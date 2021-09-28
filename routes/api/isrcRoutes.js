const router = require("express").Router();
const { Artist, Track } = require("../../models");
const { Op } = require("sequelize");

const { getSpotifyToken, getSpotifyTracks } = require("../../utils/spotifyAPI");

// search all artists
router.get("/artists", async (req, res) => {
  let dbQuery = null;

  if (req.query.hasOwnProperty("search")) {
    let searchString = req.query.search || null;
    dbQuery = `%${searchString.replace(" ", "_")}%` || null;
  }
  const id = req.query.id || null;

  try {
    const artistData = await Artist.findAll({
      where: {
        [Op.or]: {
          id: { [Op.eq]: id },
          name: { [Op.like]: dbQuery },
        },
      },
    });
    res.status(200).json(artistData);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Search Spotify and Create 1 Track and associated Artists
router.post("/track/:isrcId", async (req, res) => {
  const isrcId = req.params.isrcId;

  try {
    const spotifyMetaData = await getSpotifyTracks(getSpotifyToken, isrcId);

    let artistArr = spotifyMetaData.artists;

    artistArr.forEach(async (artist) => {
      try {
        const newArtist = await Artist.findOrCreate({ where: artist });
        console.log(newArtist);
      } catch (newArtistErr) {
        console.error(newArtistErr);
      }
    });

    let idArray = artistArr.map((artist) => {
      return artist.id;
    });

    spotifyMetaData.artists = idArray;

    try {
      const newTrack = await Track.findOrCreate({ where: spotifyMetaData });
      console.log(newTrack);
      res.status(200).json(newTrack);
    } catch (newTrackErr) {
      res.status(400).json({"message":`Track with ISRC Code ${isrcId} already exists.`});
      console.error(newTrackErr);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
}); // end POST /track/:isrcId definition

//Get 1 track by unique ISRC ID
router.get("/track/:isrcId", async (req, res) => {
  const isrcId = req.params.isrcId;

  try {
    const searchTrack = await Track.findOne(
      { 
        where: {
          isrc: { [Op.eq]: isrcId },
        } 
      });
    
    const artistArr = searchTrack.artists;
    console.log(artistArr)

    searchTrack.artists = [];
    
    artistArr.forEach(async (artist,index,array) => {

      try {
        const findArtist = await Artist.findByPk(artist.id);
        searchTrack.artists.push(findArtist);
        console.log(findArtist);

      } catch (findArtist) { 
        console.error(findArtist);
        return
      }

    if(index === array.length - 1){
      res.status(200).json(searchTrack); 
    }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
}); // end GET /track/:isrcId definition

module.exports = router;
