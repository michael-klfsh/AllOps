import React from "react";
import Weather from "../components/Weather";
import { Card, CardBody, Row, Col, Container } from "reactstrap";
import Email from "../components/Email";
import Calendar from "../components/Calendar";
import Task from "../components/Task";
import PresentTeamMembers from "../components/PresentTeamMembers";

const DailyDashboard = () => (
  <Container className={"p-sm-4"}>
    <h1>
      Good day and
      <span className={"text-primary"}>
        <strong>&nbsp;Welcome</strong>
      </span>
      ! 🌟
    </h1>
    <h4>
      You arrived at the office today at{" "}
      <span className={"fw-bold"}>08:42 AM</span>
    </h4>
    <Row className="my-5 h-100 ">
      <Col xs="8">
        <Card className={"h-100 text-center d-flex"}>
          <CardBody
            className={"align-items-center d-flex justify-content-center"}
          >
            <Email />
          </CardBody>
        </Card>
      </Col>
      <Col xs="4">
        <Card>
          <CardBody>
            <Weather />
          </CardBody>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col xs="6">
        <Row className={"mb-3"}>
          <Card>
            <CardBody>
              <Calendar />
            </CardBody>
          </Card>
        </Row>
        <Row>
          <Card>
            <CardBody>
              <PresentTeamMembers />
            </CardBody>
          </Card>
        </Row>
      </Col>

      <Col xs="6">
        <Card>
          <CardBody>
            <Task />
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
);
export default DailyDashboard;
