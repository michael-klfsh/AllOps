import React from "react";
import { Container, Row } from "reactstrap";
import Statistics from "./components/Statistics";

const LeaveRequestStatisticsScreen = () => {
  return (
    <Container className={"p-sm-4"}>
      <h2>Leave Statistics</h2>
      <Row className={"my-5"}>
        <Statistics />
      </Row>
    </Container>
  );
};

export default LeaveRequestStatisticsScreen;
