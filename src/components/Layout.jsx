import { NavLink, Outlet } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function Layout() {
  return (
    <>
      {/* Top primary navigation bar */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            Chill & Roll BJJ Club
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="main-navbar" />

          <Navbar.Collapse id="main-navbar">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={NavLink} to="/schedule">
                Schedule
              </Nav.Link>
              <Nav.Link as={NavLink} to="/membership">
                Membership
              </Nav.Link>
              <Nav.Link as={NavLink} to="/coaches">
                Coaches
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main page content area */}
      <Container className="mt-4">
        <Outlet />
      </Container>
    </>
  );
}
