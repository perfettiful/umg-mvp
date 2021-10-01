const { getSpotifyToken, getSpotifyTracks } = require("../utils/spotifyAPI");

test("Fetch API Client Auth Token", async () => {
  const authToken = await getSpotifyToken();

  expect(authToken).toHaveLength(83);
});

test("Authorized Fetch Track Data with ISRC Code", async () => {

  const spotifyISRCResponse = await getSpotifyTracks(getSpotifyToken, "GBN9X1600031");
  const spotifyReponseISRC = spotifyISRCResponse.isrc;

  expect(spotifyReponseISRC).toBe('GBN9X1600031');
});
