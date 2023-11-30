import React from "react";
import { Container, Row } from "reactstrap";
import ManagerComponents from "./components/ManagerComponents";

const LeaveRequestManagementScreen = () => {
  return (
    <Container className={"p-sm-4"}>
      <h2>Manage Team Requests</h2>
      <Row className={"my-5"}>
        <ManagerComponents />
      </Row>
    </Container>
  );
};

export default LeaveRequestManagementScreen;
