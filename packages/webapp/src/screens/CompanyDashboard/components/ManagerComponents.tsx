import React from "react";
import { Row, Col } from "reactstrap";
import LeaveRequestApproval from "./LeaveRequestApproval";

const ManagerComponents = () => (
  <Row>
    <Col>
      <h5>Admin Overview Calendar</h5>
    </Col>
    <Col>
      <h5>Employee Requests</h5>
      <LeaveRequestApproval />
    </Col>
  </Row>
);

export default ManagerComponents;
