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

  const APIKey = process.env.WEATHER_KEY;

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (response) => {
        setLon(response.coords.longitude);
        setLat(response.coords.latitude);
      },
      (error) => console.error(error)
    );

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}`
    )
      .then((response) => response.json())
      .then((json) => {
        setWeather(json.weather[0].main);
        setTemperature(Math.floor(json.main.temp - 273.15));
        setWind(json.wind.speed);
      })
      .catch((error) => console.error(error));
  }, [lat, lon]);

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
