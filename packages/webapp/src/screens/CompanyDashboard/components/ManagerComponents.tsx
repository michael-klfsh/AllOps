import React from "react";
import { Row, Col } from "reactstrap";
import LeaveRequestApproval from "./LeaveRequestApproval";
import TeamAbsenceCalendar from "./TeamAbsenceCalendar";

const ManagerComponents = () => (
  <Row className={"my-5"}>
    <p>
      To help you manage your team's absence, the calendar on the left indicates
      all employees that are <span className={"fw-bold"}>on leave</span>, so
      that you can check easily for any conflicts.
      <br />
      All leave requests that are affected by any conflicts are marked{" "}
      <span className={"fw-bold"}>yellow</span>.
    </p>
    <Col className={"w-50"}>
      <TeamAbsenceCalendar />
    </Col>
    <Col className={"w-50"}>
      <LeaveRequestApproval />
    </Col>
  </Row>
);

export default ManagerComponents;
