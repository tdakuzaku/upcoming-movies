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

describe("GET: first 20 Upcoming Movies", function() {
  it("should return the first 20 upcoming movies", function(done) {
    request(app)
      .get(UPCOMING_URL)
      .end(function(err, res) {
        expect(err).to.be.null;
        expect(res.body.results).to.have.length(20);
        done();
      });
  });
});

describe("GET: with pagination", function() {
  it("should return different movies from page 1 and page 2", function(done) {
    request(app)
      .get(UPCOMING_URL)
      .query({ page: 1 })
      .end(function(err1, res1) {
        request(app)
          .get(UPCOMING_URL)
          .query({ page: 2 })
          .end(function(err2, res2) {
            expect(res1.body.results[0].id).to.not.be(res2.body.results[0].id);
            done();
          });
      });
  });
});
