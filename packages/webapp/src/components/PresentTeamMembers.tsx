import React from "react";
import {
  Button,
  CardTitle,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
} from "reactstrap";
import { Avatar } from "@mui/material";
import { FaPaperPlane } from "react-icons/fa";
import useModalMessage from "./ModalMessage";

interface IEmployeeAvailability {
  name: string;
  availability: "online" | "afk" | "offline";
  location?: "remote" | "onSite" | "vacation";
}

const data: IEmployeeAvailability[] = [
  {
    name: "Michael Kleefisch",
    availability: "online",
    location: "onSite",
  },
  {
    name: "Aghiles Gasselin",
    availability: "afk",
    location: "remote",
  },
  {
    name: "Sam Smith",
    availability: "offline",
  },
];
const PresentTeamMembers = () => {
  const modalMessage = useModalMessage({});
  const getColor = (availability: string) => {
    switch (availability) {
      case "online":
        return "success";
      case "afk":
        return "warning";
      default:
        return "secondary";
    }
  };

  const getLocation = (location?: string) => {
    switch (location) {
      case "remote":
        return "🏠";
      case "vacation":
        return "🛫";
      case "onSite":
        return "🏢";
      default:
        return "❓";
    }
  };
  return (
    <div>
      <CardTitle tag={"h3"}>My Team Members</CardTitle>
      {modalMessage.markup}
      <ListGroup>
        {data.map((item, index) => (
          <ListGroupItem key={`${index}`} color={getColor(item.availability)}>
            <div className={"d-flex justify-content-between"}>
              <ListGroupItemHeading className={"d-flex align-items-center"}>
                <Avatar>{item.name.charAt(0)}</Avatar>&nbsp;{item.name}
              </ListGroupItemHeading>
              <Button color={"primary"} onClick={() => modalMessage.open(true)}>
                <FaPaperPlane />
                &nbsp;Message
              </Button>
            </div>
            Status: {item.availability} | Working from{" "}
            {getLocation(item.location)}
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
};

export default PresentTeamMembers;
