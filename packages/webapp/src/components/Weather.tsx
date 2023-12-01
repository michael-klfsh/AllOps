import React, { useEffect, useState } from "react";
import Wind from "../../assets/img/wind.svg";
import WeatherIcon from "./WeatherIcon";
import { FaWind } from "react-icons/fa";

const Weather = () => {
  //Variable
  const [weather, setWeather] = useState("");
  const [temperature, setTemperature] = useState(0);
  const [wind, setWind] = useState(0);
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const [shouldFetch, setFetch] = useState(false);
  const baseURL = "http://127.0.0.1:3001";

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (response) => {
        setLon(response.coords.longitude);
        setFetch(true);
        setLat(response.coords.latitude);
        return 0;
      },
      (error) => console.error(error)
    );

    if (shouldFetch) {
      fetch(`${baseURL}/weather/lat/${lat}/lon/${lon}`, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      })
        .then((response) => response.json())
        .then((json) => {
          setWeather(json.weather[0].main as string);
          setTemperature(Math.floor(json.main.temp - 273.15));
          setWind(Number(json.wind.speed));
        })
        .catch((error) => console.error(error));
    }
  }, [lat]);

  return (
    <div className={"d-flex justify-content-between align-items-start"}>
      <div>
        <h3>{weather}</h3>
        <span className={"fs-5"}>{temperature}&nbsp;°C</span>
        <div>
          <FaWind />
          <span className={"fs-5"}>&nbsp;{wind} meter/sec</span>
        </div>
      </div>
      <div className={"w-25"}>
        <WeatherIcon weatherName={weather} />
      </div>
    </div>
  );
};
export default Weather;
