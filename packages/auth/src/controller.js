const connection = require("./dbconnect");

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
    res.status(200).send(result);
  });
};

const logout = async (req, res) => {};

module.exports = { login, logout };
