const express = require("express");
const router = express.Router();
const { login, logout } = require("./controller.js");

router.post("/auth", login);
router.post("/logout", logout);

module.exports = router;
