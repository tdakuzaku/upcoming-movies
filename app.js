var express = require("express");
var consign = require("consign");

const PORT = process.env.SERVER_PORT;
const cors = require('cors')

var app = express();

app.use(cors());

consign()
  .include("services")
  .into(app);

app.use(express.static('client/dist'));

module.exports = app.listen(PORT, () => {
  console.log("=== Upcoming Movies Server is up! ===");
});
