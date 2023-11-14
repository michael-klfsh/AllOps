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
  NavbarText,
  Button
} from "reactstrap";

const AppLayout = ({ children }: { children?: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [logedin, setLogedIn] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const toggleLogin = () => setLogedIn(!logedin);

  const name = "Michael";

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
          </Nav>
        </Collapse>
        {logedin && name ? (
          <NavbarText className={"me-2"}>
            {name}
          </NavbarText>
        ) : null}
        <Button outline size="md" onClick={toggleLogin}>
            {logedin ? "Logout " : "Login"}
        </Button>
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
