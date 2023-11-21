const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const axios = require("axios");
const NodeCache = require('node-cache');
const cache = new NodeCache();

const port = 3000;
const APIKey = '';

app.get('/weather/lat/:lat/lon/:lon', async (req, res) => {
    const cacheKey = `lat${req.params.lat}lon${req.params.lon}`;
    const cachedData = cache.get(cacheKey);
  
    if (cachedData) {
        console.log('Cached')
        res.json({ data: cachedData });
    } else {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${req.params.lat}&lon=${req.params.lon}&appid=${APIKey}`)
        .then((response => {
            if(response.status == 200) {
                console.log('Not in cache')
                data = response.data;
                cache.set(cacheKey, data);
                console.log(data)

                res.json(data)
            }
        }))
        .catch(err => {
            console.log("Error")
            res.status(500).json(err);
        });
    }
})

  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})