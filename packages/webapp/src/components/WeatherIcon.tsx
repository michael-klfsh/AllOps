import React from "react";
import Sun from "../../assets/img/brightness-high.svg";
import Rain from "../../assets/img/cloud-rain.svg";
import Cloud from "../../assets/img/cloudy.svg";
import Snow from "../../assets/img/cloud-snow.svg";

const WeatherIcon = ({ weatherName }: { weatherName: string }) => {
  const weather = weatherName;

  switch (weather) {
    case "Sun":
      return <Sun />;
    case "Rain":
      return <Rain />;
    case "Cloud":
      return <Cloud />;
    case "Snow":
      return <Snow />;
    default:
      return null;
  }
};

export default WeatherIcon;
