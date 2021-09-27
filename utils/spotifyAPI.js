require("dotenv").config({ 
    path: require("find-config")(".env") 
});

const axios = require("axios");
const btoa = require("btoa");
const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

getSpotifyToken = async () => {
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
  };
  const body = "grant_type=client_credentials";

  try {
    const tokenResponse = await axios.post(
      "https://accounts.spotify.com/api/token",
      body,
      {
        headers: headers,
      }
    );

    return tokenResponse.data.access_token;

  } catch (error) {
    console.log(error);
    return null;

  }
}; // end getSpotifyToken fct def

getSpotifyTracks = async (getToken, isrcCode) => {
  const token = await getToken();
  const limit = 10;

  try {
    const tracksResponse = await axios.get(
      `https://api.spotify.com/v1/search?type=track&q=isrc:${isrcCode}&limit=${limit}`,
      {
        headers: { Authorization: "Bearer " + token },
      }
    );

    //Search result items are already ordered by popularity, use first result in array
    let tracksData = {
      isrc: isrcCode,
      id: tracksResponse.data.tracks.items[0].id,
      title: tracksResponse.data.tracks.items[0].name,
      artists: tracksResponse.data.tracks.items[0].artists,
      albumCoverUrl: tracksResponse.data.tracks.items[0].album.images[0].url,
    };
    //console.log("\n \n======================== \n")
    //console.log("+++> Insert into DB: \n", tracksData);
    console.log(tracksData);

    return tracksData;

  } catch (error) {
    console.log(error);
    return null;
  }
}; // end getSpotifyTracks fct def


module.exports = { getSpotifyToken, getSpotifyTracks };
