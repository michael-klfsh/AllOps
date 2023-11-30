import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Nav, NavItem, NavLink } from "reactstrap";
import { MdDashboard } from "react-icons/md";
import { TbMoneybag } from "react-icons/tb";
import { FaHome } from "react-icons/fa";
import { FaBusinessTime } from "react-icons/fa";

import "./AppLayout.css"; // Ensure this CSS file exists in your project

const AppLayout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="app-layout">
      <div className="sidebar">
        <Nav navbar vertical>
          <NavItem>
            <NavLink tag={Link} to="/home">
              <FaHome /> Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/dashboard">
              <MdDashboard /> Dashboard
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/finance">
              <TbMoneybag /> Finance
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/timestamp">
              <FaBusinessTime /> Timestamp
            </NavLink>
          </NavItem>
        </Nav>
      </div>
      <main className="content">
        {children}
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
