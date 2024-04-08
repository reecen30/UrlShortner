require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const Url = require("./models/url"); // Make sure this path matches your project structure
const validator = require("validator");
const shortId = require("shortid");

const app = express();
app.use(express.json());

// Replace <your-mongodb-connection-string> with your actual connection string in .env file
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.post("/shorten", async (req, res) => {
  const { originalUrl } = req.body;
  if (!validator.isURL(originalUrl, { require_protocol: true })) {
    return res.status(400).json({ error: "Invalid URL format" });
  }
  try {
    let url = await Url.findOne({ originalUrl });
    if (!url) {
      const shortUrl = shortId.generate(); // Generate a short ID
      url = new Url({ originalUrl, shortUrl }); // Use the generated short ID as the short URL
      await url.save();
    }
    res.json(url);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

app.get("/:shortUrl", async (req, res) => {
  try {
    const url = await Url.findOne({ shortUrl: req.params.shortUrl });
    if (url) {
      return res.redirect(url.originalUrl);
    } else {
      return res.status(404).json({ error: "URL not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

// Export the Express app for testing
module.exports = app;
