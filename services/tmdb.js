var request = require("request");
const config = require("../config/tmdb.json");

module.exports = app => {
  app.get("/upcoming", function(req, response) {
    var options = {
      url: config.api_url + config.upcoming_url,
      qs: {
        api_key: config.api_key,
        page: req.query.page
      }
    };
    request(options, function(err, res, body) {
      response.statusCode = res.statusCode;
      response.json(JSON.parse(body));
    });
  });

  app.get("/movie", function(req, response) {
    var options = {
      url: config.api_url + config.movie_url + "/" + req.query.id,
      qs: {
        api_key: config.api_key
      }
    };
    request(options, function(err, res, body) {
      response.statusCode = res.statusCode;
      response.json(JSON.parse(body));
    });
  });
};
