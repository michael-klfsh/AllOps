import React from "react";
import { Row, Col } from "reactstrap";
import LeaveRequestApproval from "./LeaveRequestApproval";
import TeamAbsenceCalendar from "./TeamAbsenceCalendar";

const ManagerComponents = () => (
  <Row className={"my-5"}>
    <Col className={"w-50"}>
      <TeamAbsenceCalendar />
    </Col>
    <Col className={"w-50"}>
      <h5>Employee Requests</h5>
      <LeaveRequestApproval />
    </Col>
  </Row>
);

export default ManagerComponents;
