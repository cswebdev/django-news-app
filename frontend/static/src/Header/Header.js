import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/esm/Button";

import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
   return (
      <Navbar bg="light" expand="md">
         <Container>
            <Navbar.Brand href="#home">Upstate News</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="me-auto">
                  <NavLink to="/home">Home</NavLink>
                  <Nav.Link href="#link">Link</Nav.Link>
                  <NavLink to="/portal">Writer Portal</NavLink>
               </Nav>
               <Button variant="outline-dark">Log Out</Button>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   );
}

export default Header;
