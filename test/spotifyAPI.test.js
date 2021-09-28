const { getSpotifyToken, getSpotifyTracks } = require("../utils/spotifyAPI");

describe("Spotify API Client", () => {
  describe("Fetch API Client Auth Token", () => {
    it("should send a request to Spotify API, to return an auth token string", () => {

      // Verify 
      expect(getSpotifyToken()).toBeDefined();
    });
  });


});

// getSpotifyTracks(getSpotifyToken, "GBAYE6700149");
// getSpotifyTracks(getSpotifyToken, "USQX91300108");
// getSpotifyTracks(getSpotifyToken, "USVT10300001");
// getSpotifyTracks(getSpotifyToken, "USEE10001992");
// getSpotifyTracks(getSpotifyToken, "GBAYE0601498");
// getSpotifyTracks(getSpotifyToken, "USWB11403680");
// getSpotifyTracks(getSpotifyToken, "GBAYE0601477");