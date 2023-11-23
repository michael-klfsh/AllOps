import React from "react";
import { Container, Row } from "reactstrap";
import ManagerComponents from "./components/ManagerComponents";

const LeaveRequestManagementScreen = () => {
  return (
    <Container>
      <h2>Manage Team Requests</h2>
      <Row className={"my-5"}>
        <ManagerComponents />
      </Row>
    </Container>
  );
};

export default LeaveRequestManagementScreen;
