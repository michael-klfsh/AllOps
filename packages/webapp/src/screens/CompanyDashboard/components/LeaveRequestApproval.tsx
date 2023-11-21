import React from "react";
import {
  ELeaveRequestStatus,
  ELeaveRequestType,
  LEAVE_REQUEST_FOR_APPROVAL,
  TLeaveRequestApproval,
} from "../../../assets/data/LeaveRequest";
import { Button, ListGroup, ListGroupItem } from "reactstrap";
import {
  FaBabyCarriage,
  FaBriefcaseMedical,
  FaCheck,
  FaHome,
  FaPlaneDeparture,
  FaTrash,
} from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const LeaveRequestApproval = () => {
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

  return (
    <ListGroup>
      {LEAVE_REQUEST_FOR_APPROVAL.map((request) => (
        <ListGroupItem key={`${request.id}`} color={"info"}>
          <ListGroup horizontal>
            <ListGroupItem>{getLeaveIcon(request.type)}</ListGroupItem>
            <ListGroupItem>{request.requester}</ListGroupItem>
            <ListGroupItem>
              {request.startDate.toLocaleDateString()}
            </ListGroupItem>
            <ListGroupItem>
              {request.endDate.toLocaleDateString()}
            </ListGroupItem>
            <ListGroupItem>
              {request.paid ? "Paid Leave" : "Unpaid Leave"}
            </ListGroupItem>
            <ListGroupItem>
              <FaX />
            </ListGroupItem>
            <ListGroupItem>
              <FaCheck />
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default LeaveRequestApproval;
