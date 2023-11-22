const express = require("express");
const router = express.Router();
const { getWeather, getTasks } = require("./controller.js");

router.get("/tasks/user/:user", getTasks);
router.get("/weather/lat/:lat/lon/:lon", getWeather);

module.exports = router;
