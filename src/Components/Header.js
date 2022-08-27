import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Navbar expand="lg" fixed="top">
        <Container>
          <Navbar.Brand>Okapikid</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="ml-auto">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
              <NavLink to="/about" className="nav-link">
                About Me
              </NavLink>
              <NavLink to="/accollades" className="nav-link">
                Accollades
              </NavLink>
              <NavLink to="/projects" className="nav-link">
                Projects
              </NavLink>
              <NavLink to="/contact" className="nav-link">
                Contact
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
