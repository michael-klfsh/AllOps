const CONFIG = require("../config.json");
const MongoClient = require("mongodb").MongoClient;
const connectionString = CONFIG.connectionUrl || "";

const client = new MongoClient(
  `mongodb+srv://${CONFIG.username}:${CONFIG.pw}@allops.kho6nyl.mongodb.net/?retryWrites=true&w=majority`
);
let connection;

module.exports = async function connectToDB() {
  try {
    console.log(
      `mongodb+srv://${CONFIG.username}:${CONFIG.pw}@allops.kho6nyl.mongodb.net/?retryWrites=true&w=majority`
    );
    connection = await client.connect();
    console.log("Connected");
  } catch (e) {
    console.error(e);
  }
  return (db = connection.db("allops"));
};
