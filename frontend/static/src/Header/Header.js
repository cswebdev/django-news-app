import { Navigate, NavLink } from "react-router-dom";
import { useNavigate, useOutletContext } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/esm/Button";
import Cookies from "js-cookie";

import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
   const navigate = useNavigate();

   // *********** Log Out Section ***********//
   const handleLogout = async () => {
      const response = await fetch("/dj-rest-auth/logout/", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": Cookies.get("csrftoken"),
         },
         body: "",
      });
      const data = await response.json();
      Cookies.remove("Authorization", `Token ${data.key}`);
      navigate("/login");
   };

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
               <Button variant="outline-dark" onClick={handleLogout}>
                  Log Out
               </Button>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   );
}

export default Header;
