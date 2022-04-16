import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import CustomLink from "../../CustomLink/CustomLink";
import logo from "../../images/logo.jpg";
const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="dark">
        <Container>
          <Navbar.Brand as={CustomLink} to="/">
            <img src={logo} height="40px" className="border rounded" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ms-5">
              <Nav.Link className="text-primary" as={CustomLink} to="/">
                Home
              </Nav.Link>
              <Nav.Link className="text-primary" as={CustomLink} to="/blogs">
                Blogs
              </Nav.Link>
              <Nav.Link className="text-primary" as={CustomLink} to="/about">
                About
              </Nav.Link>
            </Nav>
            <Nav className="bg-warning  fw-bold border-0 rounded-pill px-3">
              <Nav.Link
                className="text-primary"
                eventKey={2}
                as={Link}
                to="/login"
              >
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Outlet />
    </div>
  );
};

export default Header;