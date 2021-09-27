require("dotenv").config({ path: require("find-config")(".env") });
const axios = require("axios");
const btoa = require("btoa");
const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;


  _getToken = async () => {
    const headers = {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
    };
    const body = "grant_type=client_credentials";

    axios
      .post("https://accounts.spotify.com/api/token", body, {
        headers: headers,
      })
      .then((tokenResponse) => {
        console.log(tokenResponse.data.access_token);
        return tokenResponse.data.access_token;
      })
      .catch((error) => {
        console.log(error);
        return null;
      });
  }

  _getGenres = async (token) => {
    const result = await fetch(
      `https://api.spotify.com/v1/browse/categories?locale=sv_US`,
      {
        method: "GET",
        headers: { Authorization: "Bearer " + token },
      }
    );

    const data = await result.json();
    console.log(data);
    //return data.categories.items;
  }

  _getPlaylistByGenre = async (token, genreId) => {
    const limit = 10;

    const result = await fetch(
      `https://api.spotify.com/v1/browse/categories/${genreId}/playlists?limit=${limit}`,
      {
        method: "GET",
        headers: { Authorization: "Bearer " + token },
      }
    );

    const data = await result.json();
    return data.playlists.items;
  }

  //https://api.spotify.com/v1/search?type=track&q=isrc:USWB11802164+OR+isrc:DEMA61301103
  _getTracks = async (token, tracksEndPoint) => {
    const limit = 10;

    axios
      .get(`${tracksEndPoint}&limit=${limit}`, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((tracksResponse) => {

        console.log(tracksResponse.data.track);

        let tracksData = {
          spotifyId: tracksResponse.data.tracks.items[0].id,
          title: tracksResponse.data.tracks.items[0].name,
          artists: tracksResponse.data.tracks.items[0].artists,
          albumUrl: tracksResponse.data.tracks.items[0].album.images[0].url,
        };

        console.log("+++> Insert into DB: \n",tracksData);

        return tracksData.items;
      })
      .catch((error) => {
        console.log(error);
        return null;
      });

    //Spotify Image URI
    // Title
    // Artist Name List
    //In case the SpotifyAPI returns multiple tracks take the track with highest popularity (an attribute in the Json)

  }

  _getTrack = async (token, trackEndPoint) => {
    const result = await fetch(`${trackEndPoint}`, {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    });

    const data = await result.json();
    return data;
  }


// SpotifyAPI._getTracks(
// await SpotifyAPI._getToken(),
//   "https://api.spotify.com/v1/search?type=track&q=isrc:GBAYE6700149"
// );

 _getTracks('BQCVp95rp5Njc8rHVdt5jVD6AUgFpwpQ2Ktdd5iUG1x97D5m0ZH82VTjttqz7dmM4EVD2hxbjs94ctiFh1E',"https://api.spotify.com/v1/search?type=track&q=isrc:GBAYE6700149");

//module.exports = SpotifyAPI;
