import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";

const AppLayout = ({ children }: { children?: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className={"mb-5"}>
      <Navbar container="fluid" expand="md" color={"light"}>
        <NavbarBrand href={"/"}>AllOps</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav>
            <NavItem>
              <NavLink tag={Link} to={"nested"}>
                nested
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink tag={Link} to={"404"}>
                Not found
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to={"daily"}>
                Daily
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <main className="p-3 pt-5">
        <div>
          <div className="container">
            {children}
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
};
export default AppLayout;
