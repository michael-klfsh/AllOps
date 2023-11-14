import React, { useState } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import "./FinanceNavBar.css";

const MyNavbar = () => {
  // State to keep track of the active NavItem
  const [activeItem, setActiveItem] = useState(null);

  // Function to handle NavItem click
  const handleItemClick = (item: any) => {
    console.log("Hello");
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
        <NavLink tag={Link} to="/form-spendings">
          Form Spendings
        </NavLink>
      </NavItem>
      <NavItem
        style={getNavItemStyle("spendings-statistics")}
        onClick={() => handleItemClick("spendings-statistics")}
      >
        <NavLink tag={Link} to="/spendings-statistics">
          Spendings Statistics
        </NavLink>
      </NavItem>
      <NavItem
        style={getNavItemStyle("form-materials")}
        onClick={() => handleItemClick("form-materials")}
      >
        <NavLink tag={Link} to="/form-materials">
          Form Materials
        </NavLink>
      </NavItem>
      <NavItem
        style={getNavItemStyle("requests-recap")}
        onClick={() => handleItemClick("requests-recap")}
      >
        <NavLink tag={Link} to="/requests-recap">
          Requests Recap
        </NavLink>
      </NavItem>
      <NavItem
        style={getNavItemStyle("compagny-income")}
        onClick={() => handleItemClick("compagny-income")}
      >
        <NavLink tag={Link} to="/compagny-income">
          Compagny Income
        </NavLink>
      </NavItem>
    </Nav>
  );
};

export default MyNavbar;
