import React, { useState } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import "../assets/style/FinanceNavBar.css";

// TODO Delete?
const CompanyDashboardNavbar = () => {
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
        style={getNavItemStyle("working-hours")}
        onClick={() => handleItemClick("working-hours")}
      >
        <NavLink tag={Link} to="/working-hours">
          Working Hours
        </NavLink>
      </NavItem>
      <NavItem
        style={getNavItemStyle("leave-request")}
        onClick={() => handleItemClick("leave-request")}
      >
        <NavLink tag={Link} to="/leave-request">
          Leave Request
        </NavLink>
      </NavItem>
    </Nav>
  );
};

export default CompanyDashboardNavbar;
