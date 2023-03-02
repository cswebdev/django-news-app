import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";

function Article(props) {
   const articlesHTML = props.articles.map((article) => (
      
      <Container className="my-5 " style={{ width: "50%" }} key={article.id}>
         <div className="row">
            <div className="col">
               {/* Image section */}
               <Image
                  src="https://source.unsplash.com/random/?cats/"
                  id="articleImg"
               />
               <div>
                  <h4>{article.author}</h4>
               </div>
               {/* Article body */}
               <div className="border-left border-right p-4 justify-content-center  d-flex">
                  <p
                     id="article-text"
                     key={article.id}
                     style={{ width: "80%" }}
                  >
                     {article.body}
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
   ));

   return <div>{articlesHTML}</div>;
}

export default Article;
