module.exports = app => {
  app.get("/upcoming-movies", function(req, res) {
    res.send({ body: "Hello world" });
  });
};
