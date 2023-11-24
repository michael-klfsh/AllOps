const express = require("express");
const router = express.Router();
const {
  getWeather,
  getTasks,
  getEmails,
  getCalendar,
} = require("./controller.js");

router.get("/tasks/user/:user", getTasks);
router.get("/weather/lat/:lat/lon/:lon", getWeather);
router.get("/emails", getEmails);
router.get("/calendar", getCalendar);

module.exports = router;
