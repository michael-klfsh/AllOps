const express = require("express");
const app = express();
const CONFIG = require("./config.json");
const bodyParser = require("body-parser");
const axios = require("axios");
const NodeCache = require("node-cache");
const cache = new NodeCache();
const routes = require("./routes.js");

app.use("", routes);

app.listen(CONFIG.port, () => {
  console.log(`Listening on port ${CONFIG.port}`);
});
