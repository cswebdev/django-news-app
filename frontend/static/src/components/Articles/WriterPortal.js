import { useState } from "react";
import { Container, Dropdown, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function TextEditor() {
   const [text, setText] = useState("");

   const handleSaveToDraft = () => {
      // Add logic to save text to draft
   };

   const handleSubmit = () => {
      // Add logic to submit text
   };

   return (
      <Container className="my-5 w-50 bg-light">
         <div className="d-flex justify-content-between align-items-center">
            <h2>Text Editor</h2>
         </div>
         <hr />
         <div className="col-12 bg-light d-flex flex-row align-items-center">
            <h4 className="p-2">Title</h4>
            <label htmlFor="title"></label>
            <input
               className="m-2 w-50 p-2 mr-auto"
               placeholder="Enter title"
               type="text"
               name="title"
            />
            <Dropdown className="d-inline mx-2">
               <Dropdown.Toggle id="dropdown-autoclose-true">
                  Categories
               </Dropdown.Toggle>
               <Dropdown.Menu>
                  <Dropdown.ItemText></Dropdown.ItemText>
                  <Dropdown.Item href="#/action-1">Entertainment</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Sports</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Events</Dropdown.Item>
                  <Dropdown.ItemText></Dropdown.ItemText>
                  <Dropdown.Item href="#/action-4">Lifestyle</Dropdown.Item>
                  <Dropdown.Item href="#/action-5">Health</Dropdown.Item>
                  <Dropdown.Item href="#/action-6">Science</Dropdown.Item>
               </Dropdown.Menu>
            </Dropdown>
            <h6>Author Name</h6>
         </div>
         <form>
            <Form.Control
               as="textarea"
               rows={10}
               value={text}
               onChange={(e) => setText(e.target.value)}
            />
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
