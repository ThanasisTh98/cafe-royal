import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Navigation: React.FC = () => {
  return (
    <Navbar expand="lg" className="navbar-custom" fixed="top">
      <Container fluid className="px-4">
        <LinkContainer to="/">
          <Navbar.Brand className="d-flex align-items-center">
            <img 
              src="/images/white-logo-red-bg.svg " 
              alt="Cafe Royal Logo" 
              className="navbar-logo me-2"
            />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-nav-pills bg-white rounded-pill p-1">
            <LinkContainer to="/">
              <Nav.Link className="nav-pill">Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/menu">
              <Nav.Link className="nav-pill">Menu</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link className="nav-pill">About Us</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/jobs">
              <Nav.Link className="nav-pill">Jobs</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;