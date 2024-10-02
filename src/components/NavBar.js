import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/logo-thing.png";
import { useContext } from "react";
import { CurrentUserContext } from "../App";

function Navigation() {
  const currentUser = useContext(CurrentUserContext);


  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <img src={logo} alt="logo" height="45px" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {currentUser ? (
              <>
                <Nav.Link href="#home">
                  <i class="fa-solid fa-house"></i>Home
                </Nav.Link>
                <NavDropdown title={`Welcome, ${currentUser.username}`} id="basic-nav-dropdown">
                  {/* Add your dropdown items here */}
                </NavDropdown>
                <Nav.Link href="#link">
                  <i class="fa-solid fa-link"></i>Link
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link href="#home">
                  <i class="fa-solid fa-house"></i>Home
                </Nav.Link>
                <Nav.Link href="#link">
                  <i class="fa-solid fa-link"></i>Link
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
