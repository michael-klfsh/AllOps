import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import {
  ELeaveRequestStatus,
  ELeaveRequestType,
  LEAVE_REQUESTS,
} from "../../../assets/data/LeaveRequest"; // a plugin!

const EmployeeLeaveCalendar = () => {
  const getEventBackgroundColor = (status: ELeaveRequestStatus) => {
    switch (status) {
      case ELeaveRequestStatus.APPROVED:
        return "#198754";
      case ELeaveRequestStatus.DECLINED:
        return "#dc3545";
      default:
        return "#0dcaf0";
    }
  };

  const getEventName = (type: ELeaveRequestType) => {
    switch (type) {
      case ELeaveRequestType.PATERNAL_LEAVE:
        return "Paternal Leave";
      case ELeaveRequestType.VACATION:
        return "Vacation";
      case ELeaveRequestType.HOME_OFFICE:
        return "Home Office";
      default:
        return "Sick Leave";
    }
  };

  const generateData = () => {
    return LEAVE_REQUESTS.map((request) => ({
      id: request.id.toString(),
      allDay: true,
      start: request.startDate,
      end: request.endDate,
      backgroundColor: getEventBackgroundColor(request.status),
      title: getEventName(request.type),
      description: request.paid ? "Paid Leave" : "Unpaid Leave",
    }));
  };

  const data = generateData();

  return (
    <>
      <h5>My Leaves</h5>
      <FullCalendar
        editable={false}
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={data}
        selectable
        weekends={false}
      />
    </>
  );
};

export default EmployeeLeaveCalendar;
