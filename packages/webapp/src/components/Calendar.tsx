import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";

const Calendar = ({ children }: { children?: React.ReactNode }) => {
  //Variable
  const baseURL = "http://127.0.0.1:3001";
  const [data, setData] = useState([]);

  const workSpec = [
    {
      daysOfWeek: [1, 2, 3, 4],
      startTime: "06:00",
      endTime: "18:00",
    },
  ];

  const workMin = workSpec
    .map((item) => item.startTime)
    .sort()
    .shift();
  const workMax = workSpec
    .map((item) => item.endTime)
    .sort()
    .pop();
  const workDays = [...new Set(workSpec.flatMap((item) => item.daysOfWeek))];
  const hideDays = [...Array(7).keys()].filter(
    (day) => !workDays.includes(day),
  );

  useEffect(() => {
    fetch(`${baseURL}/calendar`, {
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <FullCalendar
      plugins={[timeGridPlugin]}
      initialView="timeGridDay"
      selectable={false}
      editable={false}
      locale="en"
      businessHours={workSpec}
      slotMinTime={workMin}
      slotMaxTime={workMax}
      hiddenDays={hideDays}
      events={data}
    />
  );
};
export default Calendar;
