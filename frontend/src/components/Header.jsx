import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";

function Header() {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand>MERN VITE</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <>
                <NavDropdown id="username">
                  <NavDropdown.Item>Profile</NavDropdown.Item>

                  <NavDropdown.Item>Logout</NavDropdown.Item>
                </NavDropdown>
              </>
              <>
                <Nav.Link>
                  <FaSignInAlt /> Sign In
                </Nav.Link>

                <Nav.Link>
                  <FaSignOutAlt /> Sign Up
                </Nav.Link>
              </>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
