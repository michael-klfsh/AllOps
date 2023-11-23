import React, { useState } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import "../../../assets/style/FinanceNavBar.css";

const DashboardNavBar = () => {
  // State to keep track of the active NavItem
  const [activeItem, setActiveItem] = useState("");

  // Function to handle NavItem click
  const handleItemClick = (item: string) => {
    setActiveItem(item);
    getNavItemStyle(item);
  };

  // Function to determine the background color of a NavItem
  const getNavItemStyle = (item: string) => {
    return activeItem === item
      ? {
          /* TODO backgroundColor: 'white'*/
        }
      : {};
  };

  return (
    <Nav className="horizontal-navbar">
      <NavItem
        style={getNavItemStyle("form-spendings")}
        onClick={() => handleItemClick("form-spendings")}
      >
        <NavLink tag={Link} to="/leave-requests">
          Leave Requests
        </NavLink>
      </NavItem>
      <NavItem
        style={getNavItemStyle("leave-management")}
        onClick={() => handleItemClick("leave-management")}
      >
        <NavLink tag={Link} to="/leave-management">
          Manage Team Leave
        </NavLink>
      </NavItem>
      <NavItem
        style={getNavItemStyle("leave-requests")}
        onClick={() => handleItemClick("leave-requests")}
      >
        <NavLink tag={Link} to="/leave-statistics">
          Leave Statistics
        </NavLink>
      </NavItem>
    </Nav>
  );
};

export default DashboardNavBar;
