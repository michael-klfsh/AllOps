import React from "react";
import AppLayout from "../components/AppLayout";
import Weather from "../components/Weather";
import { Card, CardBody, Row, Col, Container } from "reactstrap";
import Email from "../components/Email";
import Calendar from "../components/Calendar";

const DailyDashboard = () => (
  <AppLayout>
    <Container>
      <Row className="mb-2">
        <Col xs="8">
          <Card className="mb-2" style={{ height: "calc(50% - 0.25rem)" }}>
            <CardBody style={{ textAlign: "center", padding: "10px 10px" }}>
              <h3>Good day and welcome to your Daily Dashboard! 🌟</h3>
            </CardBody>
          </Card>

          <Card style={{ height: "calc(50% - 0.25rem)" }}>
            <CardBody style={{ textAlign: "center" }}>
              <Email />
            </CardBody>
          </Card>
        </Col>
        <Col xs="4">
          <Card style={{ height: "100%" }}>
            <CardBody>
              <Weather />
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xs="6">
          <Card>
            <CardBody>
              <Calendar />
            </CardBody>
          </Card>
        </Col>

        <Col xs="6">
          <Card>
            <CardBody></CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  </AppLayout>
);
export default DailyDashboard;
