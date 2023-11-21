import React, { useState } from "react";
import Wind from "../../assets/img/wind.svg";
import WeatherIcon from "./WeatherIcon";

const Email = ({ children }: { children?: React.ReactNode }) => {
  //Variable
  const emails = 15;

  return <h5>Today's inbox update: You've received {emails} new emails!</h5>;
};
export default Email;
