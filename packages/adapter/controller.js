const CONFIG = require("./config.json");
const axios = require("axios");
const NodeCache = require("node-cache");
const cache = new NodeCache();

const getWeather = async (req, res) => {
  const cacheKey = `lat${req.params.lat}lon${req.params.lon}`;
  const cachedData = cache.get(cacheKey);

  if (cachedData) {
    console.log("Cached");
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.json(cachedData);
  } else {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${req.params.lat}&lon=${req.params.lon}&appid=${CONFIG.keys.weather}`
      )
      .then((response) => {
        if (response.status == 200) {
          data = response.data;
          cache.set(cacheKey, data);
          res.header("Access-Control-Allow-Origin", "http://localhost:3000");
          res.json(data);
        }
      })
      .catch((err) => {
        console.log("Error");
        res.status(500).json(err);
      });
  }
};

const getTasks = async (req, res) => {
  axios
    .get(`https://api.github.com/repos/w4r45u5/AllOps/issues`, {
      headers: {
        Authorization: `Bearer ${CONFIG.keys.github}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
    })
    .then((response) => {
      if (response.status === 200) {
        result = [];
        data = response.data;

        data.forEach((item) => {
          result.push({
            id: item.id,
            title: item.title,
            url: item.html_url,
            isOpen: item.state === "open",
            assignee: item.assignee.login,
            number: item.number,
            repoName: "AllOps",
            labels: item.labels.map((label) => {
              return {
                name: label.name,
                color: `#${label.color}`,
              };
            }),
            lastUpdated: item.updated_at,
          });
        });
        res.header("Access-Control-Allow-Origin", "http://localhost:3000");
        res.json(result);
      }
    })
    .catch((err) => {
      console.log("Error");
      res.status(500).json(err);
    });
};

const getEmails = async (req, res) => {
  const response = { number: 15 };
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.json(response);
};

const getCalendar = async (req, res) => {
  const startDate = new Date();
  const endDate = new Date();
  startDate.setHours(11, 30, 0);
  endDate.setHours(13, 0, 0);
  const response = [
    {
      title: "BCH237",
      start: startDate.toJSON(),
      end: endDate.toJSON(),
      extendedProps: {
        department: "BioChemistry",
      },
      description: "Lecture",
    },
  ];
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.json(response);
};

module.exports = {
  getWeather,
  getTasks,
  getEmails,
  getCalendar,
};
