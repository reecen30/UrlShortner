const request = require("supertest");
const app = require("../index"); // Ensure this path matches the location of your index.js
const mongoose = require("mongoose");

describe("URL Shortening API", () => {
  // Close MongoDB connection after all tests are done
  afterAll(() => {
    mongoose.connection.close();
  });

  // Test case for successful URL shortening
  it("should shorten a URL", async () => {
    // Using Wikipedia as a test URL for its stability and public access
    const res = await request(app)
      .post("/shorten")
      .send({ originalUrl: "https://www.wikipedia.org/" });
    expect(res.statusCode).toEqual(200); // Expecting a successful operation status
    expect(res.body).toHaveProperty("shortUrl"); // The response should contain a shortened URL
  });

  // Test case for handling invalid URLs
  it("should return a 400 status for invalid URLs", async () => {
    // Sending an obviously invalid URL to test error handling
    const res = await request(app)
      .post("/shorten")
      .send({ originalUrl: "thisisnotauri" });
    expect(res.statusCode).toEqual(400); // Expecting an error status for invalid input
  });
});
