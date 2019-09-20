var express = require("express");
var app = express();
var router = express.Router();

const PORT = process.env.SERVER_PORT;

router.get("/",function(req,res){
  res.send({body: "Hello world"});
});

app.use("/", router);

module.exports = app.listen(PORT, function () {
  console.log('=== Upcoming Movies Server is up! ===');
});