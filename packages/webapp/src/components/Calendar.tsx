import React from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";

const Calendar = ({ children }: { children?: React.ReactNode }) => {
  //Variable

  const data = [
    {
      title: "BCH237",
      start: "2023-11-15T10:30:00",
      end: "2023-11-15T11:30:00",
      extendedProps: {
        department: "BioChemistry",
      },
      description: "Lecture",
    },
  ];

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
