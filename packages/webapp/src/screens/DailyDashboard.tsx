import React from "react";
import AppLayout from "../components/AppLayout";
import Weather from "../components/Weather";
import { Card, CardBody, Row, Col, Container } from "reactstrap";

const DailyDashboard = () => (
  <AppLayout>
    <Container>
      <Row className="mb-2">
        <Col xs="8">
          <Card className="mb-1" style={{ height: "calc(50% - 0.25rem)" }}>
            <CardBody></CardBody>
          </Card>

          <Card className="mt-1" style={{ height: "calc(50% - 0.25rem)" }}>
            <CardBody></CardBody>
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
          <Card>
            <CardBody></CardBody>
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
