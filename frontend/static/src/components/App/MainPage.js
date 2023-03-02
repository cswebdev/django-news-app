import "./App";
import "../styles/MainPage.css";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useNavigate, useOutletContext } from "react-router-dom";

import Cookies from "js-cookie";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Articles/WriterPortal";

function MainPage({ setPage }) {
   const navigate = useNavigate();
   return (
      // ********************
      //        nav bar
      // ********************
      <>
         <Navbar bg="light" expand="md">
            <Container>
               <Navbar.Brand href="#home">Upstate News</Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                     <Nav.Link href="#home">Home</Nav.Link>
                     <Nav.Link href="#link">Link</Nav.Link>
                     <NavLink to="/portal">Writer Portal</NavLink>
                  </Nav>
                  <Button variant="outline-dark">Log Out</Button>
               </Navbar.Collapse>
            </Container>
         </Navbar>
         {/*//
         /
         //******* Body *******/}

         <div className="container px-5 py-5" id="featured">
            <h2 className="pb-2 border-bottom">Featured Articles</h2>
            <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
               <Card className="featured col p-2 ">
                  <Card.Img src="https://source.unsplash.com/random/300x300?mountains/" />
                  <Card.ImgOverlay>
                     <Card.Title className="text-center text-light">
                        Title
                     </Card.Title>
                     <Card.Text className="text-center text-light">
                        Body
                     </Card.Text>
                  </Card.ImgOverlay>
               </Card>
               {/* <Card className="featured col" onClick={handleClick}> */}
               <Card className="featured col p-2 ">
                  <Card.Img src="https://source.unsplash.com/random/300x300?painting/" />
                  <Card.ImgOverlay>
                     <Card.Title className="text-center text-light">
                        Title
                     </Card.Title>
                     <Card.Text className="text-center text-light">
                        Body
                     </Card.Text>
                  </Card.ImgOverlay>
               </Card>
               <Card className="featured col p-2 ">
                  <Card.Img src="https://source.unsplash.com/random/300x300?roads/" />
                  <Card.ImgOverlay>
                     <Card.Title className="text-center text-light">
                        Title
                     </Card.Title>
                     <Card.Text className="text-center text-light">
                        Body
                     </Card.Text>
                  </Card.ImgOverlay>
               </Card>
            </div>
         </div>
      </>
   );
}

export default MainPage;
