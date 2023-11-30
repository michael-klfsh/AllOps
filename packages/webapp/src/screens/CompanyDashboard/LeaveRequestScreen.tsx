import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from "reactstrap";
import { BsPlus } from "react-icons/bs";
import LeaveRequestList from "./components/LeaveRequestList";
import {
  ELeaveRequestStatus,
  ELeaveRequestType,
  LEAVE_REQUESTS,
  TLeaveRequest,
} from "../../assets/data/LeaveRequest";
import EmployeeLeaveCalendar from "./components/EmployeeLeaveCalendar";
import { FaFilter, FaSortAmountDown } from "react-icons/fa";

const INITIAL_STATE: TLeaveRequest = {
  id: 0,
  startDate: new Date(),
  endDate: new Date(),
  deletable: true,
  paid: true,
  type: ELeaveRequestType.VACATION,
  status: ELeaveRequestStatus.IN_PROGRESS,
};

const LeaveRequestScreen = () => {
  const [newRequestOpen, setNewRequestOpen] = useState<boolean>(false);
  const [newRequestOnEdit, setNewRequestOnEdit] =
    useState<TLeaveRequest>(INITIAL_STATE);
  const [newRequest, setNewRequest] = useState<TLeaveRequest | undefined>(
    undefined
  );
  const handleNewRequestOpen = () => {
    setNewRequestOpen(!newRequestOpen);
  };

  const formatDate = (date?: Date) =>
    date
      ? `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
      : `${new Date().getFullYear()}-${
          new Date().getMonth() + 1
        }-${new Date().getDate()}`;

  const resetForm = () => {
    setNewRequestOnEdit(INITIAL_STATE);
    setNewRequest(undefined);
    setNewRequestOpen(false);
  };

  useEffect(() => {
    resetForm();
  }, [newRequest]);

  const createNewRequest = () => {
    setNewRequest({
      ...newRequestOnEdit,
      id: LEAVE_REQUESTS.length + 1,
      deletable: true,
      status: ELeaveRequestStatus.IN_PROGRESS,
    });
  };

  return (
    <Container className={"p-sm-4"}>
      <Row className={"justify-content-center"}>
        <Col>
          <h2 className={"d-flex"}>
            My <span className={"text-primary"}>&nbsp; Leave Requests</span>
          </h2>
          <Button
            onClick={handleNewRequestOpen}
            className={"mb-3"}
            color={"primary"}
          >
            <BsPlus size={25} /> Request Leave
          </Button>
        </Col>
      </Row>

      <Modal isOpen={newRequestOpen}>
        <ModalHeader toggle={handleNewRequestOpen}>
          Create New Leave Request
        </ModalHeader>
        <ModalBody>
          <div className={"mb-3"}>
            You have <strong>6</strong> vacation days left for{" "}
            <strong>2023</strong>
          </div>
          <Form>
            <Row>
              <FormGroup>
                <Label for={"type"}>Leave Type</Label>
                <Input
                  id={"type"}
                  name={"type"}
                  type={"select"}
                  value={newRequestOnEdit.type.valueOf()}
                  onChange={(e) =>
                    setNewRequestOnEdit({
                      ...newRequestOnEdit,
                      type: e.target.value as ELeaveRequestType,
                    })
                  }
                >
                  {Object.keys(ELeaveRequestType).map((type) => (
                    // TODO
                    <option key={`option-${type}`}>{type}</option>
                  ))}
                </Input>
              </FormGroup>
            </Row>
            <Row>
              <Col>
                <FormGroup>
                  <Label for={"startDate"}>Start Date</Label>
                  <Input
                    min={formatDate()}
                    id="startDate"
                    type={"date"}
                    onChange={(e) =>
                      setNewRequestOnEdit({
                        ...newRequestOnEdit,
                        startDate: new Date(e.target.value),
                      })
                    }
                    value={formatDate(newRequestOnEdit.startDate)}
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for={"endDate"}>End Date</Label>
                  <Input
                    onChange={(e) =>
                      setNewRequestOnEdit({
                        ...newRequestOnEdit,
                        endDate: new Date(e.target.value),
                      })
                    }
                    min={formatDate(newRequestOnEdit.startDate)}
                    value={formatDate(newRequestOnEdit.endDate)}
                    id="endDate"
                    type={"date"}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row className={"ms-1"}>
              <FormGroup check>
                <Label check>Unpaid Leave</Label>
                <Input
                  onChange={(e) =>
                    setNewRequestOnEdit({
                      ...newRequestOnEdit,
                      paid: !e.target.value,
                    })
                  }
                  type={"checkbox"}
                />
              </FormGroup>
            </Row>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={handleNewRequestOpen}>
            Cancel
          </Button>{" "}
          <Button color="primary" onClick={createNewRequest}>
            Create Request
          </Button>
        </ModalFooter>
      </Modal>

      <Row className={"mt-5"}>
        <p>
          Here is an overview of all of your existing and outstanding Leave
          Requests.
          <br />
          <span className={"text-info fw-bold"}>Blue</span> indicates that your
          request is waiting for approval.
          <br />
          <span className={"text-success fw-bold"}>Green</span> indicates that
          your request has been approved.
          <br />
          <span className={"text-danger fw-bold"}>Red</span> indicates that your
          request has been denied.
          <br />
        </p>
        <Col>
          <Card>
            <EmployeeLeaveCalendar />
          </Card>
        </Col>
        <Col>
          <Row className={"justify-content-between"}>
            <Col>
              <Button className={"mb-3"}>
                <FaFilter />
                &nbsp; Filter
              </Button>
            </Col>
            <Col className={"m-0 col-auto"}>
              <Button className={"mb-3"}>
                <FaSortAmountDown />
                &nbsp; Filter
              </Button>
            </Col>
          </Row>

          <Card>
            <LeaveRequestList newRequest={newRequest} />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LeaveRequestScreen;
