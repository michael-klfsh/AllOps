import React from "react";
import { Container, Row } from "reactstrap";

const NotFoundPage = () => (
  <Container className={"h-100"}>
    <Row className={"align-items-center justify-content-center h-100"}>
      <h1 className={"text-center"}>
        :-( <br />
        Sorry, but this page does not exist!
      </h1>
    </Row>
  </Container>
);
export default NotFoundPage;
