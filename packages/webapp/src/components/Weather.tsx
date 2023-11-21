import React, { useEffect, useState } from "react";
import Wind from "../../assets/img/wind.svg";
import WeatherIcon from "./WeatherIcon";

const Weather = ({ children }: { children?: React.ReactNode }) => {
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
      fetch(`${baseURL}/weather/lat/${lat}/lon/${lon}`)
        .then((response) => response.json())
        .then((json) => {
          setWeather(json.weather[0].main);
          setTemperature(Math.floor(json.main.temp - 273.15));
          setWind(json.wind.speed);
        })
        .catch((error) => console.error(error));
    }
  }, [lat]);

  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "75%" }}>
        <span>{temperature}°C</span>
        <div>
          <Wind />
          <span>{wind}</span>
        </div>
      </div>
      <div style={{ width: "25%" }}>
        <WeatherIcon weatherName={weather} />
      </div>
    </div>
  );
};
export default Weather;
