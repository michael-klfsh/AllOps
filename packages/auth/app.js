const express = require("express");
const app = express();
const CONFIG = require("./config.json");
const routes = require("./src/routes.js");
const cors = require("cors");

let corsOptions = {
  allowedHeaders: "Content-Type",
  origin: "http://localhost:3000",
};

app.use(express.json());
app.use(cors(corsOptions));
app.use("", routes);

app.listen(CONFIG.port, () => {
  console.log(`Listening on port ${CONFIG.port}`);
});
