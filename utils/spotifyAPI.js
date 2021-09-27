require("dotenv").config('../');
const axios = require('axios');
const btoa  = require('btoa');
const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

const _getToken = async () => {

        console.log("---> Requesting Token with credentials: ", clientId, " ", clientSecret)

        const result = await axios('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded', 
                'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)
            },
            body: 'grant_type=client_credentials'
        });

        const data = await result.json();
        //console.log(data)
        return data.access_token;
    }
    
const _getGenres = async (token) => {

        const result = await axios(`https://api.spotify.com/v1/browse/categories?locale=sv_US`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + token}
        });

        const data = await result.json();
        console.log(data)
        //return data.categories.items;
    }

const _getPlaylistByGenre = async (token, genreId) => {

        const limit = 10;
        
        const result = await axios(`https://api.spotify.com/v1/browse/categories/${genreId}/playlists?limit=${limit}`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + token}
        });

        const data = await result.json();
        return data.playlists.items;
    }

//https://api.spotify.com/v1/search?type=track&q=isrc:USWB11802164+OR+isrc:DEMA61301103
const _getTracks = async (token, tracksEndPoint) => {

        const limit = 10;

        const result = await axios(`${tracksEndPoint}&limit=${limit}`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + token}
        });

        const data = await result.json();
        console.log(
            {
                spotifyId: data.tracks.items[0].id,
                title: data.tracks.items[0].name,
                artists: data.tracks.items[0].artists,
                albumUrl: data.tracks.items[0].album.images[0].url
            }

            );

        //Spotify Image URI 
        // Title 
        // Artist Name List 
        //In case the SpotifyAPI returns multiple tracks take the track with highest popularity (an attribute in the Json) 
        
        return data.items;
    }

const _getTrack = async (token, trackEndPoint) => {

        const result = await axios(`${trackEndPoint}`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + token}
        });

        const data = await result.json();
        return data;
    }

_getToken()
//_getTracks(await _getToken() , 'https://api.spotify.com/v1/search?type=track&q=isrc:GBAYE6700149')