import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
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
import ManagerComponents from "./components/ManagerComponents";

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
  const [isManager, setIsManager] = useState<boolean>(true);

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
    console.log(newRequest);
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
      <Button color={"primary"} onClick={() => setIsManager(!isManager)}>
        {isManager ? "Get Employee View" : "Get Manager View"}
      </Button>
      <h2>Leave Request Service</h2>
      <Modal isOpen={newRequestOpen}>
        <ModalHeader toggle={handleNewRequestOpen}>
          Create New Leave Request
        </ModalHeader>
        <ModalBody>
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
      <Button onClick={handleNewRequestOpen} className={"mb-3"}>
        <BsPlus size={25} /> Request Leave
      </Button>
      <Row className={"mb-3"}>
        <Card>
          <CardTitle>Leave Request Statistics</CardTitle>
          <CardBody>Some Charts</CardBody>
        </Card>
      </Row>
      <Row>
        <Col>Calendar</Col>
        <Col>
          <h5>My Requests</h5>
          <Button className={"mb-3"}>Filter</Button>
          <Card>
            <LeaveRequestList newRequest={newRequest} />
          </Card>
        </Col>
      </Row>
      {isManager ? <ManagerComponents /> : ""}
    </Container>
  );
};

export default LeaveRequestScreen;
