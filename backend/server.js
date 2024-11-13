const express = require("express");
const https = require("https");
const fs = require("fs");
const app = express();

// Load the SSL certificate and key
const options = {
  key: fs.readFileSync("../server.key"),
  cert: fs.readFileSync("../server.cert"),
};

// Your existing middleware and route setup here
app.get("/", (req, res) => {
  res.send("Hello, HTTPS world!");
});

// Start the HTTPS server
https.createServer(options, app).listen(5000, "0.0.0.0", () => {
  console.log("Server is running on https://localhost");
});
