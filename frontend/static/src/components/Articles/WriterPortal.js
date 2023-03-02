import { useState } from "react";
import { Container, Dropdown, Form, Button } from "react-bootstrap";
import Cookies from "js-cookie";
import "bootstrap/dist/css/bootstrap.min.css";

function TextEditor() {
   const [body, setBody] = useState("");
   const [title, setTitle] = useState("");

   const handleError = (err) => {
      console.warn.log(err);
   };

   const handleSaveToDraft = () => {
      // Add logic to save text to draft
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      const options = {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": Cookies.get("csrftoken"),
         },
         body: JSON.stringify({
            body,
            title,
         }),
      };

      const response = await fetch("/api_v1/articles/", options).catch(
         handleError
      );
      if (!response.ok) {
         throw new Error("Network response not ok");
      }

      const data = await response.json();
      console.log({ data });
      setBody("");
      setTitle("");
   };
   return (
      <Container className="my-5 w-50 bg-light">
         <div className="d-flex justify-content-between align-items-center">
            <h2>Text Editor</h2>
         </div>
         <hr />
         <form onSubmit={handleSubmit}>
            <div className="col-12 bg-light d-flex flex-row align-items-center">
               <label htmlFor="title"></label>
               <input
                  as="textarea"
                  className="m-2 w-50 p-2 mr-auto"
                  placeholder="Enter title"
                  type="text"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
               />
               <Dropdown className="d-inline mx-2">
                  <Dropdown.Toggle id="dropdown-autoclose-true">
                     Categories
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                     <Dropdown.ItemText></Dropdown.ItemText>
                     <Dropdown.Item href="#/action-1">
                        Entertainment
                     </Dropdown.Item>
                     <Dropdown.Item href="#/action-2">Sports</Dropdown.Item>
                     <Dropdown.Item href="#/action-3">Events</Dropdown.Item>
                     <Dropdown.ItemText></Dropdown.ItemText>
                     <Dropdown.Item href="#/action-4">Lifestyle</Dropdown.Item>
                     <Dropdown.Item href="#/action-5">Health</Dropdown.Item>
                     <Dropdown.Item href="#/action-6">Science</Dropdown.Item>
                  </Dropdown.Menu>
               </Dropdown>
               <div className="d-flex">
                  <div className="mx-1">`$Author Name`</div>

                  <div className="mx-1">Status: `draft`</div>
               </div>
            </div>

            <label htmlFor="bodytext"></label>
            <Form.Control
               as="textarea"
               rows={10}
               type="text"
               name="body"
               value={body}
               id="bodytext"
               onChange={(e) => setBody(e.target.value)}
            ></Form.Control>
            <div className="col-12 p-2 mt-3 bg-light position-relative">
               <Button variant="outline-success" type="submit">
                  Save to Draft
               </Button>
               <Button
                  className="position-absolute end-0 me-2"
                  type="submit"
                  variant="success"
               >
                  Save
               </Button>
            </div>
         </form>
      </Container>
   );
}

export default TextEditor;
