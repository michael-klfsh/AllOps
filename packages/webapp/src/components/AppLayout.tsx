import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Nav, NavItem, NavLink } from "reactstrap";
import { MdDashboard } from "react-icons/md";
import { TbMoneybag } from "react-icons/tb";
import { FaHome } from "react-icons/fa";
import { SlClock } from "react-icons/sl";

import "../assets/style/AppLayout.css"; // Ensure this CSS file exists in your project

const AppLayout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <main className="app-layout">
      <div className="sidebar">
        <Nav navbar vertical>
          <NavItem>
            <NavLink tag={Link} to="/">
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
            <NavLink tag={Link} to="/time-leave">
              <SlClock /> Time & Leave
            </NavLink>
          </NavItem>
        </Nav>
      </div>
      <div className="content">
        {children}
        <Outlet />
      </div>
    </main>
  );
};

export default AppLayout;
