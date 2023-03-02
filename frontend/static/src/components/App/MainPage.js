import "./App";
import "../styles/MainPage.css";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useNavigate, useOutletContext } from "react-router-dom";
import Cookies from "js-cookie";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
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
         {/*//
         /
         //******* Body *******/}

         <div className="container px-5 py-5" id="featured">
            <h3 className="pb-4  border-bottom text-start">
               Featured Articles
            </h3>
            <div className="row g-5 py-3 row-cols-1 m-1 row-cols-lg-4 justify-content-lg-center">
               <Card className="featured col p-1 ">
                  <Card.Img src="https://source.unsplash.com/random/200x200?mountains/" />
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
               <Card className="featured col p-1 me-3 ms-3">
                  <Card.Img src="https://source.unsplash.com/random/200x200?painting/" />
                  <Card.ImgOverlay>
                     <Card.Title className="text-center text-light">
                        Title
                     </Card.Title>
                     <Card.Text className="text-center text-light">
                        Body
                     </Card.Text>
                  </Card.ImgOverlay>
               </Card>
               <Card className="featured col p-1 ">
                  <Card.Img src="https://source.unsplash.com/random/200x200?roads/" />
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
         <hr />
         <Container className="my-5 " style={{ width: "50%" }}>
            <div className="row">
               <div className="col">
                  {/* Image section */}
                  <Image src="https://source.unsplash.com/random/?cats/" id="articleImg" />

                  {/* Article body */}
                  <div className="border-left border-right p-4 justify-content-center  d-flex">
                     <p style={{ width: "80%" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Velit sed ullamcorper morbi tincidunt.
                        Ipsum a arcu cursus vitae congue. Arcu odio ut sem
                        nulla. Ornare arcu odio ut sem nulla pharetra diam sit.
                        Est lorem ipsum dolor sit amet consectetur. Proin nibh
                        nisl condimentum id venenatis a condimentum vitae.
                        Auctor eu augue ut lectus arcu bibendum at varius vel.
                        Mauris commodo quis imperdiet massa tincidunt nunc
                        pulvinar sapien et. Arcu bibendum at varius vel pharetra
                        vel turpis. Eu turpis egestas pretium aenean pharetra
                        magna ac. Quam lacus suspendisse faucibus interdum
                        posuere. Nulla porttitor massa id neque aliquam
                        vestibulum.
                     </p>
                  </div>

                  {/* Bottom bar */}
                  <div className="bg-light py-1 px-1 d-flex ">
                     <Container
                        className="d-flex align-items-center"
                        style={{ height: "110px" }}
                     >
                        <div
                           className="bg-dark rounded-circle d-flex justify-content-center align-items-center"
                           style={{ width: "92px", height: "92px" }}
                        >
                           <Image
                              src="https://source.unsplash.com/random/?face/"
                              roundedCircle
                              className="p-1"
                              style={{ height: "90px", width: "90px" }}
                           />
                        </div>
                        <h5 className="ml-3 ms-3 mb-0">Author Name</h5>
                     </Container>
                  </div>
               </div>
            </div>
         </Container>
      </>
   );
}

export default MainPage;
