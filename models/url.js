// Importing required modules
const mongoose = require("mongoose");
const shortId = require("shortid");

// Defining schema for URL data
const urlSchema = new mongoose.Schema({
  originalUrl: {
    type: String,
    required: true, // Mandatory original URL
  },
  shortUrl: {
    type: String,
    required: true,
    default: shortId.generate, // Auto-generate short URL
  },
});

// Exporting URL model
module.exports = mongoose.model("Url", urlSchema);
