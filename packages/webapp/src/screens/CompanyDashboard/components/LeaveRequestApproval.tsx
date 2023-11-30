import React, { useState } from "react";
import {
  ELeaveRequestType,
  LEAVE_REQUEST_FOR_APPROVAL,
  TLeaveRequestApproval,
} from "../../../assets/data/LeaveRequest";
import { ListGroup, ListGroupItem } from "reactstrap";
import {
  FaBabyCarriage,
  FaBriefcaseMedical,
  FaCheck,
  FaHome,
  FaPlaneDeparture,
} from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { toast } from "react-toastify";

const LeaveRequestApproval = () => {
  const [outForApproval, setOutForApproval] = useState<TLeaveRequestApproval[]>(
    LEAVE_REQUEST_FOR_APPROVAL
  );

  const handleRequestForToast = (id: number, approved: boolean) => {
    const request = outForApproval.find((r) => r.id == id);
    if (request) {
      toast.success(
        `${request.requester}'s leave request was ${
          approved ? "approved" : "denied"
        }.`
      );

      removeOutstandingRequest(id);
    }
  };
  const removeOutstandingRequest = (id: number) => {
    setOutForApproval([...outForApproval.filter((r) => r.id != id)]);
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

  const computeAmountOfDays = (start: Date, end: Date) => {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const startDate = Date.UTC(
      start.getFullYear(),
      start.getMonth(),
      start.getDate()
    );
    const endDate = Date.UTC(end.getFullYear(), end.getMonth(), end.getDate());

    return Math.round((endDate - startDate + oneDay) / oneDay);
  };

  return (
    <>
      {outForApproval.length >= 1 ? (
        <ListGroup>
          {outForApproval.map((request) => (
            <ListGroupItem
              key={`${request.id}`}
              color={`${request.conflict ? "warning" : "info"}`}
            >
              <ListGroup key={`${request.id}`} horizontal>
                <ListGroupItem>{getLeaveIcon(request.type)}</ListGroupItem>
                <ListGroupItem>{request.requester}</ListGroupItem>
                <ListGroupItem>
                  {request.startDate.toLocaleDateString()} –{" "}
                  {request.endDate.toLocaleDateString()}
                </ListGroupItem>
                <ListGroupItem>
                  {computeAmountOfDays(request.startDate, request.endDate)}{" "}
                  day(s)
                </ListGroupItem>
                <ListGroupItem>
                  {request.paid ? "Paid Leave" : "Unpaid Leave"}
                </ListGroupItem>
                <ListGroupItem
                  color={"danger"}
                  tag={"button"}
                  onClick={() => handleRequestForToast(request.id, false)}
                >
                  <FaX />
                </ListGroupItem>
                <ListGroupItem
                  color={"success"}
                  tag={"button"}
                  onClick={() => handleRequestForToast(request.id, true)}
                >
                  <FaCheck />
                </ListGroupItem>
              </ListGroup>
            </ListGroupItem>
          ))}
        </ListGroup>
      ) : (
        <div className={"mt-3 fs-6"}>
          No open leave requests waiting for approval. :-)
        </div>
      )}
    </>
  );
};

export default LeaveRequestApproval;
