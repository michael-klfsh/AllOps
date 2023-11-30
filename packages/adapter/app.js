const express = require("express");
const app = express();
const CONFIG = require("./config.json");
const bodyParser = require("body-parser");
const axios = require("axios");
const NodeCache = require("node-cache");
const cache = new NodeCache();
const routes = require("./routes.js");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const cors = require("cors");

let corsOptions = {
  allowedHeaders: "Content-Type,Authorization",
  origin: "http://localhost:3000",
};
var publicKey = fs.readFileSync("public.pem");

const validateJWT = function (req, res, next) {
  if (!req.headers["authorization"]) {
    return res.status(403).json({ error: "Authentication needed!" });
  }
  const token = req.headers["authorization"];
  try {
    const decoded = jwt.verify(token, publicKey);
    console.log(decoded);
    req.user = decoded;
    next();
  } catch (e) {
    res.status(400).json("Token not valid");
  }
};

app.use(cors(corsOptions));
app.use(validateJWT);
app.use("", routes);

app.listen(CONFIG.port, () => {
  console.log(`Listening on port ${CONFIG.port}`);
});
