import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { Container } from "react-bootstrap";

function Article(props) {
   const articleHTML = props.articles.map((article) => <container></container>);

   return (
      <Container className="my-5 w-50 bg-light">
         <div className="row col-md-8 bg-info"></div>
      </Container>
   );
}

export default Article;
