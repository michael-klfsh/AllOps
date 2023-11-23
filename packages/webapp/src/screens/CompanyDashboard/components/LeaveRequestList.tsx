import React, { useState, useEffect } from "react";
import {
  ELeaveRequestStatus,
  ELeaveRequestType,
  LEAVE_REQUESTS,
  TLeaveRequest,
} from "../../../assets/data/LeaveRequest";
import {
  Button,
  ListGroup,
  ListGroupItem,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import {
  FaBabyCarriage,
  FaBriefcaseMedical,
  FaHome,
  FaPlaneDeparture,
  FaTrash,
} from "react-icons/fa";

const LeaveRequestList = ({
  newRequest = undefined,
}: {
  newRequest: TLeaveRequest | undefined;
}) => {
  const [leaveRequests, setLeaveRequests] =
    useState<TLeaveRequest[]>(LEAVE_REQUESTS);

  const [selectedRequest, setSelectedRequest] = useState<number>(0);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (newRequest) {
      const newLeaveRequests = [...leaveRequests, newRequest];
      setLeaveRequests([...newLeaveRequests]);
    }
  }, [newRequest]);

  const handleConfirm = () => {
    const leaves = leaveRequests.filter((r) => r.id != selectedRequest);
    setLeaveRequests([...leaves]);
    handleClose();
  };

  const selectRequest = (id: number) => {
    setSelectedRequest(id);
    setIsOpen(true);
  };

  const getLeaveIcon = (leaveType: ELeaveRequestType) => {
    switch (leaveType) {
      case ELeaveRequestType.HOME_OFFICE:
        return <FaHome />;
      case ELeaveRequestType.PATERNAL_LEAVE:
        return <FaBabyCarriage />;
      case ELeaveRequestType.VACATION:
        return <FaPlaneDeparture />;
      default:
        return <FaBriefcaseMedical />;
    }
  };

  const getLeaveColor = (leaveStatus: ELeaveRequestStatus) => {
    switch (leaveStatus) {
      case ELeaveRequestStatus.APPROVED:
        return "success";
      case ELeaveRequestStatus.DECLINED:
        return "danger";
      default:
        return "info";
    }
  };

  const computeAmountOfDays = (start: Date, end: Date) => {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const startDate = Date.UTC(
      start.getFullYear(),
      start.getMonth(),
      start.getDate(),
    );
    const endDate = Date.UTC(end.getFullYear(), end.getMonth(), end.getDate());

    return Math.round((endDate - startDate + oneDay) / oneDay);
  };
  return (
    <>
      <Modal isOpen={isOpen} toggle={handleClose}>
        <ModalHeader toggle={handleClose}>Confirm Deletion</ModalHeader>
        <ModalBody>
          Are you sure that you want to delete the selected item(s) permanently?
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={handleClose}>
            Cancel
          </Button>{" "}
          <Button color="primary" onClick={handleConfirm}>
            Delete Entry
          </Button>
        </ModalFooter>
      </Modal>
      <ListGroup>
        {leaveRequests.map((request) => (
          <ListGroupItem key={request.id} color={getLeaveColor(request.status)}>
            <ListGroup className={"w-100"} horizontal>
              <ListGroupItem>{getLeaveIcon(request.type)}</ListGroupItem>
              <ListGroupItem>
                {request.startDate.toLocaleDateString()} –{" "}
                {request.endDate.toLocaleDateString()}
              </ListGroupItem>
              <ListGroupItem>
                {computeAmountOfDays(request.startDate, request.endDate)} day(s)
              </ListGroupItem>
              <ListGroupItem>
                {request.paid ? "Paid Leave" : "Unpaid Leave"}
              </ListGroupItem>
              {request.deletable ? (
                <ListGroupItem onClick={() => selectRequest(request.id)}>
                  <FaTrash />
                </ListGroupItem>
              ) : (
                ""
              )}
            </ListGroup>
          </ListGroupItem>
        ))}
      </ListGroup>
    </>
  );
};

export default LeaveRequestList;
