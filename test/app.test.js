const request = require("supertest");
const app = require("../app.js");

describe("GET/", function() {
  it("should return the Hello World message", function(done) {
    request(app)
      .get("/upcoming-movies")
      .expect(
        200,
        {
          body: "Hello world"
        },
        done
      );
  });
});
