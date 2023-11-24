const connection = require("./dbconnect");
var jwt = require('jsonwebtoken');
const fs = require('fs');

const login = async (req, res) => {
  console.log(req.body);
  const username = req.body["un"];
  const password = req.body["pw"];

  connection().then(async (db) => {
    console.log("try get collection");
    const collection = db.collection("users");
    console.log("have collection");

    let results = await collection
      .find({ UserName: username })
      .limit(50)
      .toArray();
    let result = {};
    for (let i = 0; i < results.length; i++) {
      console.log(results);
      if (results[i].Password == password) {
        result = results[i];
        delete result.Password;
        delete result._id;
      }
    }
    var privateKey = fs.readFileSync("private.pem");
    var token = jwt.sign(result, privateKey, { algorithm: 'RS256' });
    res.status(200).send(token);
  });
};

const logout = async (req, res) => {};

module.exports = { login, logout };
