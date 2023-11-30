import React from "react";
import { Link, Outlet } from "react-router-dom";
import {
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
} from "reactstrap";
import { MdDashboard } from "react-icons/md";
import { TbMoneybag } from "react-icons/tb";
import { FaBell, FaHome, FaUserCircle } from "react-icons/fa";

import "../assets/style/AppLayout.css";
import { FaGear } from "react-icons/fa6";
import { BsBoxArrowRight } from "react-icons/bs"; // Ensure this CSS file exists in your project

const AppLayout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <main className="app-layout">
      <div className="sidebar">
        <Nav navbar vertical>
          <div>
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
          </div>
          <UncontrolledDropdown direction={"down"} className={"auth-link"}>
            <DropdownToggle caret className={"fw-bold"}>
              <FaUserCircle size={16} /> Rosan Zheng
            </DropdownToggle>
            <DropdownMenu flip>
              <DropdownItem>
                <FaBell /> Notifications
              </DropdownItem>
              <DropdownItem>
                <FaGear /> Account Settings
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                <BsBoxArrowRight /> Logout
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
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
