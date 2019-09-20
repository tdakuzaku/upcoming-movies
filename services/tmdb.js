var request = require("request");
const config = require("../config/tmdb.json");

var getRequestOptions = function(url, query) {
  var options = {
    url: config.api_url + url,
    qs: {
      api_key: config.api_key
    }
  };
  options.qs = { ...options.qs, ...query };
  return options;
};

module.exports = app => {
  app.get("/upcoming", function(req, response) {
    var options = getRequestOptions(config.upcoming_url, {
      page: req.query.page
    });
    request(options, function(err, res, body) {
      response.statusCode = res.statusCode;
      response.json(JSON.parse(body));
    });
  });

  app.get("/movie", function(req, response) {
    var url = config.movie_url + "/" + req.query.id;
    var options = getRequestOptions(url, {});
    request(options, function(err, res, body) {
      response.statusCode = res.statusCode;
      response.json(JSON.parse(body));
    });
  });

  app.get("/search", function(req, response) {
    var options = getRequestOptions(config.search_movie_url, {
      query: req.query.query
    });
    request(options, function(err, res, body) {
      response.statusCode = res.statusCode;
      response.json(JSON.parse(body));
    });
  });
};
