var request = require("request");
const config = require("../config/tmdb.json");

var getAuthURL = function(url) {
  return config.api_url + url + "?api_key=" + config.api_key;
};

const UPCOMING_URL = getAuthURL(config.upcoming_url);

module.exports = app => {
  app.get("/upcoming", function(req, response) {
    request(UPCOMING_URL, function(err, res, body) {
      response.statusCode = res.statusCode;
      response.json(JSON.parse(body));
    });
  });
};
