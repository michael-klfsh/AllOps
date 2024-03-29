const connection = require("./dbconnect");
var jwt = require("jsonwebtoken");
const fs = require("fs");

const login = async (req, res) => {
  const username = req.body["un"];
  const password = req.body["pw"];

  connection().then(async (db) => {
    const collection = db.collection("users");
    let results = await collection
      .find({ UserName: username })
      .limit(50)
      .toArray();
    if (results.length == 0) {
      res.json(401, "Username not registered! Contact the admin to register.");
      return;
    }
    let result = {};
    for (let i = 0; i < results.length; i++) {
      if (results[i].Password == password) {
        result = results[i];
        delete result.Password;
        delete result._id;
        var privateKey = fs.readFileSync("private.pem");
        var token = jwt.sign(result, privateKey, { algorithm: "RS256" });
        res.json(token);
        return;
      }
    }
    res.json(401, "Wrong password. Contact the admin to reset your password.");
  });
};

const validate = async (req, res) => {
  const token = req.body["token"];
  var publicKey = fs.readFileSync("public.pem");
  try {
    const decoded = jwt.verify(token, publicKey);
    res.json(decoded);
  } catch {
    res.json(403, "Token could not be validated!");
  }
};

const logout = async (req, res) => {};

module.exports = { login, logout, validate };
