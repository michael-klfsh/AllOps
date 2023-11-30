const express = require("express");
const router = express.Router();
const { login, logout, validate } = require("./controller.js");

router.post("/auth", login);
router.post("/logout", logout);
router.post("/validate", validate);

module.exports = router;
