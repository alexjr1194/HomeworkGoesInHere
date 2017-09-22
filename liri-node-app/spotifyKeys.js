var Spotify = require('node-spotify-api');

var spotify = new Spotify ({
  id: "2ab25f2e32b748f0bd088d56f83291d6",
  secret: "b96863b2372d4304b0245b9428b36bde"
});

module.exports = spotify;