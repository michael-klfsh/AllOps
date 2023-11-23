const CONFIG = require("./config.json");
const axios = require("axios");
const NodeCache = require("node-cache");
const cache = new NodeCache();

const login = async (req, res) => {};

const logout = async (req, res) => {};

module.exports = { login, logout };
