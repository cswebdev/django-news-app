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
import Article from "../Articles/Article";

function MainPage() {
   const navigate = useNavigate();
   const [articles] = useState([]);

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
         <Article articles={articles} />
      </>
   );
}

export default MainPage;
