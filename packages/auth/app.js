const express = require("express");
const app = express();
const CONFIG = require("./config.json");
const routes = require("./src/routes.js");

app.use(express.json());
app.use("", routes);

app.listen(CONFIG.port, () => {
  console.log(`Listening on port ${CONFIG.port}`);
});
