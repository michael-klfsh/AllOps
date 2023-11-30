import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import {
  APPROVED_LEAVE_REQUEST,
  ELeaveRequestType,
} from "../../../assets/data/LeaveRequest";
import { Card, CardBody } from "reactstrap";

const TeamAbseneCalendar = () => {
  const getEventBackgroundColor = (type: ELeaveRequestType) => {
    //"#2c3e50"
    return type === ELeaveRequestType.HOME_OFFICE ? "grey" : "";
  };

  const generateData = () => {
    return APPROVED_LEAVE_REQUEST.map((request) => ({
      id: request.id.toString(),
      allDay: true,
      start: request.startDate,
      end: request.endDate,
      backgroundColor: getEventBackgroundColor(request.type),
      title: `${
        request.type === ELeaveRequestType.HOME_OFFICE ? "Home Office | " : ""
      }${request.requester}`,
      description: request.paid ? "Paid Leave" : "Unpaid Leave",
    }));
  };

  const data = generateData();

  return (
    <Card>
      <CardBody>
        <FullCalendar
          editable={false}
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={data}
          selectable
          weekends={false}
        />
      </CardBody>
    </Card>
  );
};

export default TeamAbseneCalendar;
