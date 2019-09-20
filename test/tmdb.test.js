const request = require("supertest");
const app = require("../app.js");

var expect = require("expect.js");

const UPCOMING_URL = "/upcoming";

describe("API Authentication", function() {
  it("given valid key then should return status 200", function(done) {
    request(app)
      .get(UPCOMING_URL)
      .expect(200)
      .end(done);
  });
});

describe("GET: next 20 Upcoming Movies", function() {
  it("should return the next 20 upcoming movies", function(done) {
    request(app)
      .get(UPCOMING_URL)
      .end(function(err, res) {
        expect(err).to.be.null;
        expect(res.body.results).to.have.length(20);
        done();
      });
  });
});
