var express = require("express");
var consign = require("consign");

const PORT = process.env.SERVER_PORT;

var app = express();

consign()
  .include("services")
  .into(app);

module.exports = app.listen(PORT, () => {
  console.log("=== Upcoming Movies Server is up! ===");
});
